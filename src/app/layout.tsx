import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const inter = Inter({ subsets: ["greek"] });

export const metadata = {
	title: "Nexus | Fee Master",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html suppressHydrationWarning>
			<body className={`${inter.className} overflow-hidden h-screen w-[100vw]`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
