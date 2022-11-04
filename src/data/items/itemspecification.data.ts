import { ItemSpecification, ItemType } from "./items.types";

const allItemSpecifications: ItemSpecification[] = [
	{
		id: 1,
		name: "Oak log",
		type: ItemType.Material,
		flavorText: "Nice oak logs",
		imagePath: "oak-log.png",
	},
	{
		id: 2,
		name: "Pine log",
		type: ItemType.Material,
		flavorText: "Nice pine logs",
		imagePath: "pine-log.png",
	},
]

export default allItemSpecifications;

