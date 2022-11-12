import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CraftingTaskAmount } from "../../../data/crafting/crafting.types";

interface CraftingState {
  craftingQueue: CraftingTaskAmount[];
  isCrafting: boolean;
}

const initialState: CraftingState = {
  craftingQueue: [],
  isCrafting: false,
}

const craftingSlice = createSlice({
  name: "crafting",
  initialState,
  reducers: {
    addCraftingTaskToQueue(state, action: PayloadAction<CraftingTaskAmount>) {
      state.craftingQueue.push(action.payload);
    },
    cancelCraftingTask(state, action) {

    },
    startCrafting(state, action) {

    }
  }
})

export const { addCraftingTaskToQueue, cancelCraftingTask, startCrafting } = craftingSlice.actions;
export const craftingReducer = craftingSlice.reducer;
