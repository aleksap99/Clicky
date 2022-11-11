import { combineReducers } from "@reduxjs/toolkit";
import { inventoryReducer } from "../features/inventory/state/inventorySlice";
import { playerSkillReducer } from "../features/playerSkills/state/playerSkillsSlice";
import { travelingReducer } from "../features/traveling/state/travelingSlice";

export const rootReducer = combineReducers({
  inventory: inventoryReducer,
  playerSkills: playerSkillReducer,
  traveling: travelingReducer,
});
