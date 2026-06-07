import type { Metadata } from "next";
import { FileText, CheckCircle, Smartphone, Award, AlertTriangle, Edit3, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Điều Khoản Dịch Vụ - Skillbee",
  description: "Điều khoản dịch vụ và thỏa thuận sử dụng nền tảng giáo dục tương tác Skillbee dành cho phụ huynh và học sinh.",
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-10">
      <div className="text-center max-w-xl mx-auto flex flex-col gap-3">
        <div className="inline-flex self-center items-center justify-center w-16 h-16 rounded-full bg-[#A0622A]/10 text-[#A0622A] mb-2">
          <FileText className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-header text-[#3E2723]">
          Điều Khoản Dịch Vụ
        </h1>
        <p className="text-sm text-[#6D5A4B]">
          Cập nhật lần cuối: Ngày 5 tháng 6 năm 2026
        </p>
      </div>

      <div className="bg-[#FFFDF9] border-2 border-[#C5B69E] rounded-[2rem] p-8 md:p-12 shadow-xl flex flex-col gap-8 text-[#3E2723] leading-relaxed">
        {/* Section 1 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-header font-bold text-xl md:text-2xl text-[#A0622A] flex items-center gap-2">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            1. Chấp thuận các Điều khoản (Acceptance of Terms)
          </h2>
          <div className="text-[#6D5A4B] pl-7 flex flex-col gap-2">
            <p>
              Bằng cách truy cập trang web của chúng tôi, đăng ký danh sách chờ (wishlist) hoặc đăng nhập sử dụng ứng dụng Skillbee, phụ huynh xác nhận đã đọc, hiểu và đồng ý bị ràng buộc bởi các Điều khoản dịch vụ này. Nếu bạn không đồng ý với bất kỳ phần nào của điều khoản, vui lòng không tiếp tục sử dụng dịch vụ của chúng tôi.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-header font-bold text-xl md:text-2xl text-[#A0622A] flex items-center gap-2">
            <Smartphone className="w-5 h-5 flex-shrink-0" />
            2. Sử dụng Dịch vụ (Use of Service)
          </h2>
          <div className="text-[#6D5A4B] pl-7 flex flex-col gap-2">
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li><strong>Tài khoản Phụ huynh:</strong> Phụ huynh chịu trách nhiệm đăng ký tài khoản, khai báo thông tin chính xác và quản lý việc sử dụng thiết bị của con em mình.</li>
              <li><strong>Trải nghiệm của trẻ em:</strong> Dịch vụ Skillbee được thiết kế an toàn cho bé, hoàn toàn không chứa liên kết ngoài hay quảng cáo của bên thứ ba trong chế độ học của trẻ (Kids Mode).</li>
              <li><strong>Hành vi nghiêm cấm:</strong> Người dùng không được phép cố tình hack, spam, đảo ngược mã nguồn hoặc phá hoại hệ thống máy chủ của Skillbee. Việc đăng ký danh sách chờ phải được thực hiện trung thực, không spam email giả lập.</li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-header font-bold text-xl md:text-2xl text-[#A0622A] flex items-center gap-2">
            <Award className="w-5 h-5 flex-shrink-0" />
            3. Sở hữu Trí tuệ (Intellectual Property)
          </h2>
          <div className="text-[#6D5A4B] pl-7 flex flex-col gap-2">
            <p>
              Toàn bộ nội dung trên nền tảng Skillbee bao gồm nhưng không giới hạn ở: video các bài học, kịch bản rẽ nhánh (Choose Your Own Adventure), giọng lồng tiếng, nhân vật hoạt hình, đồ họa giao diện, mã nguồn ứng dụng và logo thương hiệu đều thuộc sở hữu độc quyền của Skillbee hoặc các đối tác cấp phép. Người dùng không được tự ý sao chép, tải xuống, phát tán trái phép các tài nguyên này dưới mọi hình thức.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-header font-bold text-xl md:text-2xl text-[#A0622A] flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            4. Giới hạn Trách nhiệm (Limitation of Liability)
          </h2>
          <div className="text-[#6D5A4B] pl-7 flex flex-col gap-2">
            <p>
              Skillbee là công cụ bổ trợ học tập kỹ năng sống cho bé. Mặc dù các kịch bản tình huống được nghiên cứu dựa trên các hướng dẫn an toàn chuẩn mực, Skillbee không thể thay thế hoàn toàn sự giám sát trực tiếp của gia đình và nhà trường trong đời sống thực tế. Chúng tôi không chịu trách nhiệm pháp lý đối với bất kỳ sự cố hay thương tích nào xảy ra ngoài đời thực.
            </p>
            <p>
              Hệ thống được cung cấp trên cơ sở &quot;hiện có&quot; (as is). Chúng tôi nỗ lực duy trì tính liên tục của hệ thống nhưng không đảm bảo ứng dụng không bao giờ gặp lỗi gián đoạn do sự cố đường truyền internet hoặc bảo trì định kỳ.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-header font-bold text-xl md:text-2xl text-[#A0622A] flex items-center gap-2">
            <Edit3 className="w-5 h-5 flex-shrink-0" />
            5. Thay đổi Điều khoản (Changes to Terms)
          </h2>
          <div className="text-[#6D5A4B] pl-7 flex flex-col gap-2">
            <p>
              Chúng tôi có quyền sửa đổi hoặc thay thế các Điều khoản dịch vụ này bất kỳ lúc nào. Nếu có những thay đổi quan trọng ảnh hưởng đến quyền lợi người dùng, chúng tôi sẽ thông báo rõ ràng trên trang chủ hoặc gửi email cho phụ huynh trước khi điều khoản mới chính thức có hiệu lực ít nhất 7 ngày.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-header font-bold text-xl md:text-2xl text-[#A0622A] flex items-center gap-2">
            <Mail className="w-5 h-5 flex-shrink-0" />
            6. Liên hệ (Contact)
          </h2>
          <div className="text-[#6D5A4B] pl-7 flex flex-col gap-2">
            <p>
              Mọi ý kiến thắc mắc hoặc báo cáo vi phạm Điều khoản dịch vụ, phụ huynh vui lòng gửi thông tin về địa chỉ hòm thư hỗ trợ chính thức của chúng tôi:
            </p>
            <ul className="list-none flex flex-col gap-1.5 mt-2">
              <li>📧 Email: <a href="mailto:support@skillbee.edu.vn" className="text-[#A0622A] underline font-bold">support@skillbee.edu.vn</a></li>
              <li>📍 Trụ sở: 123 Đường An toàn, Quận 1, TP. Hồ Chí Minh, Việt Nam</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
