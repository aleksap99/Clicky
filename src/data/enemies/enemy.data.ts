import { EnemySpecification } from "./enemy.types";

export const allEnemies: EnemySpecification[] = [
  {
    id: 1,
    name: "Rat",
    health: 10,
    damage: 2,
    armor: 2,
    xpGain: 1,
    drops: [
      {
        itemId: 7,
        amountRange: { min: 1, max: 1 },
        chance: 100,
      }
    ],
    imagePath: "rat.png",
  },
]
