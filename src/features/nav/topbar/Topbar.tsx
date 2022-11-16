import { Box, HStack } from "@chakra-ui/react";
import PrimaryButton from "../../../util/components/PrimaryButton";
import TravelingStatus from "../../traveling/components/TravelingStatus";

const Topbar = ({ onSidebarOpen }: any) => {

  return (
    <Box pl={5} pt={2}>
      <HStack>
        <PrimaryButton onClick={() => onSidebarOpen()} mt={1} text="Open menu" />
        <TravelingStatus />
      </HStack>
    </Box>
  )
}

export default Topbar;
