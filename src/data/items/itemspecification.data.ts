import { EquipSlot } from "../equipment/equipment.types";
import { ItemSpecification, ItemType } from "./items.types";

const allItemSpecifications: ItemSpecification[] = [
  {
    id: 1,
    name: "Oak log",
    type: ItemType.Material,
    flavorText: "Nice oak logs",
    imagePath: "oak-log.png",
  },
  {
    id: 2,
    name: "Pine log",
    type: ItemType.Material,
    flavorText: "Nice pine logs",
    imagePath: "pine-log.png",
  },
  {
    id: 3,
    name: "Oak planks",
    type: ItemType.Material,
    flavorText: "User for construction",
    imagePath: "somepath.png",
  },
  {
    id: 4,
    name: "Iron shortsword",
    type: ItemType.Weapon,
    flavorText: "Most common weapon for a warrior",
    imagePath: "iron_short_sword.png",
    equipableInfo: {
      equipSlot: EquipSlot.Mainhand,
      damage: 5,
    }
  }
]

export default allItemSpecifications;

