import { Box, Heading, HStack, Separator } from "@chakra-ui/react";
import { Suspense } from "react";
import { GenerateRecieptTabs } from "./GenerateRecieptTabs";

interface GenerateRecieptLayoutProps {
	children: React.ReactNode;
}

export default function GenerateRecieptLayout({
	children,
}: GenerateRecieptLayoutProps) {
	return (
		<>
			<HStack>
				<Heading size={"2xl"}>New Reciept</Heading>
			</HStack>
			<Suspense fallback={null}>
				<GenerateRecieptTabs />
			</Suspense>
			<Separator mt={"4"} />
			<Box px={"10"} py={"4"}>
				{children}
			</Box>
		</>
	);
}
