import { Box, Center, Divider, Flex, Image, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { allCraftingTasks } from "../../../data/crafting/crafting-tasks.data";
import { CraftingTask } from "../../../data/crafting/crafting.types";
import { ItemAmount } from "../../../data/items/items.types";
import { SkillCode } from "../../../data/skills/skills.types";
import PrimaryButton from "../../../util/components/PrimaryButton";
import { convertMillis } from "../../../util/utils";
import { inventoryHasItems } from "../../inventory/service/inventoryService";
import { findItemById } from "../../inventory/service/itemService";
import { addItemAmountToInventory, removeItemFromInventory } from "../../inventory/state/inventorySlice";
import { findTaskById, getTasksBySkillCode } from "../services/CraftingService";

interface CraftingPaneProps {
  title: string;
  skillCode: SkillCode;
  taskType?: string;
  children?: any;
}

const CraftingPane = ({
  title,
  skillCode,
  taskType,
  children,
}: CraftingPaneProps) => {
  const dispatch = useAppDispatch();
  const { travelingStatus } = useAppSelector((state) => state.reducer.traveling);
  const toast = useToast();
  const [selectedTask, setSelectedTask] = useState<CraftingTask | null>(null);
  const [amountToCraft, setAmountToCraft] = useState(1);
  const [displayedTasks, setDisplayedTasks] = useState<CraftingTask[]>([]);

  useEffect(() => {
    const tasksToDisplay = getTasksBySkillCode(
      allCraftingTasks,
      skillCode,
      travelingStatus.currentLocation.name
    )
    setDisplayedTasks(tasksToDisplay);
  }, [skillCode, travelingStatus.currentLocation, taskType])


  function onChange(value: any) {
    var task = findTaskById(displayedTasks, value.target.selectedOptions[0].value);
    setSelectedTask(task);
  }

  function onChangeNumber(value: any) {
    setAmountToCraft(value);
  }

  function handleTaskSubscription() {
    if (selectedTask === null) {
      toast({
        title: "You must select a task.",
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });

    } else {
      const required = selectedTask.consumes.map((consume) => {
        return {
          itemId: consume.itemId,
          amount: consume.amount * amountToCraft,
          chance: consume.chance,
        }
      })
      if (inventoryHasItems(required)) {
        const produces = selectedTask.produces.map((produce) => {
          return {
            itemId: produce.itemId,
            amount: produce.amount * amountToCraft,
            chance: produce.chance,
          }
        })
        dispatch(removeItemFromInventory(required));
        dispatch(addItemAmountToInventory(produces));
        toast({
          title: "You successfully crafted requested items.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });

      } else {
        toast({
          title: "You dont have enough items.",
          status: 'warning',
          duration: 5000,
          isClosable: true,
        });

      }
    }
  }

  return (
    <>
      {!travelingStatus.traveling ? (
        <Box
          m={3}
          minW={300}
          maxW={500}
          h="100%"
          bg="#3c4b64"
          borderRadius={15}
        >
          <Center color="gray.300" mt={1}>{title ? title : "Craft items"}</Center>

          <Box p={3}>
            <Select p={3} onChange={onChange} placeholder="Select option">
              {displayedTasks.map((task: CraftingTask) => (
                <option value={task.id} key={task.id}>
                  {task.name}
                </option>
              ))}
            </Select>
            <Box mt={70}>
              <SimpleGrid columns={2}>
                <Center borderRight="1px">
                  {selectedTask !== null && (
                    <Image
                      w="100px"
                      src={`/assets/images/${findItemById(selectedTask.produces[0].itemId)?.imagePath}`}
                      className="crispImage"
                    />
                  )}
                </Center>
                <Box ml={3}>
                  <Center>
                    <Text color="white">Produces</Text>
                  </Center>
                  <Divider />
                  {selectedTask !== null && selectedTask.produces.map((itemAmount: ItemAmount, index) => {
                    const item = findItemById(itemAmount.itemId);
                    return (
                      <Box key={index}>
                        {item && (
                          <Text fontWeight={900} color="white">
                            Name : {item.name}
                          </Text>
                        )}
                        <Text fontWeight={900} color="white">
                          Amount: {itemAmount.amount}
                        </Text>

                        {item && item.equipableInfo?.damage && (
                          <Text fontWeight={900} color="white">
                            Damage: {item.equipableInfo.damage}
                          </Text>
                        )}
                        {item && item.equipableInfo?.armor && (
                          <Text fontWeight={900} color="white">
                            Armor: {item.equipableInfo.armor}
                          </Text>
                        )}
                        {item && item.equipableInfo?.strength && (
                          <Text fontWeight={900} color="white">
                            Strength: {item.equipableInfo?.strength}
                          </Text>
                        )}
                        {item && item.equipableInfo?.dexterity && (
                          <Text fontWeight={900} color="white">
                            Dexterity: {item.equipableInfo?.dexterity}
                          </Text>
                        )}
                        {item && item.equipableInfo?.haste && (
                          <Text fontWeight={900} color="white">
                            Dexterity: {item.equipableInfo?.haste}
                          </Text>
                        )}
                        <Text fontWeight={900} color="white">
                          Xp gain: {selectedTask.xpGain}
                        </Text>
                        <Text fontWeight={900} color="white">
                          Time to complete:{" "}
                          {convertMillis(selectedTask.timeToComplete)}
                        </Text>
                        <Text fontWeight={900} color="white">
                          Drop chance: {selectedTask.produces[0].chance}%
                        </Text>
                      </Box>
                    )
                  })}
                </Box>
              </SimpleGrid>
            </Box>
            <Center mt={70}>
              <Flex>
                <NumberInput
                  mr={3}
                  defaultValue={1}
                  min={1}
                  onChange={onChangeNumber}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <PrimaryButton
                  text="Start"
                  onClick={() => handleTaskSubscription()}
                  children={children}
                />
              </Flex>
            </Center>
          </Box>
        </Box>
      ) : (
        <Center>
          <Text color="white" fontSize="2xl">
            Can't work while traveling
          </Text>
        </Center>
      )}
    </>
  );
};

export default CraftingPane;
