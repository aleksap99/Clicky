import { PlayerSkill } from "../../../data/skills/skills.types";
import { createStandaloneToast } from "@chakra-ui/react";

const x: number = 0.07;
const y: number = 2;

const { toast } = createStandaloneToast()

export function calculateSkillLevel(playerSkill: PlayerSkill, xpGain: number) {
  playerSkill.currentXp += xpGain;
  const nextLevel = calculateNextLevel(playerSkill.currentLevel, playerSkill.currentXp);
  if (nextLevel > 0) {
    playerSkill.currentLevel += 1;
    toast({
      title: `You leveled up ${playerSkill.skill.name} to level ${nextLevel}.`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

  }
}

function calculateNextLevel(currentLevel: number, currentXp: number): number {
  const nextLevel = currentLevel + 1;
  const xpNeeded = Math.floor(Math.pow((nextLevel / x), y));
  if (currentXp >= xpNeeded) {
    return nextLevel;
  }
  return 0;
}
