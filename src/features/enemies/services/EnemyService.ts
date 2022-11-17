import { allEnemies } from "../../../data/enemies/enemy.data";
import { EnemySpecification } from "../../../data/enemies/enemy.types";

export function findEnemiesByIds(ids: number[]): EnemySpecification[] {
  return allEnemies.filter((enemy) => ids.includes(enemy.id));
}
