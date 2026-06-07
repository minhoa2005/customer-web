"use client";

import React, { useRef, useImperativeHandle, forwardRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface CaptchaWidgetProps {
  onVerify: (token: string) => void;
  onExpire: () => void;
}

export interface CaptchaWidgetRef {
  reset: () => void;
}

const CaptchaWidget = forwardRef<CaptchaWidgetRef, CaptchaWidgetProps>(
  ({ onVerify, onExpire }, ref) => {
    const captchaRef = useRef<HCaptcha>(null);
    const siteKey =
      process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY || "10000000-ffff-ffff-ffff-ffffffffffff";

    useImperativeHandle(ref, () => ({
      reset: () => {
        if (captchaRef.current) {
          captchaRef.current.resetCaptcha();
        }
      },
    }));

    return (
      <div className="flex justify-center my-4 overflow-hidden">
        <HCaptcha
          ref={captchaRef}
          sitekey={siteKey}
          onVerify={onVerify}
          onExpire={onExpire}
          onError={(err) => {
            console.error("hCaptcha Error:", err);
            onExpire();
          }}
        />
      </div>
    );
  }
);

CaptchaWidget.displayName = "CaptchaWidget";

export default CaptchaWidget;
