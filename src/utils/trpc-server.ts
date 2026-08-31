import { headers } from "next/headers";
import { cache } from "react";
import { createCaller } from "@/server";

const createContext = cache(async () => {
	const headersList = headers();
	const heads = new Headers(headersList);
	heads.set("x-trpc-source", "rsc");
});
export const api = createCaller(createContext);
