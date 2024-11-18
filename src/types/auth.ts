import { AREA_LIST, LABEL_LIST } from 'constants/register';
import { z } from 'zod';

export const TabType: { [key: number]: string } = {
  0: 'start',
  1: 'auth',
  2: 'info',
  3: 'area',
  4: 'label',
} as const;

export type TabTypeValues = (typeof TabType)[number];

export const registerSchema = z
  .object({
    name: z.string().min(1, '이름을 입력해주세요'),
    number: z
      .string()
      .regex(
        /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
        '유효한 전화번호 형식이 아닙니다',
      ),
    pw: z
      .string()
      .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
      .max(20, '비밀번호는 최대 20자 이하여야 합니다.')
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
        '비밀번호는 문자, 숫자, 특수문자(@$!%*#?&)를 모두 포함해야 합니다.',
      ),
    pwcheck: z.string().min(1),
    gender: z.enum(['male', 'female']).optional(),
    birth: z.date().optional(),
    area: z.array(z.enum(AREA_LIST as [string, ...string[]])).optional(),
    label: z.array(z.number()).optional(),
  })
  .refine((data) => data.pw === data.pwcheck, {
    path: ['pwcheck'],
    message: '비밀번호가 일치하지 않습니다.',
  });

export type RegisterFormType = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  number: z.string().regex(/^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/),
  pw: z.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다.'),
});

export type LoginFormType = z.infer<typeof loginSchema>;
