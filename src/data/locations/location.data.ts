import { Location } from "./locations.types";

export const allLocations: Location[] = [
  {
    id: 1,
    code: "LOC_EASTERN_LOGGING_CAMP",
    name: "Eastern logging camp",
    realm: "Thalonia",
    region: "The Quite Isle",
    description: "Some text here",
    x: 16,
    y: 32,
  },
  {
    id: 2,
    code: "LOC_UNNAMED_FORT",
    name: "Unnamed fort",
    realm: "Thalonia",
    region: "The Quite Isle",
    description: "Usually bandits and thieves occupy this unnamed fort",
    x: 32,
    y: 75,
  },
  {
    id: 3,
    code: "LOC_BREONNA'S_PASS",
    name: "Breonna's pass",
    realm: "Thalonia",
    region: "The Quite Isle",
    description: "Add text from lore book here",
    x: -8,
    y: 39,
  },
  {
    id: 4,
    code: "LOC_BREONNA'S_CAMP",
    name: "Breonna's camp",
    realm: "Thalonia",
    region: "The Quite Isle",
    description: "Add text from lore book here",
    x: 8,
    y: 40,
  },
  {
    id: 5,
    code: "LOC_FORT_WOODWATCH",
    name: "Fort woodwatch",
    realm: "Thalonia",
    region: "The Quite Isle",
    description: "This fort used to be a camp prottecting queens woods and with time it expanded to a proper fort",
    x: 42,
    y: 1,
  },
  {
    id: 6,
    code: "LOC_WIZARD_TOWER",
    name: "Wizard tower",
    realm: "Thalonia",
    region: "The Quite Isle",
    description: "Lots of books here",
    x: 44,
    y: -26,
  },
  {
    id: 7,
    code: "LOC_SANDY_CROSSING",
    name: "Sandy crossing",
    realm: "Thalonia",
    region: "The Quite Isle",
    description: "Some text here",
    x: -22,
    y: -39,
    gatherablesInfo: {
      amount: 10,
      gatherablesData: [
        { gatherableId: 3, chance: 100 }
      ],
    }
  },
  {
    id: 8,
    code: "LOC_EASTERN_RUINS",
    name: "Eastern ruins",
    realm: "Thalonia",
    region: "The Quite Isle",
    description: "Used to be large city... destroyed during the war.",
    x: 27,
    y: 24,
  },
  {
    id: 9,
    code: "LOC_FORT_OAKENSTONE",
    name: "Fort oakenstone",
    realm: "Thalonia",
    region: "The Quite Isle",
    description: "Some text here",
    x: 32,
    y: -28,
  },
  {
    id: 10,
    code: "LOC_SMUGGLER'S_BAY",
    name: "Smuggler's bay",
    realm: "Thalonia",
    region: "The Quite Isle",
    description: "This bay is used to smuggle goods to the Quite isle",
    x: 34,
    y: -61,
  },
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
    gatherablesInfo: {
      amount: 20,
      gatherablesData: [
        { gatherableId: 1, chance: 100 },
        { gatherableId: 2, chance: 100 },
        { gatherableId: 4, chance: 10 },
      ],
    }
  },
  {
    id: 12,
    code: "LOC_RAIDSTONE",
    name: "Raidstone",
    realm: "Thalonia",
    region: "The Quite Isle",
    description: "Add text from lore book here",
    x: 9,
    y: 5,
  },
  {
    id: 13,
    code: "LOC_COAL_MINING_CAMP",
    name: "Coal mining camp",
    realm: "Thalonia",
    region: "The Quite Isle",
    description: "Some text here",
    x: 44,
    y: -16,
  },
  {
    id: 14,
    code: "LOC_EASTERN_CAVE",
    name: "Eastern cave",
    realm: "Thalonia",
    region: "The Quite Isle",
    description: "Some text here",
    x: 13,
    y: 38,
  },
  {
    id: 15,
    code: "LOC_TRUEWATER_LAKE",
    name: "Truewater lake",
    realm: "Thalonia",
    region: "The Quite Isle",
    description: "Some text here",
    x: 5,
    y: 5,
  },
  {
    id: 16,
    code: "LOC_DAUD'S_MINE",
    name: "Daud's mine",
    realm: "Thalonia",
    region: "The Quite Isle",
    description: "Some text here",
    requiredItemId: 5,
    x: 84,
    y: -16,
  },
]
