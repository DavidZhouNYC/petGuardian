import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";

const Logo: FC = () => {
	return (
		<StaticImage
			src={"../../../images/logo.png"}
			alt={"petGuardian logo"}
			width={100}
		/>
	);
};

export default Logo;
