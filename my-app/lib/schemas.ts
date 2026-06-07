import { z } from 'zod';

export const wishlistSchema = z.object({
  email: z.string()
    .min(1, 'Vui lòng nhập email')
    .email('Email không hợp lệ'),
  captcha_token: z.string().min(1, 'Vui lòng xác minh CAPTCHA'),
});

export type WishlistFormData = z.infer<typeof wishlistSchema>;
