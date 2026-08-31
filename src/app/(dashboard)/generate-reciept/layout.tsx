import GenerateRecieptLayout from "@/components/layouts/GenerateRecieptLayout";
import { BranchListFetcher } from "./layout.client";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<BranchListFetcher />
			<GenerateRecieptLayout>{children}</GenerateRecieptLayout>
		</>
	);
}
