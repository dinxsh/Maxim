import { hop } from "@onehop/client";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { HOP_PROJECT_ID } from "../config";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// Check that we are in the browser!
		// we cannot initialise hop if we are server rendering
		if (typeof window === "undefined") {
			return;
		}

		hop.init({
			projectId: HOP_PROJECT_ID,
		});
	}, []);

	return <Component {...pageProps} />;
}