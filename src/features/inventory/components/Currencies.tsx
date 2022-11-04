import { Box, Center, Text } from "@chakra-ui/react";
import { useAppSelector } from "../../../app/hooks";

const Currencies = () => {
	/*const { fireStatus } = useAppSelector(
		(state) => state.reducer.inventory
	);*/

	return (
		<Box m={3} borderRadius={15} bg="#3c4b64">
			<Center>
				<Text color="white" fontSize="2xl">
					Currencies
				</Text>
			</Center>
			<Box pl={3}>
				<Text color="white">Gold: </Text>
				{/*<Text color="white">Fire: {fireStatus.fireAvailable}</Text> */}
			</Box>
		</Box>

	)
}

export default Currencies;
