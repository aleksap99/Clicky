import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InventoryItemAmount, ItemAmount } from "../../../data/items/items.types";
import allItemSpecifications from "../../../data/items/itemspecification.data";
import { getRandomFromRange } from "../../../util/utils";

type InventoryState = {
	inventory: InventoryItemAmount[];
	equipped: Equipped;
}

type Equipped = {
	mainhand: string | null;
	offhand: string | null;
	chestArmor: string | null;
	gloves: string | null;
	head: string | null;
	neck: string | null;
	legs: string | null;
	feet: string | null;
	trinket: string | null;
	ring: string | null,
}

const initialState: InventoryState = {
	inventory: [],
	equipped: {
		mainhand: null,
		offhand: null,
		chestArmor: null,
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
		addItemAmountToInventory: (state, action: PayloadAction<ItemAmount[]>) => {
			const drops: ItemAmount[] = action.payload;
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
		// removeItemFromInventory(state, action) {
		//   state
		// }
		setEquipped(state, action) {
			state.equipped = action.payload;
		},
		equipItem(state, action) {
			const item = action.payload;
			switch (item.equipSlot) {
				case "MAINHAND":
					state.equipped.mainhand = item;
					break;
				case "OFFHAND":
					state.equipped.offhand = item;
					break;
				case "CHEST":
					state.equipped.chestArmor = item;
					break;
				case "GLOVES":
					state.equipped.gloves = item;
					break;
				case "HEAD":
					state.equipped.head = item;
					break;
				case "NECK":
					state.equipped.neck = item;
					break;
				case "FEET":
					state.equipped.feet = item;
					break;
				case "TRINKET":
					state.equipped.trinket = item;
					break;
				case "LEGS":
					state.equipped.legs = item;
					break;
				case "RING":
					state.equipped.ring = item;
					break;
				default:
					console.error(`Equip slot not found ${item.equipSlot}`);
					break;
			}
		},
		unequipItem(state, action) {
			const equipSlot = action.payload;
			switch (equipSlot) {
				case "MAINHAND":
					state.equipped.mainhand = null;
					break;
				case "OFFHAND":
					state.equipped.offhand = null;
					break;
				case "CHEST":
					state.equipped.chestArmor = null;
					break;
				case "GLOVES":
					state.equipped.gloves = null;
					break;
				case "HEAD":
					state.equipped.head = null;
					break;
				case "NECK":
					state.equipped.neck = null;
					break;
				case "FEET":
					state.equipped.feet = null;
					break;
				case "TRINKET":
					state.equipped.trinket = null;
					break;
				case "LEGS":
					state.equipped.legs = null;
					break;
				case "RING":
					state.equipped.ring = null;
					break;
				default:
					console.error(`Equip slot not found ${equipSlot}`);
					break;
			}
		},
	},
});

export const { setInventory, addItemAmountToInventory, setEquipped, equipItem, unequipItem } =
	inventorySlice.actions;
export const inventoryReducer = inventorySlice.reducer;
