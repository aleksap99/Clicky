import { GatherableSpecification } from "./gatherables.types";

export const allGatherables: GatherableSpecification[] = [
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
    imagePath: "palm-tree.png",
  },
{
    id: 4,
    name: "Blue oak tree",
    health: 50,
    drops: [
      {
        itemId: 8,
        amountRange: { min: 1, max: 3 },
        chance: 100,
      },
    ],
    skillInfo: {
      id: 1,
      name: "Woodcutting",
      xpGain: 1,
      requiredLevel: 5,
    },
    imagePath: "blue-oak-tree.png",
  },

]


