import { Box, Text } from "@chakra-ui/react";
import { useAppSelector } from "../../../app/hooks";

const PlayerStatsDisplay = () => {
  const { playerStats } = useAppSelector((state) => state.reducer.inventory);
  return (
    <Box>
      <Text>Health: {playerStats.currentHealth} / {playerStats.maxHealth}</Text>
      <Text>Damage: {playerStats.damage}</Text>
      <Text>Armor: {playerStats.armor}</Text>
      <Text>Strength: {playerStats.strength}</Text>
      <Text>Haste: {playerStats.haste}</Text>
      <Text>Dexterity: {playerStats.dexterity}</Text>
    </Box>
  )
}

export default PlayerStatsDisplay;
