import { ItemAmount, ItemSpecification } from "../items/items.types";

type SkillInfo = {
	id: number;
	name: string;
	xpGain: number;
	requiredLevel?: number;
}

export type Gatherable = {
	id: number;
	name: string;
	health: number;
	drops: ItemAmount[];
	imagePath: string;
	skillInfo: SkillInfo;
	requiredItem?: ItemSpecification; // maybe replace this with an id of the requried item / or name or code
}
