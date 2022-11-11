import { createSlice } from "@reduxjs/toolkit";
import { TravelingStatus } from "../../../data/traveling/traveling.types";
import { calculateTimeleft } from "../services/travelingService";

interface TravelingState {
  travelingStatus: TravelingStatus;
}

const initialState: TravelingState = {
  travelingStatus: {
    traveling: false,
    currentLocation:
    {
      id: 11,
      code: "LOC_IRONNOOK",
      name: "Ironnook",
      realm: "Thalonia",
      region: "The Quite Isle",
      description: "Starting town",
      x: 50,
      y: 19,
      enemies: [
        { name: "Chicken", chance: 50 },
        { name: "Rat", chance: 40 },
        { name: "Maniac", chance: 10 },
      ],
    },

    destinationLocation: {
      id: 11,
      code: "LOC_IRONNOOK",
      name: "Ironnook",
      realm: "Thalonia",
      region: "The Quite Isle",
      description: "Starting town",
      x: 50,
      y: 19,
      enemies: [
        { name: "Chicken", chance: 50 },
        { name: "Rat", chance: 40 },
        { name: "Maniac", chance: 10 },
      ],
    },

    travelingStartedMillis: 0,
    timeNeededMillis: 0,
    timeLeft: 0,
  },
};

export const travelingSlice = createSlice({
  name: "traveling",
  initialState,
  reducers: {
    setTravelingStatus(state, action) {
      state.travelingStatus = action.payload;
      state.travelingStatus.timeLeft = calculateTimeleft(action.payload.timeNeededMillis, action.payload.travelingStartedMillis);
    },
    decrementTimeLeft(state, action) {
      state.travelingStatus.timeLeft = state.travelingStatus.timeLeft - 1;
    }
  }
});

export const { setTravelingStatus, decrementTimeLeft } = travelingSlice.actions;
export const travelingReducer = travelingSlice.reducer;
