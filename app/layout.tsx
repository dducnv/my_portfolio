import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dducnv.dev"),
  title: {
    default: "Nguyễn Văn Đức",
    template: "%s | Nguyễn Văn Đức",
  },
  icons: [
    "https://www.dducnv.dev/favicon.ico",
    "https://www.dducnv.dev/favicon-16x16.png",
    "https://www.dducnv.dev/favicon-32x32.png",
    "https://www.dducnv.dev/favicon-96x96.png",
  ],
  description: "Nguyen Van Duc's Portfolio",
  keywords: [
    "Nguyễn Văn Đức",
    "Mobile App Developer",
    "Flutter",
    "Dart",
    "Android",
    "iOS",
    "Mobile App",
    "Developer",
    "Portfolio",
    "Blog",
    "Tutorials",
    "Nguyen Van Duc's Blog",
    "Nguyen Van Duc's Portfolio",
  ],
  openGraph: {
    title: "Nguyễn Văn Đức",
    description: "Nguyen Van Duc's Portfolio",
    url: "https://www.dducnv.dev/",
    siteName: "dducnv",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://www.dducnv.dev/avatar.jpg",
        alt: "Nguyễn Văn Đức",
      },
    ],
  },
  authors: [
    {
      name: "Nguyễn Văn Đức",
      url: "https://www.dducnv.dev",
    },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Nguyễn Văn Đức",
    card: "summary_large_image",
    site: "@nvduc_0712",
    creator: "@nvduc_0712",
    description: "Nguyen Van Duc's Portfolio",
    images: [
      {
        url: "https://www.dducnv.dev/avatar.jpg",
        alt: "Nguyễn Văn Đức",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
