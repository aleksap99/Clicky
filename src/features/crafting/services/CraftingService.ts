import { CraftingTask } from "../../../data/crafting/crafting.types";
import { SkillCode } from "../../../data/skills/skills.types";

export function findTaskById(tasks: CraftingTask[], id: number): CraftingTask | null {
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id == id) {
      return tasks[i];
    }
  }
  return null;
}

export function getTasksBySkillName(tasks: CraftingTask[], skillCode: SkillCode, locationName: string) {
	return tasks.filter((task) => task.skillCode === skillCode && (task.locations.includes(locationName) || task.locations.includes("All")));
}

export function getTasksByLocation(tasks: CraftingTask[], locationName: string) {
	return tasks.filter((task) => (task.locations.includes(locationName) || task.locations.includes("All")));
}


