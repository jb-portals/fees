"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export function HeroButton() {
	const router = useRouter();

	return (
		<Button
			size={"lg"}
			onClick={() => router.push("/signin")}
			variant={"surface"}
		>
			Signin to Dashboard
		</Button>
	);
}
