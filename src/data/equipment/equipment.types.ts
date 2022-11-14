import { ItemSpecification } from "../items/items.types";

export type RequiredSlotItem = {
  slot: EquipSlot;
  itemId: number;
}

export enum EquipSlot {
  Head = "HEAD",
  Chest = "CHEST",
  Gloves = "GLOVES",
  Feet = "FEET",
  Legs = "LEGS",
  Ring = "RING",
  Trinket = "TRINKET",
  Neck = "NECK",
  Mainhand = "MAINHAND",
  Offhand = "OFFHAND",
}

export type Equipped = {
  mainhand: ItemSpecification | null;
  offhand: ItemSpecification | null;
  chest: ItemSpecification | null;
  gloves: ItemSpecification | null;
  head: ItemSpecification | null;
  neck: ItemSpecification | null;
  legs: ItemSpecification | null;
  feet: ItemSpecification | null;
  trinket: ItemSpecification | null;
  ring: ItemSpecification | null,
}
