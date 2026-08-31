import { Suspense } from "react";
import Loading from "./loading";
import { WithoutUSNPage } from "./page.client";

export default function Page() {
	return (
		<Suspense fallback={<Loading />}>
			<WithoutUSNPage />
		</Suspense>
	);
}
