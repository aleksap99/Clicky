import { Box, HStack } from "@chakra-ui/react";
//import CombatStatus from "../../../combat/components/CombatStatus";
//import TravelingStatus from "../../../locations/traveling/components/TravelingStatus";
//import TaskStatus from "../../../tasks/components/TaskStatus";
import PrimaryButton from "../../../util/components/PrimaryButton";

const Topbar = ({ onSidebarOpen }: any) => {

	return (
		<Box pl={5} pt={2}>
			<HStack>
				<PrimaryButton onClick={() => onSidebarOpen()} mt={1} text="Open menu" />
				{ /* <TaskStatus />
				<CombatStatus />
				<TravelingStatus /> */}
			</HStack>
		</Box>
	)
}

export default Topbar;
