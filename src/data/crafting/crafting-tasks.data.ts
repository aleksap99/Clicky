import { SkillCode } from "../skills/skills.types";
import { CraftingTask } from "./crafting.types";

export const allCraftingTasks: CraftingTask[] = [
  {
    id: 1,
    name: "Craft oak planks",
    timeToComplete: 0,
    skillCode: SkillCode.WOODWORKING,
    xpGain: 1,
    consumes: [
      {
        itemId: 1,
        amountRange: { min: 1, max: 1 },
        chance: 100,
      }
    ],
    produces: [
      {
        itemId: 3,
        amountRange: { min: 1, max: 1 },
        chance: 100,
      }
    ],
    locations: ["All"],
  },
];


