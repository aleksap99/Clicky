import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location } from "../../../data/locations/locations.types";
import { TravelingStatus } from "../../../data/traveling/traveling.types";

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
      enemyInfo: {
        amount: 20,
        enemyData: [
          { enemyId: 1, chance: 100 },
        ],
      },
      gatherablesInfo: {
        amount: 20,
        gatherablesData: [
          { gatherableId: 1, chance: 100 },
          { gatherableId: 2, chance: 100 },
          { gatherableId: 4, chance: 10 },
        ],
      }
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
      enemyInfo: {
        amount: 20,
        enemyData: [
          { enemyId: 1, chance: 100 },
        ],
      },
      gatherablesInfo: {
        amount: 20,
        gatherablesData: [
          { gatherableId: 1, chance: 100 },
          { gatherableId: 2, chance: 100 },
          { gatherableId: 4, chance: 10 },
        ],
      }
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
    startTraveling(state: TravelingState, action: PayloadAction<{ destination: Location, time: number }>) {
      state.travelingStatus.travelingStartedMillis = Date.now();
      state.travelingStatus.timeNeededMillis = action.payload.time;
      state.travelingStatus.timeLeft = action.payload.time;
      state.travelingStatus.destinationLocation = action.payload.destination;
      state.travelingStatus.traveling = true;
    },
    finishTraveling(state: TravelingState) {
      state.travelingStatus.timeLeft = 0;
      state.travelingStatus.currentLocation = state.travelingStatus.destinationLocation;
      state.travelingStatus.traveling = false;
    },
    decrementTimeLeft(state: TravelingState) {
      state.travelingStatus.timeLeft = state.travelingStatus.timeLeft - 1;
    },
  }
});

export const { startTraveling, finishTraveling, decrementTimeLeft } = travelingSlice.actions;
export const travelingReducer = travelingSlice.reducer;
