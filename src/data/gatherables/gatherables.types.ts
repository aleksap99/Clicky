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

  constructor(gatherableSpecification: GatherableSpecification) {
    this.id = uuidv4();
    this.specification = gatherableSpecification;
    this.currentHealth = gatherableSpecification.health;
    this.top = this.getTop();
    this.left = this.getLeft();
  }

  getTop() {
    var wh = (window as any).innerHeight;
    var posx = Math.round(Math.random() * wh) - 20;
    return posx;
  }

  getLeft() {
    var ww = (window as any).innerWidth;
    var posy = Math.round(Math.random() * ww) - 20;
    return posy;
  }
}
