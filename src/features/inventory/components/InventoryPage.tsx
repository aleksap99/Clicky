import { SimpleGrid } from "@chakra-ui/react";
//import SkillLevels from "../../skills/components/SkillLevels";
//import Currencies from "./Currencies";
import Inventory from "./Inventory";

const InventoryPage = () => {

	return (
		<>
			<Inventory />
			<SimpleGrid minChildWidth="300px">
				{				/*<SkillLevels />
				<Currencies /> */ }
			</SimpleGrid>
		</>
	);
}

export default InventoryPage;
