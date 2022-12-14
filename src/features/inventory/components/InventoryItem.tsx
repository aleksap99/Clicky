import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { InventoryItemAmount, ItemType } from "../../../data/items/items.types"
import React from "react";
import { capFirstLetter } from "../../../util/utils";
import { equipItem } from "../state/inventorySlice";
import { useAppDispatch } from "../../../app/hooks";

interface InventoryItemProps {
  inventoryItemAmount: InventoryItemAmount
}

const InventoryItem = ({
  inventoryItemAmount
}: InventoryItemProps) => {
  const dispatch = useAppDispatch();
  const initialFocusRef = React.useRef(null);
  const handleEquipClick = () => {
    dispatch(equipItem(inventoryItemAmount.itemSpecification));
  };

  const handleConsumeClick = () => {
    console.log("consume")
  };

  const styles = {
    width: "70px",
    height: "70px",
    borderStyle: "2px solid",
    borderRadius: "15px",
    border: "2px solid black",
    margin: "3px",
    backgroundColor: "#5c5470",
  };

  return (
    <Popover initialFocusRef={initialFocusRef}>
      <PopoverTrigger>
        <img
          className="pixelImg"
          style={styles}
          src={`${process.env.REACT_APP_ASSETS_DIR}/images/${inventoryItemAmount.itemSpecification.imagePath}`}
          alt="Inventory item"
        />
      </PopoverTrigger>
      <PopoverContent
        boxShadow="dark-lg"
        borderRadius={15}
        color="gray.300"
        bg="#3c4b64"
        border="none"
      >
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader bg="#3a3b47" borderTopRadius={15}>
          <Text>{inventoryItemAmount.itemSpecification.name}</Text>
          <Text>{inventoryItemAmount.itemSpecification.type}</Text>
        </PopoverHeader>
        <PopoverBody>
          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            <GridItem w="70px" colSpan={1}>
              <img style={styles} className="crispImage" src={`${process.env.REACT_APP_ASSETS_DIR}/images/${inventoryItemAmount.itemSpecification.imagePath}`} alt="Inventory item" />
            </GridItem>
            <GridItem colSpan={4}>
              <Text>Desc: {inventoryItemAmount.itemSpecification.flavorText}</Text>
              <Text>Amount: {inventoryItemAmount.amount}</Text>
              {isEquippable(inventoryItemAmount.itemSpecification.type) && (
                <>
                  {inventoryItemAmount.itemSpecification.equipableInfo &&
                    Object.keys(inventoryItemAmount.itemSpecification.equipableInfo).map((key, index) => {
                      const equipableInfo = inventoryItemAmount.itemSpecification.equipableInfo;
                      type ObjectKey = keyof typeof equipableInfo;
                      const keyy = key as ObjectKey;
                      if (equipableInfo) {
                        return (
                          <div key={index}>
                            <Text>{capFirstLetter(key)}: {equipableInfo[keyy]}</Text>
                          </div>
                        );
                      }
                    })}
                  <Button
                    onClick={handleEquipClick}
                    color="white"
                    bg="orange.400"
                    borderRadius={10}
                    mr={1}
                    mt={1}
                  >
                    Equip
                  </Button>
                </>
              )}
              {isConsumable(inventoryItemAmount.itemSpecification.type) && (
                <Button
                  onClick={handleConsumeClick}
                  color="white"
                  bg="orange.400"
                  borderRadius={10}
                  mr={1}
                >
                  Consume
                </Button>
              )}
            </GridItem>
          </Grid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

function isConsumable(itemType: ItemType) {
  if (itemType === ItemType.Consumable) {
    return true;
  }
  return false;
}

function isEquippable(itemType: ItemType) {
  var equippable = false;
  if (itemType === ItemType.Weapon || itemType === ItemType.Armor) {
    equippable = true;
  }
  return equippable;
}

export default InventoryItem;
