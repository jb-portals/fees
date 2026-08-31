"use client";

import { HStack, Tabs } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function GenerateRecieptTabs() {
	const pathname = usePathname();

	return (
		<Tabs.Root
			lazyMount
			value={pathname.split("/").at(2)}
			variant={"subtle"}
			h={"full"}
			w={"full"}
		>
			<Tabs.List zIndex={"sticky"} position={"sticky"} backdropBlur={"sm"}>
				<HStack justifyContent={"space-between"} w={"full"}>
					<HStack>
						<Tabs.Trigger
							value="without-usn"
							asChild
							_hover={{ textDecoration: "none" }}
						>
							<Link href={"/generate-reciept/without-usn/FEE"}>
								Without USN
							</Link>
						</Tabs.Trigger>
						<Tabs.Trigger
							value="with-usn"
							asChild
							_hover={{ textDecoration: "none" }}
						>
							<Link href={"/generate-reciept/with-usn/FEE"}>With USN</Link>
						</Tabs.Trigger>
					</HStack>
				</HStack>
			</Tabs.List>
		</Tabs.Root>
	);
}
