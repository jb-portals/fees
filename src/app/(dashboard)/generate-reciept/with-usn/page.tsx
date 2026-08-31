import { redirect } from "next/navigation";

export default async function WithoutUSNPage() {
	"use cache";
	redirect("/generate-reciept/with-usn/FEE");
}
