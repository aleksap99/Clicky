export type Skill = {
	id: number;
	name: string;
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
