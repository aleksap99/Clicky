import { useState } from "react";

const DynamicImage = ({ path, alt, style }: any) => {
	const [imageSrc, setImageSrc] = useState("");

	import(`../../assets/${path}`).then((module) => {
		setImageSrc(module.default);
	});

	return (
		<img src={imageSrc}
			alt={alt}
			className="pixelImg"
			style={style}
		/>
	)
}

export default DynamicImage;
