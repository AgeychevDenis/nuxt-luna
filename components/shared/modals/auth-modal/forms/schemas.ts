import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const requiredMessage = (fieldName: string) => `Поле ${fieldName} обязательно для заполнения`

export const passwordSchema = z
  .string({
    required_error: requiredMessage('Пароль'),
  })
  .min(4, { message: 'Введите корректный пароль' })

export const formLoginSchema = toTypedSchema(
  z.object({
    email: z
      .string({
        required_error: requiredMessage('Email'),
      })
      .email({ message: 'Введите корректную почту' }),
    password: passwordSchema,
  })
)

export const formRegisterSchema = toTypedSchema(
  z
    .object({
      fullName: z
        .string({
          required_error: requiredMessage('Имя и фамилия'),
        })
        .min(2, { message: 'Введите имя и фамилию' }),
      email: z
        .string({
          required_error: requiredMessage('Почта'),
        })
        .email({ message: 'Введите корректную почту' }),
      password: passwordSchema,
      confirmPassword: passwordSchema,
    })

    .refine((data) => data.password === data.confirmPassword, {
      message: 'Пароли не совпадают',
      path: ['confirmPassword'],
    })
)
