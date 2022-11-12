import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EquipSlot } from "../../../data/equipment/equipment.types";
import { InventoryItemAmount, ItemAmount, ItemAmountRange, ItemSpecification, ItemType } from "../../../data/items/items.types";
import allItemSpecifications from "../../../data/items/itemspecification.data";
import { getRandomFromRange } from "../../../util/utils";

interface InventoryState {
  inventory: InventoryItemAmount[];
  equipped: Equipped;
}

type Equipped = {
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

const initialState: InventoryState = {
  inventory: [
    {
      itemSpecification: {
        id: 4,
        name: "Iron shortsword",
        type: ItemType.Weapon,
        flavorText: "Most common weapon for a warrior",
        imagePath: "iron_short_sword.png",
        equipableInfo: {
          equipSlot: EquipSlot.Mainhand,
          damage: 5,
        }
      },
      amount: 1,
    }
  ],
  equipped: {
    mainhand: null,
    offhand: null,
    chest: null,
    gloves: null,
    head: null,
    neck: null,
    legs: null,
    feet: null,
    trinket: null,
    ring: null,
  },
}

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setInventory(state, action) {
      state.inventory = action.payload;
    },
    addItemAmountRangeToInventory: (state, action: PayloadAction<ItemAmountRange[]>) => {
      const drops: ItemAmountRange[] = action.payload;
      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const itemToIncrease = state.inventory.find((inventoryItem) => inventoryItem.itemSpecification.id === drop.itemId);
        if (itemToIncrease) {
          itemToIncrease.amount += getRandomFromRange(drop.amountRange);
        } else {
          const itemSpecification = allItemSpecifications.find((item) => drop.itemId === item.id);
          if (itemSpecification) {
            const inventoryItemToAdd: InventoryItemAmount = {
              itemSpecification: itemSpecification,
              amount: getRandomFromRange(drop.amountRange),
            }
            state.inventory.push(inventoryItemToAdd);
          } else {
            console.error("Error adding item to inventory -> Item specification not found");
          }
        }
      }
    },
    addItemAmountToInventory: (state, action: PayloadAction<ItemAmount[]>) => {
      const drops: ItemAmount[] = action.payload;
      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const itemToIncrease = state.inventory.find((inventoryItem) => inventoryItem.itemSpecification.id === drop.itemId);
        if (itemToIncrease) {
          itemToIncrease.amount += drop.amount;
        } else {
          const itemSpecification = allItemSpecifications.find((item) => drop.itemId === item.id);
          if (itemSpecification) {
            const inventoryItemToAdd: InventoryItemAmount = {
              itemSpecification: itemSpecification,
              amount: drop.amount,
            }
            state.inventory.push(inventoryItemToAdd);
          } else {
            console.error("Error adding item to inventory -> Item specification not found");
          }
        }
      }
    },

    removeItemFromInventory(state, action: PayloadAction<ItemAmount[]>) {
      const itemAmountsToRemove: ItemAmount[] = action.payload;
      itemAmountsToRemove.forEach((itemAmountToRemove) => {
        const foundItem = state.inventory.find((invItem) =>
          invItem.itemSpecification.id === itemAmountToRemove.itemId);
        if (foundItem) {
          foundItem.amount -= itemAmountToRemove.amount;
          if (foundItem.amount <= 0) {
            state.inventory = state.inventory.filter((item) =>
              item.itemSpecification.id !== foundItem.itemSpecification.id);
          }
        }
      })
    },
    setEquipped(state, action) {
      state.equipped = action.payload;
    },
    equipItem(state, action: PayloadAction<ItemSpecification>) {
      const item = action.payload;
      switch (item.equipableInfo?.equipSlot) {
        case Number(EquipSlot.Mainhand):
          state.equipped.mainhand = item;
          break;
        case Number(EquipSlot.Offhand):
          state.equipped.offhand = item;
          break;
        case Number(EquipSlot.Chest):
          state.equipped.chest = item;
          break;
        case Number(EquipSlot.Gloves):
          state.equipped.gloves = item;
          break;
        case Number(EquipSlot.Head):
          state.equipped.head = item;
          break;
        case Number(EquipSlot.Neck):
          state.equipped.neck = item;
          break;
        case Number(EquipSlot.Feet):
          state.equipped.feet = item;
          break;
        case Number(EquipSlot.Trinket):
          state.equipped.trinket = item;
          break;
        case Number(EquipSlot.Legs):
          state.equipped.legs = item;
          break;
        case Number(EquipSlot.Ring):
          state.equipped.ring = item;
          break;
        default:
          console.error(`Equip slot not found ${item.equipableInfo?.equipSlot}`);
          break;
      }
    },
    unequipItem(state, action) {
      const equipSlot = action.payload;
      switch (equipSlot) {
        case Number(EquipSlot.Mainhand):
          state.equipped.mainhand = null;
          break;
        case Number(EquipSlot.Offhand):
          state.equipped.offhand = null;
          break;
        case Number(EquipSlot.Chest):
          state.equipped.chest = null;
          break;
        case Number(EquipSlot.Gloves):
          state.equipped.gloves = null;
          break;
        case Number(EquipSlot.Head):
          state.equipped.head = null;
          break;
        case Number(EquipSlot.Neck):
          state.equipped.neck = null;
          break;
        case Number(EquipSlot.Feet):
          state.equipped.feet = null;
          break;
        case Number(EquipSlot.Trinket):
          state.equipped.trinket = null;
          break;
        case Number(EquipSlot.Legs):
          state.equipped.legs = null;
          break;
        case Number(EquipSlot.Ring):
          state.equipped.ring = null;
          break;
        default:
          console.error(`Equip slot not found ${equipSlot}`);
          break;
      }
    },
  },
});

export const { setInventory, addItemAmountToInventory, addItemAmountRangeToInventory, removeItemFromInventory, setEquipped, equipItem, unequipItem } =
  inventorySlice.actions;
export const inventoryReducer = inventorySlice.reducer;
