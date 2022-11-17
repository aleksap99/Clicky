import { store } from "../../../app/store";
import { ItemAmount } from "../../../data/items/items.types";

export function inventoryHasItems(itemAmounts: ItemAmount[]) {
  let hasEnough = true;
  const inventory = store.getState().reducer.inventory.inventory;
  for (let i = 0; i < itemAmounts.length; i++) {
    const itemAmount = itemAmounts[i];
    const foundItem = inventory.find((invItem) => invItem.itemSpecification.id === itemAmount.itemId);
    if (foundItem) {
      if (!(foundItem.amount > itemAmount.amount)) {
        hasEnough = false
      }
    } else {
      hasEnough = false;
      break;
    }
  }

  return hasEnough;
}

export function inventoryHasItem(itemAmount: ItemAmount) {
  let hasEnough = true;
  const inventory = store.getState().reducer.inventory.inventory;
  const foundItem = inventory.find((invItem) => invItem.itemSpecification.id === itemAmount.itemId);
  if (foundItem) {
    if (!(foundItem.amount >= itemAmount.amount)) {
      hasEnough = false
    }
  } else {
    hasEnough = false;
  }

  return hasEnough;
}
