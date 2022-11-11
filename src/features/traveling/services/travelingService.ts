import { Location } from "../../../data/locations/locations.types";

const timeMillis = 10000;

export const calculateTimeNeeded = (currentLocation: Location, selectedLocation: Location): number => {
  const distance = Math.sqrt(
    Math.pow(selectedLocation.x - currentLocation.x, 2) +
    Math.pow(selectedLocation.y - currentLocation.y, 2)
  )

  const timeNeeded = distance * timeMillis;
  return timeNeeded;
}

export const calculateTimeleft = (timeNeeded: number, timeStarted: number): number => {
  const result = timeNeeded - (Date.now() - timeStarted)
  return result;
}
