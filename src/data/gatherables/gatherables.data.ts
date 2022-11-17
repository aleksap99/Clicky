import { GatherableSpecification } from "./gatherables.types";

export const woodcuttingGatherables: GatherableSpecification[] = [
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
      requiredLevel: 0,
    },
    locationIds: [11],
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
      requiredLevel: 1,
    },
    locationIds: [11],
    imagePath: "pine-tree.png",
  },
  {
    id: 3,
    name: "Palm tree",
    health: 10,
    drops: [
      {
        itemId: 6,
        amountRange: { min: 1, max: 3 },
        chance: 30,
      },
    ],
    skillInfo: {
      id: 1,
      name: "Woodcutting",
      xpGain: 2,
      requiredLevel: 0,
    },
    locationIds: [7],
    imagePath: "palm-tree.png",
  }

]

export const miningGatherables: GatherableSpecification[] = [

];

