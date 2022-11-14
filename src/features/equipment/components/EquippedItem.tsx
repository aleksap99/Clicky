import {
  Box,
  Button,
  Grid,
  GridItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { unequipItem } from "../../inventory/state/inventorySlice";
import { ItemSpecification } from "../../../data/items/items.types.js";
import { useAppDispatch } from "../../../app/hooks";

const styles = {
  width: "70px",
  height: "70px",
  borderStyle: "solid",
  borderRadius: "15px",
  margin: "3px",
  backgroundColor: "#5c5470"
}

interface EquippedItemProps {
  equippedItem: ItemSpecification | null;
  emptyImagePath: string;
  alt: string;
}

const EquippedItem = ({ equippedItem, emptyImagePath, alt }: EquippedItemProps) => {
  const dispatch = useAppDispatch();
  const initialFocusRef = React.useRef(null);

  const handleUnequipClick = () => {
    if (equippedItem?.equipableInfo) {
      dispatch(unequipItem(equippedItem.equipableInfo.equipSlot));
    }
  }

  return (
    <>
      {equippedItem == null ? <img className="pixelImg" style={styles} src={`/assets/images/${emptyImagePath}.png`} alt={alt} /> :
        <Popover initialFocusRef={initialFocusRef}>
          <PopoverTrigger>
            <Box>
              <img src={`/assets/images/${equippedItem.imagePath}`} className="crispImage" alt={alt} style={styles} />
            </Box>
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
              <Text>{equippedItem.name}</Text>
              <Text>{equippedItem.type}</Text>
            </PopoverHeader>
            <PopoverBody>
              <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                <GridItem w="70px" colSpan={1}>
                  <img src={`/assets/images/${equippedItem.imagePath}`} className="crispImage" alt={alt} style={styles} />
                </GridItem>
                <GridItem colSpan={4}>
                  <Text>Desc: {equippedItem.flavorText}</Text>
                  <Button
                    onClick={handleUnequipClick}
                    color="white"
                    bg="orange.400"
                    borderRadius={10}
                    mr={1}
                  >
                    Unequip
                  </Button>
                </GridItem>
              </Grid>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      }
    </>
  )
}

export default EquippedItem;
