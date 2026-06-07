import type { Metadata } from "next";
import { Fredoka, Quicksand } from "next/font/google";
import Link from "next/link";
import "../globals.css";
import Image from "next/image";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Skillbee - Học Kỹ Năng Sống Tương Tác Cho Trẻ Em",
  description:
    "Học các kỹ năng sống và an toàn cá nhân qua các câu chuyện video tương tác Chọn-Hướng-Đi (Choose Your Own Adventure) đầy bổ ích cho trẻ em từ 5-10 tuổi.",
  keywords: [
    "Skillbee",
    "kỹ năng sống",
    "video tương tác",
    "cho trẻ em",
    "giáo dục kỹ năng",
    "an toàn cá nhân",
  ],
};

export default function CustomerWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${fredoka.variable} ${quicksand.variable} font-sans min-h-screen flex flex-col bg-[#F5EFE0] text-[#3E2723] antialiased selection:bg-[#A0622A]/10`}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F5EFE0]/90 backdrop-blur-md border-b border-[#C5B69E]/50 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/home" className="flex items-center gap-2 group">
            <span className="text-3xl font-extrabold font-header tracking-tight text-[#A0622A] group-hover:scale-105 transition-transform duration-200">
              Skillbee
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link
              href="/home"
              className="hover:text-[#A0622A] transition-colors py-2"
            >
              Trang chủ
            </Link>
            <Link
              href="/home/privacy-policy"
              className="hover:text-[#A0622A] transition-colors py-2"
            >
              Chính sách bảo mật
            </Link>
            <Link
              href="/home/terms-of-service"
              className="hover:text-[#A0622A] transition-colors py-2"
            >
              Điều khoản dịch vụ
            </Link>
            <Link
              href="/home/wishlist"
              className="inline-flex items-center justify-center bg-[#A0622A] text-[#FDF5EB] px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-[#8A5120] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Đăng ký ngay
            </Link>
          </nav>

          {/* Mobile CTA */}
          <Link
            href="/home/wishlist"
            className="md:hidden inline-flex items-center justify-center bg-[#A0622A] text-[#FDF5EB] px-4 py-2 rounded-full font-bold text-sm shadow-md hover:bg-[#8A5120] transition-colors"
          >
            Đăng ký
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">{children}</main>

      {/* Footer */}
      <footer className="bg-[#EDE4D0] border-t border-[#C5B69E] py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-2xl font-extrabold font-header text-[#A0622A]">
              Skillbee
            </span>
            <p className="text-sm text-[#6D5A4B] leading-relaxed max-w-xs">
              Nền tảng video tương tác nhập vai giúp trẻ 5–10 tuổi rèn luyện kỹ
              năng tự lập, an toàn và ứng xử cuộc sống thông qua các thử thách
              lựa chọn vui nhộn.
            </p>
          </div>

          <div>
            <h4 className="font-header font-bold text-[#A0622A] mb-4 text-lg">
              Liên kết nhanh
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  href="/home"
                  className="hover:text-[#A0622A] transition-colors text-[#6D5A4B]"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/home/wishlist"
                  className="hover:text-[#A0622A] transition-colors text-[#6D5A4B]"
                >
                  Danh sách chờ (Wishlist)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-header font-bold text-[#A0622A] mb-4 text-lg">
              Pháp lý & Hỗ trợ
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  href="/home/privacy-policy"
                  className="hover:text-[#A0622A] transition-colors text-[#6D5A4B]"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  href="/home/terms-of-service"
                  className="hover:text-[#A0622A] transition-colors text-[#6D5A4B]"
                >
                  Điều khoản dịch vụ
                </Link>
              </li>
              <li className="text-sm text-[#6D5A4B]">
                Email:{" "}
                <a
                  href="mailto:support@skillbee.edu.vn"
                  className="hover:text-[#A0622A] underline"
                >
                  support@skillbee.study
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[#C5B69E]/50 text-center text-xs text-[#6D5A4B]/80">
          <p>© {new Date().getFullYear()} Skillbee. Bảo lưu mọi quyền.</p>
        </div>
      </footer>
    </div>
  );
}
