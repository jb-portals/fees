"use client";

import { useCallback, useEffect } from "react";
import { fetchBranchList } from "@/store/fees.slice";
import { useUser } from "@/utils/auth";
import { store } from "../../../store/";

export function BranchListFetcher() {
	const user = useUser();

	const fetchBranchListCb = useCallback(() => {
		store.dispatch(fetchBranchList({ college: user?.college! }));
	}, [user?.college]);

	useEffect(() => {
		fetchBranchListCb();
	}, [fetchBranchListCb]);

	return null;
}
