import { Spinner, VStack } from "@chakra-ui/react";

export default function Loading() {
	return (
		<VStack alignItems={"center"} justifyContent={"center"} h={"100svh"}>
			<Spinner size={"lg"} />
		</VStack>
	);
}
