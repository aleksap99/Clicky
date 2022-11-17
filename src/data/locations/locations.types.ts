export type Location = {
  id: number;
  code: string;
  name: string;
  description?: string;
  realm: string;
  region: string;
  enemyIds?: number[];
  requiredItemId?: number;
  x: number;
  y: number;
}
