export interface LocationGatherable {
  gatherableId: number;
  amount?: number;
  chance: number;
}

interface GatherablesInfo {
  amount: number;
  gatherablesData: LocationGatherable[];
}

export type Location = {
  id: number;
  code: string;
  name: string;
  description?: string;
  realm: string;
  region: string;
  enemyIds?: number[];
  gatherablesInfo?: GatherablesInfo;
  requiredItemId?: number;
  x: number;
  y: number;
}
