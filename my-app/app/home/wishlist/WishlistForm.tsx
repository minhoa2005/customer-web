"use client";

import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabase";
import { wishlistSchema, type WishlistFormData } from "@/lib/schemas";
import CaptchaWidget, { type CaptchaWidgetRef } from "./CaptchaWidget";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function WishlistForm() {
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const captchaWidgetRef = useRef<CaptchaWidgetRef>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<WishlistFormData>({
    resolver: zodResolver(wishlistSchema),
    defaultValues: {
      email: "",
      captcha_token: "",
    },
  });

  const captchaToken = watch("captcha_token");

  const onSubmit = async (data: WishlistFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        email: data.email,
        captcha_token: data.captcha_token,
      };

      const { error } = await supabase.functions.invoke("verify-captcha", {
        body: payload,
      });

      if (error) {
        throw new Error(error.message);
      }

      setSuccess(true);
      reset();
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Đã xảy ra lỗi. Vui lòng thử lại sau.";
      console.error("Lỗi gửi wishlist:", err);
      setSubmitError(message);
      // Reset captcha on failure so user can try again
      if (captchaWidgetRef.current) {
        captchaWidgetRef.current.reset();
        setValue("captcha_token", "");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCaptchaVerify = (token: string) => {
    setValue("captcha_token", token, { shouldValidate: true });
  };

  const handleCaptchaExpire = () => {
    setValue("captcha_token", "");
  };

  if (success) {
    return (
      <div className="bg-[#FFFDF9] border-2 border-[#5DA04D] rounded-[2rem] p-8 md:p-12 text-center flex flex-col items-center gap-6 shadow-xl max-w-xl mx-auto animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-[#5DA04D]/10 flex items-center justify-center text-[#5DA04D]">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h3 className="text-3xl font-extrabold font-header text-[#3E2723]">
          Đăng ký thành công!
        </h3>
        <p className="text-[#6D5A4B] leading-relaxed">
          Cảm ơn bạn đã quan tâm đến Skillbee. Chúng tôi đã ghi nhận email của
          bạn vào danh sách chờ và sẽ gửi mã ưu đãi giảm giá 30% khi ứng dụng
          chính thức ra mắt.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFDF9] border-2 border-[#C5B69E] rounded-[2rem] p-6 md:p-10 shadow-xl max-w-xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {submitError && (
          <div className="bg-[#C23A22]/10 border border-[#C23A22]/30 rounded-2xl p-4 flex items-start gap-3 text-[#C23A22]">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p className="text-sm font-medium">{submitError}</p>
          </div>
        )}

        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-header font-bold text-base text-[#3E2723]"
          >
            Địa chỉ Email của bạn <span className="text-[#C23A22]">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            disabled={isSubmitting}
            {...register("email")}
            className={`w-full h-14 px-4 bg-[#F5EFE0]/50 border-2 rounded-2xl font-medium text-lg outline-none transition-all focus:bg-white ${
              errors.email
                ? "border-[#C23A22] focus:ring-2 focus:ring-[#C23A22]/20"
                : "border-[#C5B69E] focus:border-[#A0622A] focus:ring-2 focus:ring-[#A0622A]/20"
            }`}
          />
          {errors.email && (
            <p className="text-xs font-semibold text-[#C23A22] flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* CAPTCHA Widget */}
        <div className="flex flex-col gap-2">
          <CaptchaWidget
            ref={captchaWidgetRef}
            onVerify={handleCaptchaVerify}
            onExpire={handleCaptchaExpire}
          />
          {errors.captcha_token && (
            <p className="text-xs font-semibold text-[#C23A22] text-center flex items-center justify-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.captcha_token.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !captchaToken}
          className="w-full h-14 rounded-2xl bg-[#A0622A] disabled:bg-[#C5B69E]/50 disabled:text-[#6D5A4B]/60 disabled:cursor-not-allowed text-[#FDF5EB] font-bold text-lg shadow-md hover:bg-[#8A5120] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Đang gửi thông tin...</span>
            </>
          ) : (
            <span>Gửi Đăng Ký</span>
          )}
        </button>
      </form>
    </div>
  );
}
