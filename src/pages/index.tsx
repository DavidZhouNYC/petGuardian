import * as React from "react";
import type { HeadFC } from "gatsby";
import MainNavigation from "../components/layout/MainNavigation";
import Introduction from "../components/Introduction/Introduction";

const IndexPage = () => {
	return (
		<MainNavigation>
			<Introduction />
		</MainNavigation>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
