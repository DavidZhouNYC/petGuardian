import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import PetForm from "../PetForm/PetForm";
import * as styles from "./Introduction.module.scss";

const Introduction: FC = () => {
	return (
		<section className={styles.introductionUI}>
			<article>
				<h1>
					<b>Keep your best friends healthy</b>
					<br />
					<span>with help from us!</span>
				</h1>
				<p>
					There's a reason why 400,000 pet owners in the United States
					of America choose{" "}
					<b>petGuardian as their #1 choice of pet insurance</b>.
					Whether you&apos;re a dog or cat owner - we're dedicated to
					ensuring your pet(s) gets the love and care they deserve.
				</p>
				<PetForm />
			</article>
			<StaticImage
				className={styles.heroImage}
				src={"../../images/satisfied_customer.jpg"}
				alt={"Woman hugging dog"}
				objectFit='cover'
				layout='constrained'
				placeholder='blurred'
			/>
		</section>
	);
};

export default Introduction;
