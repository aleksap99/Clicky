import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Equipped, EquipSlot } from "../../../data/equipment/equipment.types";
import { InventoryItemAmount, ItemAmount, ItemAmountRange, ItemSpecification, ItemType } from "../../../data/items/items.types";
import allItemSpecifications from "../../../data/items/itemspecification.data";
import { PlayerStats } from "../../../data/stats/stats.types";
import { getRandomFromRange } from "../../../util/utils";
import { equipItems, unequipItems } from "../../equipment/services/equipmentService";

interface InventoryState {
  playerStats: PlayerStats;
  inventory: InventoryItemAmount[];
  equipped: Equipped;
}



const initialState: InventoryState = {
  playerStats: {
    damage: 1,
    armor: 1,
    maxHealth: 100,
    currentHealth: 100,
    strength: 0,
    haste: 0,
    dexterity: 0,
    woodcutting: 0,
  },
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
    },
    {
      itemSpecification: {
        id: 5,
        name: "Daud's pickaxe",
        type: ItemType.Weapon,
        flavorText: "Daud's most precious pickaxe.",
        imagePath: "SKILL_MINING.png",
        equipableInfo: {
          equipSlot: EquipSlot.Mainhand,
          woodcutting: 10,
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
    addItemAmountRangeToInventory: (state, action: PayloadAction<{ drops: ItemAmountRange[], flatRate: number }>) => {
      const drops: ItemAmountRange[] = action.payload.drops;
      const flatRate: number = action.payload.flatRate;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const itemToIncrease = state.inventory.find((inventoryItem) => inventoryItem.itemSpecification.id === drop.itemId);
        if (itemToIncrease) {
          itemToIncrease.amount += getRandomFromRange(drop.amountRange) + flatRate;
        } else {
          const itemSpecification = allItemSpecifications.find((item) => drop.itemId === item.id);
          if (itemSpecification) {
            const inventoryItemToAdd: InventoryItemAmount = {
              itemSpecification: itemSpecification,
              amount: getRandomFromRange(drop.amountRange) + flatRate,
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
      equipItems(state.equipped, item, state.playerStats);
    },
    unequipItem(state, action: PayloadAction<EquipSlot>) {
      const equipSlot = action.payload;
      unequipItems(state.equipped, equipSlot, state.playerStats);
    },
  },
});

export const { setInventory, addItemAmountToInventory, addItemAmountRangeToInventory, removeItemFromInventory, setEquipped, equipItem, unequipItem } =
  inventorySlice.actions;
export const inventoryReducer = inventorySlice.reducer;
