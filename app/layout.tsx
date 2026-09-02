import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CTBER - Diễn đàn Chuyên Thái Bình",
  description: "Giao diện tái tạo từ ảnh tham chiếu diễn đàn CTBER.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
