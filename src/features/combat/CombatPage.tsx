import { Box, SimpleGrid } from "@chakra-ui/react";
import PlayerStatsDisplay from "../playerStats/PlayerStatsDisplay";
import Enemies from "./Enemies";

const CombatPage = () => {
  return (
    <SimpleGrid p={4} minChildWidth="300px" gap={2}>
      <Box borderRadius={15} h="85vh" bg="#3c4b64">
        <Enemies />
      </Box>

      <Box borderRadius={15} bg="#3c4b64">
        <PlayerStatsDisplay />
      </Box>
    </SimpleGrid>
  )
}
export default CombatPage;
