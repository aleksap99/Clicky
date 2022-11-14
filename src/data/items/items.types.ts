import { EquipSlot } from "../equipment/equipment.types";

export enum ItemType {
  Material,
  Consumable,
  Weapon,
  Armor,
}

export interface EquipableInfo {
  equipSlot: EquipSlot;
  strength?: number;
  dexterity?: number;
  haste?: number;
  damage?: number;
  armor?: number;
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

