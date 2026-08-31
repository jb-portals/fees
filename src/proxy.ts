import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default async function proxy(_req: NextRequest) {
	const res = NextResponse.next();

	return res;
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
