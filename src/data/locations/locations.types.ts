export type Location = {
  id: number;
  code: string;
  name: string;
  description?: string;
  realm: string;
  region: string;
  enemies?: any; // TODO: add proper types
  x: number;
  y: number;
}
