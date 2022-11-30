import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { GatherableInstance } from "../../data/gatherables/gatherables.types";
import { ItemAmountRange, Range } from "../../data/items/items.types";
import { LocationGatherable } from "../../data/locations/locations.types";
import { PlayerSkill } from "../../data/skills/skills.types";
import { getRandomFromRange } from "../../util/utils";
import { addItemAmountRangeToInventory } from "../inventory/state/inventorySlice";
import { increaseSkill } from "../playerSkills/state/playerSkillsSlice";
import Gatherable from "./Gatherable";
import { findGatherableById } from "./services/gatherablesService";

interface GatherableProps {
  skill: string;
}

const Gatherables = ({ skill }: GatherableProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [aliveGatherables, setAliveGatherables] = useState<GatherableInstance[]>([]);
  const { skills } = useAppSelector((state: any) => state.reducer.playerSkills);
  const { travelingStatus } = useAppSelector((state: any) => state.reducer.traveling);
  const { playerStats } = useAppSelector((state: any) => state.reducer.inventory);
  const playerSkill = skills.find((playerSkill: PlayerSkill) => playerSkill.skill.name === skill);
  const dispatch = useAppDispatch();
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);


  useEffect(() => {
    const gatherablesInfo = travelingStatus.currentLocation.gatherablesInfo;
    let amountToGenerate = gatherablesInfo.amount;
    let currentIndex = 0;
    const chanceRange: Range = { min: 0, max: 100 };
    const instancesToDisplay: GatherableInstance[] = [];
    while (amountToGenerate > 0) {
      // get current gatherable
      const locationGatherable: LocationGatherable = gatherablesInfo.gatherablesData[currentIndex];
      // roll chance
      const rolledChance = getRandomFromRange(chanceRange);
      if (rolledChance < locationGatherable.chance) {
        // if chance is good add to list and decrement counter
        const gatherableSpecification = findGatherableById(locationGatherable.gatherableId);
        if (gatherableSpecification) {
          const newInstance = new GatherableInstance(gatherableSpecification, getTop(height, top), getLeft(width, left));
          instancesToDisplay.push(newInstance);
          amountToGenerate--;
        }
      }
      if (currentIndex === gatherablesInfo.gatherablesData.length - 1) {
        currentIndex = 0;
      } else {
        // increase counter
        currentIndex++;
      }
    }
    setAliveGatherables(instancesToDisplay);
  }, [skill, travelingStatus.currentLocation.gatherablesData, height, width, top, left])

  useEffect(() => {
    console.log("use effect 2")
    if (ref.current) {
      setHeight(ref.current.clientHeight);
      setTop(ref.current.clientTop);
      setWidth(ref.current.clientWidth);
      setLeft(ref.current.clientLeft);

    }
  }, [])

  const takeDamage = (clicked: GatherableInstance) => {
    clicked.currentHealth = clicked.currentHealth - 1;
    if (clicked.currentHealth <= 0) {
      let rest = aliveGatherables.filter((aliveGatherable) => aliveGatherable.id !== clicked.id)
      setAliveGatherables(rest);

      const droppedItems = dropItems(clicked.specification.drops);
      if (droppedItems.length > 0) {
        type ObjectKey = keyof typeof playerStats;
        const skillLowered: string = skill.toLowerCase();
        const key = skillLowered as ObjectKey;
        const skillFlatRate = playerStats[key]
        dispatch(addItemAmountRangeToInventory({ drops: droppedItems, flatRate: skillFlatRate }))
      }

      // skill increase happens on each click
      dispatch(increaseSkill({ skillId: clicked.specification.skillInfo.id, amount: clicked.specification.skillInfo.xpGain }));
    }
  }

  const dropItems = (drops: ItemAmountRange[]) => {
    return drops.filter((drop) => {
      const rolledChance = getRandomFromRange({ min: 0, max: 100 });
      if (rolledChance <= drop.chance) {
        return true;
      }
      return false;
    })
  }

  return (
    <Box ref={ref} height="100%">
      {aliveGatherables.map((gatherable: GatherableInstance, index) =>
        <Gatherable key={index} gatherableInstance={gatherable} takeDamage={takeDamage} canGather={gatherable.specification.skillInfo.requiredLevel <= playerSkill.currentLevel} />
      )}
    </Box>
  )
}

function getTop(height: number, clientTop: number) {
  const max = height - clientTop;
  const min = clientTop + 64; // 64 is pixel art size
  return Math.random() * (max - min) + min;
}

function getLeft(width: number, clientLeft: number) {
  const max = width - clientLeft - 64;
  const min = clientLeft;
  return Math.random() * (max - min) + min;
}

export default Gatherables;
