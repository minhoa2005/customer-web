import type { Metadata } from "next";
import WishlistForm from "./WishlistForm";

export const metadata: Metadata = {
  title: "Đăng Ký Danh Sách Chờ (Wishlist) - Skillbee",
  description: "Đăng ký tham gia danh sách chờ của Skillbee để nhận ưu đãi 30% khi ra mắt và là người đầu tiên trải nghiệm học kỹ năng sống tương tác cho bé.",
};

export default function WishlistPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-10">
      <div className="text-center max-w-xl mx-auto flex flex-col gap-3">
        <span className="text-4xl animate-bounce">🐝</span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-header text-[#3E2723] leading-tight">
          Đăng Ký Danh Sách Chờ
        </h1>
        <p className="text-base md:text-lg text-[#6D5A4B] leading-relaxed">
          Gia nhập danh sách chờ của chúng tôi để nhận thông báo sớm nhất về ngày ra mắt và nhận mã giảm giá <strong className="text-[#A0622A] font-bold">30%</strong> cho gói học đầu tiên của bé.
        </p>
      </div>

      <WishlistForm />
    </div>
  );
}
