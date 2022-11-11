import { ItemSpecification } from "../../../data/items/items.types";
import allItemSpecifications from "../../../data/items/itemspecification.data";

export function findItemById(id: number): ItemSpecification | undefined {
  return allItemSpecifications.find((item) => item.id === id);
}
