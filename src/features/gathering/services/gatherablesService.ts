import { allGatherables } from "../../../data/gatherables/gatherables.data";
import { GatherableInstance, GatherableSpecification } from "../../../data/gatherables/gatherables.types";
import { LocationGatherable } from "../../../data/locations/locations.types";

export function findGatherableById(id: number): GatherableSpecification | undefined {
  return allGatherables.find((gatherable) => gatherable.id === id);
}

export function convertLocationGatherableData(gatherablesData: LocationGatherable[]): GatherableSpecification[] {
  let result: GatherableSpecification[] = [];
  gatherablesData.forEach((data) => {
    const found = findGatherableById(data.gatherableId);
    if (found) {
      result.push(found);
    }
  });
  return result;
}

export function convertGatherableDataToInstance(gatherablesData: LocationGatherable[]): GatherableInstance[] {
  let result: GatherableInstance[] = [];
  gatherablesData.forEach((data) => {
    const found = findGatherableById(data.gatherableId);

    if (found) {
      const gatherableInstance = new GatherableInstance(found);
      result.push(gatherableInstance);
    }
  });
  return result;
}
