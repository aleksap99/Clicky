import { Gatherable } from "./gatherables.types";

const allGatherables: Gatherable[] = [
	{
		id: 1,
		name: "Oak tree",
		health: 5,
		drops: [
			{
				itemId: 1,
				amountRange: { min: 1, max: 3 },
				chance: 100,
			},
		],
		skillInfo: {
			id: 1,
			name: "Woodcutting",
			xpGain: 1,
		},
		imagePath: "oak-tree.png",
	},
	{
		id: 2,
		name: "Pine tree",
		health: 10,
		drops: [
			{
				itemId: 2,
				amountRange: { min: 1, max: 3 },
				chance: 20,
			},
		],
		skillInfo: {
			id: 1,
			name: "Woodcutting",
			xpGain: 2,
		},
		imagePath: "pine-tree.png",
	}
]

export default allGatherables;
