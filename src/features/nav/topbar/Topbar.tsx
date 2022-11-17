import { Box, HStack } from "@chakra-ui/react";
import { useAppDispatch } from "../../../app/hooks";
import PrimaryButton from "../../../util/components/PrimaryButton";
import TravelingStatus from "../../traveling/components/TravelingStatus";
import { finishTraveling } from "../../traveling/state/travelingSlice";

const Topbar = ({ onSidebarOpen }: any) => {
  const dispatch = useAppDispatch();

  return (
    <Box pl={5} pt={2}>
      <HStack>
        <PrimaryButton onClick={() => onSidebarOpen()} mt={1} text="Open menu" />
        {process.env.REACT_APP_DEBUG === "true" && <PrimaryButton onClick={() => dispatch(finishTraveling())} mt={1} text="Instant travel" />}
        <TravelingStatus />
      </HStack>
    </Box>
  )
}

export default Topbar;
