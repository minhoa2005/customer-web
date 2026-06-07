import type { Metadata } from "next";
import { Shield, Eye, Lock, RefreshCw, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Chính Sách Bảo Mật - Skillbee",
  description: "Chính sách bảo mật thông tin cá nhân và dữ liệu của bé trên nền tảng giáo dục Skillbee.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-10">
      <div className="text-center max-w-xl mx-auto flex flex-col gap-3">
        <div className="inline-flex self-center items-center justify-center w-16 h-16 rounded-full bg-[#5DA04D]/10 text-[#5DA04D] mb-2">
          <Shield className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-header text-[#3E2723]">
          Chính Sách Bảo Mật
        </h1>
        <p className="text-sm text-[#6D5A4B]">
          Cập nhật lần cuối: Ngày 5 tháng 6 năm 2026
        </p>
      </div>

      <div className="bg-[#FFFDF9] border-2 border-[#C5B69E] rounded-[2rem] p-8 md:p-12 shadow-xl flex flex-col gap-8 text-[#3E2723] leading-relaxed">
        {/* Section 1 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-header font-bold text-xl md:text-2xl text-[#A0622A] flex items-center gap-2">
            <Eye className="w-5 h-5 flex-shrink-0" />
            1. Dữ liệu Chúng tôi Thu thập (Data We Collect)
          </h2>
          <div className="text-[#6D5A4B] pl-7 flex flex-col gap-2">
            <p>Khi phụ huynh đăng ký danh sách chờ hoặc sử dụng dịch vụ Skillbee, chúng tôi có thể thu thập các thông tin sau:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li><strong>Thông tin liên hệ của phụ huynh:</strong> Địa chỉ email, họ và tên khi phụ huynh tự nguyện cung cấp.</li>
              <li><strong>Thông tin của bé:</strong> Họ tên của bé và độ tuổi (từ 0 đến 18 tuổi) nhằm mục đích cá nhân hóa trải nghiệm.</li>
              <li><strong>Dữ liệu hoạt động:</strong> Lịch sử lựa chọn trong video tương tác, tiến trình học tập của bé, và huân chương đạt được trong ứng dụng.</li>
              <li><strong>Mã CAPTCHA:</strong> Token xác minh hCaptcha nhằm mục đích chống spam và bảo mật biểu mẫu đăng ký.</li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-header font-bold text-xl md:text-2xl text-[#A0622A] flex items-center gap-2">
            <Lock className="w-5 h-5 flex-shrink-0" />
            2. Cách Chúng tôi Sử dụng Thông tin (How We Use It)
          </h2>
          <div className="text-[#6D5A4B] pl-7 flex flex-col gap-2">
            <p>Chúng tôi cam kết sử dụng thông tin thu thập được cho các mục đích hợp pháp sau:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li><strong>Cá nhân hóa nội dung học tập:</strong> Sử dụng thông tin tuổi của bé để gợi ý và tùy chỉnh các tình huống video phù hợp với nhận thức của từng nhóm tuổi.</li>
              <li><strong>Gửi thông báo và ưu đãi:</strong> Gửi thông tin cập nhật về ngày ra mắt chính thức, gửi mã giảm giá 30% và cập nhật các tính năng mới cho phụ huynh.</li>
              <li><strong>Cải thiện sản phẩm:</strong> Phân tích lựa chọn của bé để nâng cao chất lượng nội dung các câu chuyện tương tác.</li>
              <li><strong>Đảm bảo an toàn:</strong> Sử dụng CAPTCHA để ngăn chặn hành vi spam hoặc tấn công mạng vào hệ thống.</li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-header font-bold text-xl md:text-2xl text-[#A0622A] flex items-center gap-2">
            <RefreshCw className="w-5 h-5 flex-shrink-0" />
            3. Chia sẻ Thông tin với Bên Thứ ba (Third Parties)
          </h2>
          <div className="text-[#6D5A4B] pl-7 flex flex-col gap-2">
            <p>
              Skillbee coi trọng quyền riêng tư của trẻ em và gia đình. Chúng tôi <strong>không bán, không cho thuê, không trao đổi</strong> thông tin cá nhân của người dùng cho bất kỳ bên thứ ba nào vì mục đích thương mại.
            </p>
            <p>
              Thông tin chỉ được chia sẻ với các nhà cung cấp dịch vụ cơ sở hạ tầng (ví dụ: Supabase để lưu trữ cơ sở dữ liệu, dịch vụ gửi email tự động) nhằm vận hành hệ thống một cách bảo mật nhất. Tất cả bên thứ ba này đều tuân thủ các quy định bảo mật thông tin nghiêm ngặt.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-header font-bold text-xl md:text-2xl text-[#A0622A] flex items-center gap-2">
            <Shield className="w-5 h-5 flex-shrink-0" />
            4. Cookies và Công nghệ Theo dõi (Cookies)
          </h2>
          <div className="text-[#6D5A4B] pl-7 flex flex-col gap-2">
            <p>
              Chúng tôi sử dụng cookies để lưu trữ trạng thái đăng nhập của phụ huynh và ghi nhớ một số tùy chỉnh giao diện người dùng. Phụ huynh hoàn toàn có thể cấu hình trình duyệt để từ chối nhận cookies, tuy nhiên điều này có thể ảnh hưởng đến một số chức năng tự động hóa của ứng dụng.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-header font-bold text-xl md:text-2xl text-[#A0622A] flex items-center gap-2">
            <Mail className="w-5 h-5 flex-shrink-0" />
            5. Liên hệ với Chúng tôi (Contact Us)
          </h2>
          <div className="text-[#6D5A4B] pl-7 flex flex-col gap-2">
            <p>
              Nếu phụ huynh có bất kỳ câu hỏi nào liên quan đến Chính sách bảo mật hoặc có nhu cầu yêu cầu xóa bỏ hoàn toàn dữ liệu cá nhân của bé khỏi hệ thống, vui lòng liên hệ với chúng tôi qua:
            </p>
            <ul className="list-none flex flex-col gap-1.5 mt-2">
              <li>📧 Email hỗ trợ: <a href="mailto:support@skillbee.edu.vn" className="text-[#A0622A] underline font-bold">support@skillbee.edu.vn</a></li>
              <li>📍 Văn phòng: 123 Đường An toàn, Quận 1, TP. Hồ Chí Minh, Việt Nam</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
