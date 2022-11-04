import { useState } from "react";

const Gatherable = ({ gatherable, takeDamage }: any) => {
	const [clicked, setClicked] = useState(false);

	const click = () => {
		takeDamage(gatherable)
		setClicked(true)
	}

	return (
		<div
			onAnimationEnd={() => setClicked(false)}
			className={clicked ? "dragon" : ""}
			onClick={click} style={{ top: gatherable.top + "px", left: gatherable.left + "px", position: "absolute" }}
		>
			<img style={{ width: "64px", imageRendering: "crisp-edges" }} src={`/assets/images/${gatherable.imagePath}`} alt="Broken"/>
		</div>
	)
}



export default Gatherable;
