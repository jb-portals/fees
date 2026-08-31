"use client";
import { fetchBranchList, fetchYearList } from "@/store/fees.slice";
import "../../globals.css";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks";
import { useAppSelector } from "@/store";
import { useUser } from "@/utils/auth";

export default function DashboardRootLayout(props: {
	children: React.ReactNode;
}) {
	const dispatch = useAppDispatch();
	const user = useUser();
	const _acadYear = useAppSelector((state) => state.fees.acadYear);

	useEffect(() => {
		if (user?.college) {
			dispatch(fetchBranchList({ college: user?.college! }));
			dispatch(fetchYearList({ college: user?.college! }));
		}
	}, [dispatch, user?.college]);

	return <>{props?.children}</>;
}
