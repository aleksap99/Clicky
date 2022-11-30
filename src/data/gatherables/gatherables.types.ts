import { v4 as uuidv4 } from 'uuid';
import { ItemAmountRange } from "../items/items.types";

type SkillInfo = {
  id: number;
  name: string;
  xpGain: number;
  requiredLevel: number;
}

export type GatherableSpecification = {
  id: number;
  name: string;
  health: number;
  drops: ItemAmountRange[];
  imagePath: string;
  skillInfo: SkillInfo;
  requiredItemId?: number;
}

export class GatherableInstance {
  id: string;
  specification: GatherableSpecification;
  currentHealth: number;
  top: number;
  left: number;

  constructor(gatherableSpecification: GatherableSpecification, top: number, left: number) {
    this.id = uuidv4();
    this.specification = gatherableSpecification;
    this.currentHealth = gatherableSpecification.health;
    this.top = top;
    this.left = left;
  }

}
