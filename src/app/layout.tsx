import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "덕영시간표",
	description: "덕영고등학교 시간표 서비스",
	openGraph: {
		title: "덕영시간표",
		description: "덕영고등학교 시간표 서비스",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
