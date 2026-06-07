import Image from "next/image";
import Link from "next/link";
import { Shield, Tv, BarChart3, Award } from "lucide-react";

export default function CustomerWebHome() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-12 md:pt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <div className="inline-flex self-center md:self-start items-center gap-2 bg-[#C4A860]/20 text-[#A0622A] px-4 py-1.5 rounded-full text-sm font-bold">
            <Award className="w-4 h-4" />
            <span>Dành cho trẻ từ 5–10 tuổi</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-header leading-[1.15] text-[#3E2723]">
            Học Kỹ Năng Sống Qua Từng{" "}
            <span className="text-[#A0622A]">Quyết Định</span>
          </h1>

          <p className="text-lg md:text-xl text-[#6D5A4B] leading-relaxed">
            Skillbee là ứng dụng video tương tác nhập vai đột phá, giúp con bạn
            tự trải nghiệm các tình huống thực tế và tự chọn cách ứng xử thông
            minh, an toàn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-2">
            <Link
              href="/home/wishlist"
              className="inline-flex items-center justify-center bg-[#A0622A] text-[#FDF5EB] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#8A5120] hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              Đăng ký nhận ưu đãi sớm
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center bg-white border-2 border-[#C5B69E] text-[#3E2723] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#EDE4D0]/30 transition-colors"
            >
              Tìm hiểu thêm
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full max-w-lg mx-auto md:max-w-none flex justify-center items-center">
          <div className="absolute inset-0 bg-[#EDE4D0] rounded-[2rem] rotate-3 -z-10 shadow-md"></div>
          <div className="bg-[#FFFDF9] p-4 rounded-[2rem] shadow-xl border border-[#C5B69E]/50 overflow-hidden w-full h-full flex items-center justify-center">
            <Image
              src="/hero_mockup.svg"
              alt="Bé học kỹ năng với Skillbee"
              width={500}
              height={375}
              priority
              className="rounded-xl object-contain w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Value Propositions / Features */}
      <section
        id="features"
        className="max-w-6xl mx-auto px-6 py-12 scroll-mt-24"
      >
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold font-header text-[#3E2723]">
            Vì sao chọn Skillbee cho con?
          </h2>
          <p className="text-base text-[#6D5A4B]">
            Chúng tôi kết hợp giáo dục tương tác và công nghệ hình ảnh sinh động
            để bài học kỹ năng sống không còn là lý thuyết khô khan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#EDE4D0] p-8 rounded-3xl border-2 border-[#C5B69E] flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#A0622A] flex items-center justify-center text-[#FDF5EB]">
              <Tv className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-header text-[#3E2723]">
              Video Lựa Chọn Nhập Vai
            </h3>
            <p className="text-[#6D5A4B] leading-relaxed text-sm">
              Trẻ trực tiếp quyết định hướng đi của nhân vật trong câu chuyện.
              Mỗi lựa chọn dẫn đến một kết cục khác nhau giúp bé hiểu luật nhân
              quả.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#EDE4D0] p-8 rounded-3xl border-2 border-[#C5B69E] flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#5DA04D] flex items-center justify-center text-[#FDF5EB]">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-header text-[#3E2723]">
              Bài Học An Toàn Thiết Thực
            </h3>
            <p className="text-[#6D5A4B] leading-relaxed text-sm">
              Các chủ đề thiết yếu được biên soạn tỉ mỉ: từ chối quà người lạ,
              ứng phó khi đi lạc ở siêu thị, bảo vệ vùng riêng tư của cơ thể và
              kỹ năng phòng cháy.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#EDE4D0] p-8 rounded-3xl border-2 border-[#C5B69E] flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#C4A860] flex items-center justify-center text-[#3E2723]">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-header text-[#3E2723]">
              Giám Sát Của Cha Mẹ
            </h3>
            <p className="text-[#6D5A4B] leading-relaxed text-sm">
              Bảng điều khiển thông minh giúp phụ huynh nhận phân tích hành vi
              của con dựa trên các quyết định bé đưa ra, đồng thời quản lý thời
              gian sử dụng thiết bị.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Loop Callout */}
      <section className="bg-[#EDE4D0]/40 py-16 px-6">
        <div className="max-w-4xl mx-auto bg-[#FFFDF9] rounded-[2.5rem] border-2 border-[#C5B69E] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center shadow-lg">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl font-extrabold font-header text-[#3E2723]">
              Vừa học vừa chơi, ghi nhớ sâu sắc
            </h3>
            <p className="text-[#6D5A4B] leading-relaxed">
              Các câu chuyện Choose-Your-Own-Adventure khích lệ tinh thần tự lập
              của bé. Kết cục của trò chơi dạy trẻ nhận biết nguy hiểm mà không
              gây sợ hãi hay lo âu.
            </p>
            <ul className="flex flex-col gap-2.5 mt-2">
              <li className="flex items-center gap-2.5 text-sm font-semibold text-[#3E2723]">
                <span className="w-2 h-2 rounded-full bg-[#5DA04D]" />
                Hình ảnh sắc nét, lồng tiếng Việt sống động
              </li>
              <li className="flex items-center gap-2.5 text-sm font-semibold text-[#3E2723]">
                <span className="w-2 h-2 rounded-full bg-[#5DA04D]" />
                Phần thưởng Sticker và Huân chương thúc đẩy học tập
              </li>
              <li className="flex items-center gap-2.5 text-sm font-semibold text-[#3E2723]">
                <span className="w-2 h-2 rounded-full bg-[#5DA04D]" />
                Giao diện tối giản, nút ấn to, an toàn tuyệt đối cho bé
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0 w-full md:w-72 flex flex-col gap-4 text-center bg-[#EDE4D0] p-6 rounded-3xl border border-[#C5B69E]">
            <span className="text-4xl">🎁</span>
            <h4 className="font-header font-bold text-lg text-[#3E2723]">
              Ưu Đãi Đặc Biệt
            </h4>
            <p className="text-xs text-[#6D5A4B] leading-normal">
              Đăng ký thông tin vào danh sách chờ ngay hôm nay để nhận thông báo
              ra mắt sớm nhất và mã giảm giá 30% khóa học đầu tiên.
            </p>
            <Link
              href="/home/wishlist"
              className="bg-[#A0622A] hover:bg-[#8A5120] text-[#FDF5EB] py-3 rounded-xl font-bold transition-all shadow-md text-sm"
            >
              Đăng ký Wishlist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
