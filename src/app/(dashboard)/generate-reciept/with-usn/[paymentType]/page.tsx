import { Suspense } from "react";
import Loading from "./loading";
import { WithUSNPage } from "./page.client";

export default function Page() {
	return (
		<Suspense fallback={<Loading />}>
			<WithUSNPage />
		</Suspense>
	);
}
