"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";
import { store } from "@/store";
import TRPCProvider from "@/utils/trpc-provider";

export function Providers({ children }: { children: React.ReactNode }) {
	const queryClient = new QueryClient();
	return (
		<TRPCProvider>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<ChakraProvider>
						{children}
						<Toaster />
					</ChakraProvider>
				</Provider>
			</QueryClientProvider>
		</TRPCProvider>
	);
}
