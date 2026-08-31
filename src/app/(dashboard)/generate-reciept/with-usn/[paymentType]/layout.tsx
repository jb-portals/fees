import { Box } from "@chakra-ui/react";
import { Suspense } from "react";
import { WithUSNPaymentTabs } from "@/components/layouts/WithUSNLayout copy";
import Loading from "./loading";

export function generateStaticParams() {
	return [
		{ paymentType: "FEE" },
		{ paymentType: "OTHERS" },
		{ paymentType: "MISCELLANEOUS" },
		{ paymentType: "SECURITY_DEPOSIT" },
		{ paymentType: "BUS_FEE" },
		{ paymentType: "HOSTEL_FEE" },
		{ paymentType: "REGISTRATION_FEE" },
		{ paymentType: "EXCESS_FEE" },
	];
}

export default function GenerateRecieptRootLayout(props: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<WithUSNPaymentTabs />
			</Suspense>
			<Box py={"4"}>{props?.children}</Box>
		</>
	);
}
