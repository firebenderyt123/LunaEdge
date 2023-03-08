import React, { useState } from "react";

import defaultImage from "@images/defaultImage.webp";

interface ImageProps {
	src: string;
	alt?: string;
	defaultImg?: string;
	[key: string]: any;
}

const Image = ({ src, alt, defaultImg, ...props }: ImageProps) => {
	const [loaded, setLoaded] = useState(false);
	const [imageSrc, setImageSrc] = useState(src);

	const handleLoad = () => {
		setLoaded(true);
	};

	const handleError = () => {
		setImageSrc(defaultImg || defaultImage.src);
	};

	return (
		<img
			src={imageSrc}
			alt={alt}
			onLoad={handleLoad}
			onError={handleError}
			{...props}
		/>
	);
};

export default Image;
