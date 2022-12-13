import { useState } from "react";

const Enemy = ({ enemy, enemyClicked }: any) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const click = () => {
    enemyClicked(enemy)
    setClicked(true)
  }

  return (
    <div
      onAnimationEnd={() => setClicked(false)}
      className={clicked ? "dragon" : ""}
      onClick={click} style={{ top: enemy.top + "px", left: enemy.left + "px", position: "absolute" }}
    >
      <img style={{ width: "64px", imageRendering: "crisp-edges" }} src={`${process.env.REACT_APP_ASSETS_DIR}/images/${enemy.specification.imagePath}`} alt="Broken" />
    </div>
  );

}

export default Enemy;
