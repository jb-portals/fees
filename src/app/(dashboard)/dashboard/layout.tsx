"use client";
import { useEffect } from "react";
import FeesLayout from "@/components/layouts/FeesLayout";
import { useAppDispatch } from "@/hooks";
import { useAppSelector } from "@/store";
import {
	fetchBranchFeeDetails,
	fetchBranchList,
	fetchFeeretrieveyears,
	fetchOverAllFee,
	fetchYearList,
} from "@/store/fees.slice";
import { useUser } from "@/utils/auth";

export default function DashboardRootLayout(props: {
	children: React.ReactNode;
}) {
	const dispatch = useAppDispatch();
	const user = useUser();
	const _acadYear = useAppSelector((state) => state.fees.acadYear);

	useEffect(() => {
		if (user?.college) {
			dispatch(fetchBranchFeeDetails({ college: user?.college! }));
			dispatch(fetchFeeretrieveyears({ college: user?.college! }));
			dispatch(fetchOverAllFee({ college: user?.college! }));
			dispatch(fetchBranchList({ college: user?.college! }));
			dispatch(fetchYearList({ college: user?.college! }));
		}
	}, [dispatch, user?.college]);

	return <FeesLayout>{props?.children}</FeesLayout>;
}
