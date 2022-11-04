import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { woodcuttingGatherables, miningGatherables } from "../../data/gatherables/gatherables.data";
import { GatherableSpecification } from "../../data/gatherables/gatherables.types";
import { ItemAmount } from "../../data/items/items.types";
import { getRandomFromRange } from "../../util/utils";
import { addItemAmountToInventory } from "../inventory/state/inventorySlice";
import { increaseSkill } from "../playerSkills/state/playerSkillsSlice";
import Gatherable from "./Gatherable";

interface GatherableProps {
	skill: string;
}

const Gatherables = ({ skill }: GatherableProps) => {
	const [aliveGatherables, setAliveGatherables] = useState<any[]>([]);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const allGatherables: GatherableSpecification[] = getAllGatherables(skill);
		console.log("use called");
		const arr = [];
		for (let i = 0; i < 10; i++) {
			const randInt = Math.floor(Math.random() * allGatherables.length);
			const randomGatherable = allGatherables[randInt];
			arr.push(
				{
					id: i,
					health: randomGatherable.health,
					top: getTop(),
					left: getLeft(),
					imagePath: randomGatherable.imagePath,
					drops: randomGatherable.drops,
					skillInfo: randomGatherable.skillInfo,
				}
			);
		}
		setAliveGatherables(arr);
	}, [skill])

	const takeDamage = (clicked: any) => {
		clicked.health = clicked.health - 1
		if (clicked.health <= 0) {
			let rest = aliveGatherables.filter((aliveGatherable) => aliveGatherable.id !== clicked.id)
			setAliveGatherables(rest);

			const droppedItems = dropItems(clicked.drops);
			if (droppedItems.length > 0) {
				dispatch(addItemAmountToInventory(droppedItems))
			}
			dispatch(increaseSkill({ skillId: clicked.skillInfo.id, amount: clicked.skillInfo.xpGain }));
		}
	}

	const dropItems = (drops: ItemAmount[]) => {
		return drops.filter((drop) => {
			const rolledChance = getRandomFromRange({ min: 0, max: 100 });
			if (rolledChance <= drop.chance) {
				return true;
			}
			return false;
		})
	}

	return (
		<div>
			{aliveGatherables.map((gatherable, index) =>
				<Gatherable key={index} gatherable={gatherable} takeDamage={takeDamage} />
			)}
		</div>
	)
}

function getTop() {
	var wh = (window as any).innerHeight;
	var posx = Math.round(Math.random() * wh) - 20;
	return posx;
}

function getLeft() {
	var ww = (window as any).innerWidth;
	var posy = Math.round(Math.random() * ww) - 20;
	return posy;
}

function getAllGatherables(skill: string) {
	if (skill === "Woodcutting") {
		return woodcuttingGatherables
	} else if (skill === "Mining") {
		return miningGatherables
	} else {
		console.error(`Skill ${skill} not recognized.`);
		return [];
	}
}


export default Gatherables;
