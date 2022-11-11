import { Location } from "../locations/locations.types";

export type TravelingStatus = {
  traveling: boolean;
  currentLocation: Location;
  destinationLocation: Location;
  travelingStartedMillis: number;
  timeNeededMillis: number;
  timeLeft: number;
}
