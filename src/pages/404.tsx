import * as React from "react";
import { HeadFC } from "gatsby";
import MainNavigation from "../components/layout/MainNavigation";

const NotFoundPage = () => {
	return (
		<MainNavigation>
			<main>
				<h1>404 NOT FOUND</h1>
			</main>
		</MainNavigation>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
