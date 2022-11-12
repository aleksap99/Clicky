import { ItemAmountRange, ItemSpecification } from "../items/items.types";

type SkillInfo = {
	id: number;
	name: string;
	xpGain: number;
	requiredLevel: number;
}

export type GatherableSpecification = {
	id: number;
	name: string;
	health: number;
	drops: ItemAmountRange[];
	imagePath: string;
	skillInfo: SkillInfo;
	requiredItem?: ItemSpecification; // maybe replace this with an id of the requried item / or name or code
}
