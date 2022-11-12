export type Skill = {
	id: number;
	name: string;
  code: SkillCode;
}

export enum SkillCode {
  WOODCUTTING, WOODWORKING, COOKING
}

export type PlayerSkill = {
	currentXp: number;
	currentLevel: number;
	skill: Skill;
}

export type SkillAmount = {
	skillId: number;
	amount: number;
}
