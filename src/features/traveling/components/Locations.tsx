import { Button, Collapse, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, Tooltip, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ItemSpecification } from "../../../data/items/items.types";
import { allLocations } from "../../../data/locations/location.data";
import { Location } from "../../../data/locations/locations.types";
import PrimaryButton from "../../../util/components/PrimaryButton";
import { convertMillis } from "../../../util/utils";
import { inventoryHasItem } from "../../inventory/service/inventoryService";
import { findItemById } from "../../inventory/service/itemService";
import { calculateTimeNeeded } from "../services/travelingService";
import { startTraveling } from "../state/travelingSlice";

const defaultLocation: Location = {
  id: 0,
  code: "NONE",
  name: "NONE",
  description: "NONE",
  realm: "NONE",
  region: "NONE",
  enemies: [],
  x: 0,
  y: 0,
}

const Locations = () => {
  const { travelingStatus } = useAppSelector((state) => state.reducer.traveling);
  const dispatch = useAppDispatch();
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isTravelOpen, onOpen: onTravelOpen, onClose: onTravelClose } = useDisclosure();
  const [selectedLocation, setSelectedLocation] = useState<Location>(defaultLocation);
  const [selectedLocationRequiredItem, setSelectedLocationRequiredItem] = useState<ItemSpecification | undefined>(undefined);

  const handleTravelClick = () => {
    dispatch(startTraveling({
      destination: selectedLocation,
      time: calculateTimeNeeded(travelingStatus.currentLocation, selectedLocation)
    }));
  }

  const handleLocationSelect = (location: Location) => {
    if (location.requiredItemId) {
      const requiredItem = findItemById(location.requiredItemId);
      setSelectedLocationRequiredItem(requiredItem);
    }
    setSelectedLocation(location);
    onTravelOpen();
  }

  const canTravelToLocation = (): boolean => {
    // if required item exists check if use has it
    // if required item does not exist just return true
    if (selectedLocationRequiredItem) {
      console.log(inventoryHasItem({ itemId: selectedLocationRequiredItem.id, amount: 1, chance: 0 }), "res")
      return inventoryHasItem({ itemId: selectedLocationRequiredItem.id, amount: 1, chance: 0 });
    }
    return true;
  }

  return (
    <Stack spacing={4} onClick={allLocations && onToggle}>
      <Flex
        py={2}
        justify={'space-between'}
        align={'center'}
        _hover={{
          cursor: 'pointer',
        }}>
        <Text fontWeight={600}>
          Travel
        </Text>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack mt={2} pl={4} borderLeft={1} borderStyle={'solid'} align={'start'}>
          {allLocations.length > 0 &&
            allLocations.map((location) => {
              if (travelingStatus.currentLocation && travelingStatus.currentLocation.name === location.name) {
                return (
                  <Text key={location.name} cursor="pointer">
                    <Text as="span" color="#037ffc">{location.name}</Text> (You are here)
                  </Text >
                )
              } else {
                return (
                  <Text key={location.name} onClick={() => { handleLocationSelect(location) }} cursor="pointer">
                    {location.name}
                  </Text >
                )
              }
            }
            )
          }
        </Stack>
      </Collapse>

      <Modal isOpen={isTravelOpen} onClose={onTravelClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderTopRadius={15} color="gray.300" bg={"#3a3b47"}>
            You will travel to: {selectedLocation.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody color="gray.300" bg={"#3c4b64"}>
            <Text>Destination: {selectedLocation.name}</Text>
            <Text>Time to reach destination: {convertMillis(Math.abs(calculateTimeNeeded(travelingStatus.currentLocation, selectedLocation)))}</Text>
            {
              selectedLocationRequiredItem
              &&
              <Flex>
                <Text>Required item: {selectedLocationRequiredItem.name}</Text>
                <Image m="0px" src={`/assets/images/${selectedLocationRequiredItem.imagePath}`} />
              </Flex>
            }
          </ModalBody>
          <ModalFooter borderBottomRadius={15} bg="#3a3b47">
            {!canTravelToLocation() ?
              <Tooltip label="You dont have the required item">
                <div>
                  <PrimaryButton text="Start traveling" onClick={handleTravelClick} disabled={true} />
                </div>
              </Tooltip>
              :
              <PrimaryButton text="Start traveling" onClick={handleTravelClick} disabled={false} />
            }
            <Button color="white" bg="orange.400" ml={2} onClick={onTravelClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  )
}



// without the slice method an error occurs, so leave the slice here
// TODO: use this method when more locations with different regions
// are added
//const sortLocationsByRegion = (locations) =>
//	locations.slice().sort((a, b) => (a.region > b.region) ? 1 : -1)


export default Locations;
