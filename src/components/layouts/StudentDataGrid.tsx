"use client";

import { Center, Heading, VStack } from "@chakra-ui/react";
import { useAppSelector } from "@/store";
import { DataTable } from "../data-table";
import { StudentColumnDefs } from "../mock-data/students-meta";

function StudentDataGrid() {
	const FeeDetails = useAppSelector((state) => state.fees.all_fee.data) as any;
	const Error = useAppSelector((state) => state.fees.all_fee.error) as
		| null
		| string;

	return (
		<VStack h={"full"} w={"full"}>
			{FeeDetails.length > 0 ? (
				<DataTable data={FeeDetails} columns={StudentColumnDefs} />
			) : FeeDetails.length === 0 && Error ? (
				<Center h={"80%"}>
					<Heading size={"lg"}>{Error}</Heading>
				</Center>
			) : null}
		</VStack>
	);
}

export default StudentDataGrid;
