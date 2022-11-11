import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerSkill, SkillAmount, SkillCode } from "../../../data/skills/skills.types";
import { calculateSkillLevel } from "../services/SkillsService";

type SkillsState = {
	skills: PlayerSkill[];
}

const initialState: SkillsState = {
	skills: [
		{
			currentXp: 200,
			currentLevel: 0,
			skill: {
				id: 1,
				name: "Woodcutting",
        code: SkillCode.WOODCUTTING,
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
		}
	}
});

export const { increaseSkill } = playerSkillsSlice.actions;
export const playerSkillReducer = playerSkillsSlice.reducer;

