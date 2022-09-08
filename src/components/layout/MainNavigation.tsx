import { StaticImage } from "gatsby-plugin-image";
import React, { FC, ReactNode } from "react";
import Logo from "../ui/Logo/Logo";
import * as styles from "./MainNavigation.module.scss";

// TODO: Fix responsive background image
const MainNavigation: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className={styles.mainNavigation}>
			<div className={styles.backgroundImage}>
				<StaticImage
					src={
						"../../images/background/paw_prints_transparent_20.png"
					}
					alt={"Paw prints"}
					layout='fixed'
					placeholder='tracedSVG'
					objectFit='cover'
				/>
			</div>
			<header>
				<nav>
					<Logo />
				</nav>
			</header>
			<main>{children}</main>
			<footer>
				<p>Designed by David Zhou</p>
			</footer>
		</div>
	);
};

export default MainNavigation;
