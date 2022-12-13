import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { GatherableInstance } from "../../data/gatherables/gatherables.types";

const Gatherable = ({ gatherableInstance, takeDamage, canGather }: { gatherableInstance: GatherableInstance, takeDamage: Function, canGather: boolean }) => {
  const [clicked, setClicked] = useState(false);
  const toast = useToast();
  const [timeClicked, setTimeClicked] = useState(0);

  const click = () => {
    if (canGather) {
      takeDamage(gatherableInstance)
      setClicked(true)
    } else {
      if ((Date.now() > (timeClicked + 5000)) || timeClicked === 0) {
        toast({
          title: "Your level is to low.",
          status: 'warning',
          duration: 5000,
          isClosable: true,
        });
        setTimeClicked(Date.now());
      }
    }
  }

  return (
    <div
      onAnimationEnd={() => setClicked(false)}
      className={clicked ? "dragon" : ""}
      onClick={click} style={{ top: gatherableInstance.top + "px", left: gatherableInstance.left + "px", position: "absolute" }}
    >
      <img style={{ width: "64px", imageRendering: "crisp-edges" }} src={`${process.env.REACT_APP_ASSETS_DIR}/images/${gatherableInstance.specification.imagePath}`} alt="Broken" />
    </div>
  )
}



export default Gatherable;
