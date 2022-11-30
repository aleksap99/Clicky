export interface LocationGatherable {
  gatherableId: number;
  amount?: number;
  chance: number;
}

interface GatherablesInfo {
  amount: number;
  gatherablesData: LocationGatherable[];
}

export interface LocationEnemy {
  enemyId: number;
  amount?: number;
  chance: number;
}

interface EnemyInfo {
  amount: number;
  enemyData: LocationEnemy[];
}

export type Location = {
  id: number;
  code: string;
  name: string;
  description?: string;
  realm: string;
  region: string;
  gatherablesInfo?: GatherablesInfo;
  enemyInfo?: EnemyInfo;
  requiredItemId?: number;
  x: number;
  y: number;
}
