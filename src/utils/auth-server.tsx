"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { type SessionData, sessionOptions } from "./session";
import { api } from "./trpc-server";

export async function auth() {
	const session = await getIronSession<SessionData>(
		await cookies(),
		sessionOptions,
	);

	if (!session.id) return { isLoggedIn: false, user: null };
	const user = await api.getUser(session.id ?? "");
	return {
		isLoggedIn: !!user.id,
		user,
	};
}
