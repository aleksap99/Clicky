export enum ItemType {
	Material,
	Consumable,
	Weapon,
	Armor,
}

export enum EquipSlot {
	Head,
	Chest,
	Gloves,
	Feet,
	Legs,
	Ring,
	Trinket,
}

export type ItemSpecification = {
	id: number;
	name: string;
	type: ItemType;
	equipSlot?: EquipSlot;
	flavorText: string;
	imagePath: string;
}

export type ItemAmount = {
	itemId: number;
	amountRange: Range;
	chance: number;
}

export type Range = {
	min: number;
	max: number;
}

export type InventoryItemAmount = {
	itemSpecification: ItemSpecification;
	amount: number;
}

