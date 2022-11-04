import InventoryItem from "./InventoryItem";
import { useState } from "react";
import {
	Box,
	Button,
	Center,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	SimpleGrid,
	Text,
	useDisclosure,
	Wrap,
} from "@chakra-ui/react";

import { useAppSelector } from "../../../app/hooks";

const Inventory = () => {
	//const dispatch = useAppDispatch();
	const { inventory } = useAppSelector(
		(state) => state.reducer.inventory
	);


	//useEffect(() => {
	//dispatch(getInventory());
	//dispatch(getFireStatus());
	//}, [dispatch]);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [itemToSell, setItemToSell] = useState({ item: { name: "loading" } });

	const handleOk = () => {
		console.log("sell item");
	};

	return (
		<Box m={3}>
			<SimpleGrid minChildWidth="300px" spacing="20px">
				<Box borderRadius={15} bg="#3c4b64">
					<Center>
						<Text fontSize="2xl" color="white">
							Inventory
						</Text>
					</Center>
					<Wrap p={2}>
						{inventory.map((item) => (
							<InventoryItem
								key={item.itemSpecification.id}
								inventoryItem={item}
							/>
						))}
					</Wrap>
				</Box>
			</SimpleGrid>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader borderTopRadius={15} color="gray.300" bg={"#3a3b47"}>
						Putting up for auction {itemToSell.item.name}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody color="gray.300" bg={"#3c4b64"}>
						<Text>Amount:</Text>
						<NumberInput
							defaultValue={1}
							min={1}
							max={1000}
						>
							<NumberInputField />
							<NumberInputStepper>
								<NumberIncrementStepper />
								<NumberDecrementStepper />
							</NumberInputStepper>
						</NumberInput>
						<Text>Price per unit:</Text>
						<NumberInput
							defaultValue={1}
							min={1}
							max={1000}
						>
							<NumberInputField />
							<NumberInputStepper>
								<NumberIncrementStepper />
								<NumberDecrementStepper />
							</NumberInputStepper>
						</NumberInput>
					</ModalBody>
					<ModalFooter borderBottomRadius={15} bg="#3a3b47">
						<Button color="white" bg="orange.400" onClick={onClose}>
							Cancel
						</Button>
						<Button
							disabled
							color="white"
							bg="orange.400"
							ml={1}
							onClick={handleOk}
						>
							Sell
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default Inventory;
