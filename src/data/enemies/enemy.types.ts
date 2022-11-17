import { v4 as uuidv4 } from 'uuid';
import { ItemAmountRange } from '../items/items.types';

export type EnemySpecification = {
  id: number;
  name: string;
  health: number;
  damage: number;
  armor: number;
  xpGain: number; 
  drops: ItemAmountRange[];
  imagePath: string;
}

export class EnemyInstance {
  id: string;
  specification: EnemySpecification;
  currentHealth: number;
  top: number;
  left: number;

  constructor(enemySpecification: EnemySpecification, top: number, left: number) {
    this.id = uuidv4();
    this.specification = enemySpecification;
    this.currentHealth = enemySpecification.health;
    this.top = top;
    this.left = left;
  }
}

