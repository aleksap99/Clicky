import { RequiredSlotItem } from "../equipment/equipment.types";
import { ItemAmount } from "../items/items.types";
import { SkillCode } from "../skills/skills.types";

export type CraftingTask = {
  id: number;
  name: string;
  skillCode: SkillCode;
  xpGain: number;
  timeToComplete: number;
  consumes: ItemAmount[];
  produces: ItemAmount[];
  requiredItem?: RequiredSlotItem;
  locations: string[];
}

export type CraftingTaskAmount = {
  taskId: number;
  amount: number;
}

