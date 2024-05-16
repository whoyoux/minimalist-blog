import type { Metadata } from "next";
import { Open_Sans as FontSans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: `${siteConfig.baseTitle}`,
	description: "A minimalist blog built with Next.js and MDX by whx",
	authors: [
		{
			name: "whx",
			url: "https://whx.world",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="w-full max-w-screen-md px-4 mx-auto min-h-screen flex flex-col justify-between">
						<Header />
						<div className="mb-auto">{children}</div>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
