import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerSkill, SkillAmount, SkillCode } from "../../../data/skills/skills.types";
import { calculateSkillLevel } from "../services/SkillsService";

type SkillsState = {
  skills: PlayerSkill[];
}

const initialState: SkillsState = {
  skills: [
    {
      currentXp: 203,
      currentLevel: 0,
      skill: {
        id: 1,
        name: "Woodcutting",
        code: SkillCode.WOODCUTTING,
      },
    },
    {
      currentXp: 200,
      currentLevel: 0,
      skill: {
        id: 2,
        name: "Sword",
        code: SkillCode.SWORD,
      },
    },
    {
      currentXp: 0,
      currentLevel: 0,
      skill: {
        id: 3,
        name: "Unarmed",
        code: SkillCode.UNARMED,
      },
    },
  ]
}

export const playerSkillsSlice = createSlice({
  name: "playerSkillsSlice",
  initialState,
  reducers: {
    increaseSkill(state, action: PayloadAction<SkillAmount>) {
      const skillAmount = action.payload;
      const skillToIncrease = state.skills.find((stateSkill) => stateSkill.skill.id === skillAmount.skillId);
      if (skillToIncrease) {
        calculateSkillLevel(skillToIncrease, skillAmount.amount);
      }
    },
    increaseCombatSkill(state, action: PayloadAction<{ skillName: string, amount: number }>) {
      const skillAmount = action.payload;
      const skillToIncrease = state.skills.find((stateSkill) => stateSkill.skill.name === skillAmount.skillName);
      if (skillToIncrease) {
        calculateSkillLevel(skillToIncrease, skillAmount.amount);
      }
    }
  }
});

export const { increaseSkill, increaseCombatSkill } = playerSkillsSlice.actions;
export const playerSkillReducer = playerSkillsSlice.reducer;

