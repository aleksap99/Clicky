import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location } from "../../../data/locations/locations.types";
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
      enemyIds: [
        1
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
      enemyIds: [
        1
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
    startTraveling(state, action: PayloadAction<{ destination: Location, time: number }>) {
      state.travelingStatus.travelingStartedMillis = Date.now();
      state.travelingStatus.timeNeededMillis = action.payload.time;
      state.travelingStatus.timeLeft = action.payload.time;
      state.travelingStatus.destinationLocation = action.payload.destination;
      state.travelingStatus.traveling = true;
    },
    finishTraveling(state) {
      state.travelingStatus.timeLeft = 0;
      state.travelingStatus.currentLocation = state.travelingStatus.destinationLocation;
      state.travelingStatus.traveling = false;
    },
    setTravelingStatus(state, action) {
      state.travelingStatus = action.payload;
      state.travelingStatus.timeLeft = calculateTimeleft(action.payload.timeNeededMillis, action.payload.travelingStartedMillis);
    },
    decrementTimeLeft(state, action) {
      state.travelingStatus.timeLeft = state.travelingStatus.timeLeft - 1;
    },
  }
});

export const { startTraveling, finishTraveling, setTravelingStatus, decrementTimeLeft } = travelingSlice.actions;
export const travelingReducer = travelingSlice.reducer;
