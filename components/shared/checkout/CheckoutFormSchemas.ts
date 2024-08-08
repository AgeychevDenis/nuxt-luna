import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const requiredMessage = (fieldName: string) => `Поле ${fieldName} обязательно для заполнения`

export const checkoutFormSchema = toTypedSchema(
  z.object({
    firstName: z
      .string({
        required_error: requiredMessage('Имя'),
      })
      .min(2, { message: 'Имя должно содержать не менее 2 букв' }),
    lastName: z
      .string({
        required_error: requiredMessage('Фамилия'),
      })
      .min(2, { message: 'Фамилия должна содержать не менее 2 букв' }),
    email: z
      .string({
        required_error: requiredMessage('Email'),
      })
      .email({ message: 'Введите корректную почту' }),
    phone: z
      .string({
        required_error: requiredMessage('Телефон'),
      })
      .min(10, { message: 'Введите корректный номер телефона' }),
  })
)
