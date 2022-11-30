import { Box } from "@chakra-ui/react";
import Gatherables from "./Gatherables";

const GatheringPage = ({ skill }: { skill: string }) => {
  return (
    <Box m={4} bg="#3c4b64" borderRadius={15} height="85vh">
      <Gatherables skill={skill} />
    </Box>
  )
}

export default GatheringPage;
