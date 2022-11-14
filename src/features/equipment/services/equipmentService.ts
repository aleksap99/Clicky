import { Equipped, EquipSlot } from "../../../data/equipment/equipment.types";
import { EquipableInfo, ItemSpecification } from "../../../data/items/items.types";
import { PlayerStats } from "../../../data/stats/stats.types";

export function equipItems(currentEquipped: Equipped, item: ItemSpecification, currentStats: PlayerStats) {
  // prevent equipping same item multiple times
  if (item.equipableInfo?.equipSlot) {
    type ObjectKey = keyof typeof currentEquipped;
    const equipSlot: string = item.equipableInfo?.equipSlot.toLowerCase();
    const myVar = equipSlot as ObjectKey;
    currentEquipped[myVar] = item;
    addStats(currentStats, item.equipableInfo);
  }
}

export function unequipItems(currentEquipped: Equipped, equipSlot: EquipSlot,  currentStats: PlayerStats) {
    type ObjectKey = keyof typeof currentEquipped;
    const equipSlotLowered: string = equipSlot.toLowerCase();
    const key = equipSlotLowered as ObjectKey;
    const item = currentEquipped[key];
    if (item && item.equipableInfo) {
      removeStats(currentStats, item.equipableInfo);
      currentEquipped[key] = null;
    }
}

function addStats(currentStats: PlayerStats, statsToAdd: EquipableInfo): void {
  if (statsToAdd.damage) {
    currentStats.damage += statsToAdd.damage;
  }
  if (statsToAdd.armor) {
    currentStats.armor += statsToAdd.armor;
  }
  if (statsToAdd.strength) {
    currentStats.strength += statsToAdd.strength;
  }
  if (statsToAdd.dexterity) {
    currentStats.dexterity += statsToAdd.dexterity;
  }
  if (statsToAdd.haste) {
    currentStats.haste += statsToAdd.haste;
  }
}

function removeStats(currentStats: PlayerStats, statsToAdd: EquipableInfo): void {
  if (statsToAdd.damage) {
    currentStats.damage -= statsToAdd.damage;
  }
  if (statsToAdd.armor) {
    currentStats.armor -= statsToAdd.armor;
  }
  if (statsToAdd.strength) {
    currentStats.strength -= statsToAdd.strength;
  }
  if (statsToAdd.dexterity) {
    currentStats.dexterity -= statsToAdd.dexterity;
  }
  if (statsToAdd.haste) {
    currentStats.haste -= statsToAdd.haste;
  }
}
