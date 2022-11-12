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
        amount: 1,
        chance: 100,
      }
    ],
    produces: [
      {
        itemId: 3 ,
        amount: 1,
        chance: 100,
      }
    ],
    locations: ["All"],
  },
{
    id: 2,
    name: "Cook chicken",
    timeToComplete: 0,
    skillCode: SkillCode.COOKING,
    xpGain: 1,
    consumes: [
      {
        itemId: 1,
        amount: 1,
        chance: 100,
      }
    ],
    produces: [
      {
        itemId: 3,
        amount: 1,
        chance: 100,
      }
    ],
    locations: ["All"],
  },

];


