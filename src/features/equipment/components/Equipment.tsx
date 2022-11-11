import EquippedItem from "./EquippedItem";
import { HStack, VStack } from '@chakra-ui/react';
import { useAppSelector } from '../../../app/hooks';

const Equipment = () => {
  const { equipped } = useAppSelector((state) => state.reducer.inventory);

  return (
    <VStack>
      <HStack>
        <EquippedItem equippedItem={equipped.neck} emptyImagePath={"empty_neck_slot"} alt={"neck item"} />
        <EquippedItem equippedItem={equipped.head} emptyImagePath={"empty_head_slot"} alt={"head item"} />
        <EquippedItem equippedItem={equipped.trinket} emptyImagePath={"empty_trinket_slot"} alt={"trinket item"} />
      </HStack>
      <HStack>
        <EquippedItem equippedItem={equipped.gloves} emptyImagePath={"empty_gloves_slot"} alt={"gloves item"} />
        <EquippedItem equippedItem={equipped.chest} emptyImagePath={"empty_chest_slot"} alt={"chest item"} />
        <EquippedItem equippedItem={equipped.ring} emptyImagePath={"empty_ring_slot"} alt={"ring item"} />
      </HStack>
      <HStack>
        <EquippedItem equippedItem={equipped.mainhand} emptyImagePath={"empty_mainhand_slot"} alt={"mainhand item"} />
        <EquippedItem equippedItem={equipped.feet} emptyImagePath={"empty_feet_slot"} alt={"feet item"} />
        <EquippedItem equippedItem={equipped.offhand} emptyImagePath={"empty_offhand_slot"} alt={"offhand item"} />
      </HStack>
    </VStack>
  )
}

export default Equipment; 
