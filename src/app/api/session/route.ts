import { getIronSession } from "iron-session";
import { type NextRequest, NextResponse } from "next/server";
import { type SessionData, sessionOptions } from "@/utils/session";

export async function GET(request: Request) {
	const response = new Response();
	const session = await getIronSession<SessionData>(
		request,
		response,
		sessionOptions,
	);

	if (!session.id) {
		return NextResponse.json({ isLoggedIn: false }, { status: 401 });
	}

	return NextResponse.json(session);
}

export async function POST(request: NextRequest) {
	const response = new Response();
	const session = await getIronSession<SessionData>(
		request,
		response,
		sessionOptions,
	);
	const input = await request.json();

	session.id = input.id;

	await session.save();

	return response;
}

export async function DELETE(request: Request) {
	const response = new Response();
	const session = await getIronSession<SessionData>(
		request,
		response,
		sessionOptions,
	);
	session.destroy();
	return response;
}
