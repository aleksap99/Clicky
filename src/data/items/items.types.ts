import { EquipSlot } from "../equipment/equipment.types";

export enum ItemType {
  Material = "Material",
  Consumable = "Consumable",
  Weapon = "Weapon",
  Armor = "Armor",
}

export enum WeaponType {
  Sword = "Sword",
  Axe = "Axe",
  Dagger = "Dagger",
}

export interface EquipableInfo {
  equipSlot: EquipSlot;
  weaponType?: WeaponType;
  strength?: number;
  dexterity?: number;
  haste?: number;
  damage?: number;
  armor?: number;
  woodcutting?: number;
}

export type ItemSpecification = {
  id: number;
  name: string;
  type: ItemType;
  flavorText: string;
  imagePath: string;
  equipableInfo?: EquipableInfo;
}

export type ItemAmount = {
  itemId: number;
  amount: number;
  chance: number;
}

export type ItemAmountRange = {
  itemId: number;
  amountRange: Range;
  chance: number;
}

export type Range = {
  min: number;
  max: number;
}

export type InventoryItemAmount = {
  itemSpecification: ItemSpecification;
  amount: number;
}

