"use client";

import { useCallback, useEffect } from "react";
import GenerateRecieptLayout from "@/components/layouts/GenerateRecieptLayout";
import { fetchBranchList } from "@/store/fees.slice";
import { useUser } from "@/utils/auth";
import { store } from "../../../store/";

export default function GenerateRecieptRootLayout(props: {
	children: React.ReactNode;
}) {
	const user = useUser();

	const fetchBranchListCb = useCallback(() => {
		store.dispatch(fetchBranchList({ college: user?.college! }));
	}, [user?.college]);

	useEffect(() => {
		fetchBranchListCb();
	}, [fetchBranchListCb]);

	return <GenerateRecieptLayout>{props?.children}</GenerateRecieptLayout>;
}
