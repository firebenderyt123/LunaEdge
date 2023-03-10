import React from "react";

import spinner from "@images/spinner.svg";

const Loader: React.FC = () => {
	return (
		<div className="w-100 d-flex justify-content-center align-items-center">
			<img src={spinner.src} height="200" width="200" />
		</div>
	);
};

export default Loader;
