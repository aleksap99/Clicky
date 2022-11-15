import { createStandaloneToast } from "@chakra-ui/react";
import { Equipped, EquipSlot } from "../../../data/equipment/equipment.types";
import { EquipableInfo, ItemSpecification } from "../../../data/items/items.types";
import { PlayerStats } from "../../../data/stats/stats.types";
const { toast } = createStandaloneToast()

export function equipItems(currentEquipped: Equipped, item: ItemSpecification, currentStats: PlayerStats) {
  if (item.equipableInfo?.equipSlot) {
    type ObjectKey = keyof typeof currentEquipped;
    const equipSlot: string = item.equipableInfo?.equipSlot.toLowerCase();
    const key = equipSlot as ObjectKey;
    if (currentEquipped[key]?.id === item.id) {
      toast({
        title: "You cannot equip the same item.",
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    currentEquipped[key] = item;
    addStats(currentStats, item.equipableInfo);
  }
}

export function unequipItems(currentEquipped: Equipped, equipSlot: EquipSlot, currentStats: PlayerStats) {
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
  if (statsToAdd.woodcutting) {
    currentStats.woodcutting += statsToAdd.woodcutting;
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
  if (statsToAdd.woodcutting) {
    currentStats.woodcutting -= statsToAdd.woodcutting;
  }
}
