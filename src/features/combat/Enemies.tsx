import { Center, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { EnemyInstance, EnemySpecification } from "../../data/enemies/enemy.types";
import { ItemAmountRange } from "../../data/items/items.types";
import { getRandomFromRange } from "../../util/utils";
import { findEnemiesByIds } from "../enemies/services/EnemyService";
import { addItemAmountRangeToInventory, decreasePlayerHealth } from "../inventory/state/inventorySlice";
import { increaseCombatSkill } from "../playerSkills/state/playerSkillsSlice";
import Enemy from "./Enemy";

const Enemies = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);
  const [locationHasEnemies, setLocationHasEnemies] = useState<boolean>(false);
  const [aliveEnemies, setAliveEnemies] = useState<EnemyInstance[]>([]);
  const { travelingStatus } = useAppSelector((state) => state.reducer.traveling);
  const { playerStats, equipped } = useAppSelector((state) => state.reducer.inventory);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (travelingStatus.currentLocation.enemyIds) {
      const enemyInstances: EnemyInstance[] = [];
      const availableEnemies = findEnemiesByIds(travelingStatus.currentLocation.enemyIds);
      for (let i = 0; i < 100; i++) {
        const randInt = Math.floor(Math.random() * availableEnemies.length);
        const randomEnemySpec: EnemySpecification = availableEnemies[randInt];
        const newEnemyInstnace = new EnemyInstance(randomEnemySpec, getTop(height, top), getLeft(width, left));
        enemyInstances.push(newEnemyInstnace);
      }
      setAliveEnemies(enemyInstances);
      setLocationHasEnemies(true);
    } else {
      setLocationHasEnemies(false);
    }
  }, [height, width, top, left])

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
      setTop(ref.current.clientTop);
      setWidth(ref.current.clientWidth);
      setLeft(ref.current.clientLeft);
    }
  })

  const enemyClicked = (clickedEnemy: EnemyInstance) => {
    // enemy takes damage
    clickedEnemy.currentHealth = clickedEnemy.currentHealth - playerStats.damage;
    if (clickedEnemy.currentHealth <= 0) {
      let rest = aliveEnemies.filter((aliveEnemy) => aliveEnemy.id !== clickedEnemy.id)
      setAliveEnemies(rest);

      const droppedItems = dropItems(clickedEnemy.specification.drops);
      if (droppedItems.length > 0) {
        dispatch(addItemAmountRangeToInventory({ drops: droppedItems, flatRate: 0 }))
      }

      // increase weapon skill or unarmed if no weapon is equipped
      const weapon = equipped.mainhand;
      let skillToIncrease = "Unarmed";
      if (weapon && weapon.equipableInfo && weapon.equipableInfo.weaponType) {
        skillToIncrease = weapon.equipableInfo.weaponType;
      }
      dispatch(increaseCombatSkill({ skillName: skillToIncrease, amount: clickedEnemy.specification.xpGain }));
    }

    // player takes damage
    dispatch(decreasePlayerHealth(clickedEnemy.specification.damage));
  }

  const dropItems = (drops: ItemAmountRange[]): ItemAmountRange[] => {
    return drops.filter((drop) => {
      const rolledChance = getRandomFromRange({ min: 0, max: 100 });
      if (rolledChance <= drop.chance) {
        return true;
      }
      return false;
    })
  }
  return (
    <>
      {
        locationHasEnemies ?
          (<div ref={ref} style={{ height: "100%" }}>
            {
              aliveEnemies.map((enemy, index) =>
                <Enemy key={index} enemy={enemy} enemyClicked={enemyClicked} />
              )
            }
          </div >) :
          <Center >
            <Text color="gray.300" fontSize="2xl">No enemies to fight in your current location</Text>
          </Center>
      }
    </>
  );
}

function getTop(height: number, clientTop: number) {
  const max = height - clientTop;
  const min = clientTop + 64; // 64 is pixel art size
  return Math.random() * (max - min) + min;
}

function getLeft(width: number, clientLeft: number) {
  //var ww = ref.current.clientWidth;
  const max = width - clientLeft - 64;
  const min = clientLeft;
  return Math.random() * (max - min) + min;
}
export default Enemies;
