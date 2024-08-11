<template>
  <form @submit="onSubmit">
    <div class="flex justify-between items-center mb-4">
      <div class="mr-2">
        <AppTitle text="Регистрация" size="md" class="font-bold" />
        <p class="text-gray-400">Заполните форму, чтобы создать аккаунт</p>
      </div>
    </div>

    <FormInput class="mb-3" name="email" label="E-Mail" required :isFieldDirty="isFieldDirty" />
    <FormInput label="Полное имя" class="mb-3" name="fullName" required :isFieldDirty="isFieldDirty" />
    <FormInput type="password" class="mb-3" name="password" label="Пароль" required :isFieldDirty="isFieldDirty" />
    <FormInput
      name="confirmPassword"
      label="Подтвердите пароль"
      class="mb-5"
      type="password"
      required
      :isFieldDirty="isFieldDirty"
    />

    <Button :loading="isSubmitting" :disabled="isSubmitting" class="w-full h-12 text-base" type="submit">
      Зарегистрироваться
    </Button>
  </form>
</template>

<script setup lang="ts">
import axios from 'axios'
import { useForm, useIsSubmitting } from 'vee-validate'

import { AppTitle, FormInput } from '@/components/shared'
import { useToast } from '@/components/ui/toast/use-toast'

import { formRegisterSchema } from './schemas'

interface Props {
  onClose?: VoidFunction
}

const props = defineProps<Props>()

const { toast } = useToast()

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formRegisterSchema,
})

const isSubmitting = useIsSubmitting()

const onSubmit = handleSubmit(async (value) => {
  try {
    await axios.post('/api/register-user', value)

    toast({
      title: 'Успех',
      description: 'Вы успешно зарегистрировались',
      variant: 'success',
    })

    props.onClose?.()
  } catch (error) {
    console.error('Error [LOGIN]', error)

    toast({
      title: 'Ошибка',
      description: '❌ Не удалось зарегистрироваться',
      variant: 'destructive',
    })
  }
})
</script>

<style scoped></style>
