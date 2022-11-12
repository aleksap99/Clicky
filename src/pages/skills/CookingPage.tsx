import { SkillCode } from "../../data/skills/skills.types";
import CraftingPane from "../../features/crafting/components/CraftingPane";

const CookingPage = () => {
  return (
    <CraftingPane title="Cook" skillCode={SkillCode.COOKING} />
  )
}

export default CookingPage;
