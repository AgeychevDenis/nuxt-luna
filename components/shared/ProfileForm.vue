<template>
  <AppContainer class="my-10">
    <AppTitle :text="`Личные данные | #${data.id}`" size="md" class="font-bold" />

    <form @submit="onSubmit" class="flex flex-col gap-5 w-96 mt-10">
      <FormInput name="email" label="E-Mail" :isFieldDirty="isFieldDirty" required />
      <FormInput name="fullName" label="Полное имя" :isFieldDirty="isFieldDirty" required />

      <FormInput type="password" name="password" label="Новый пароль" :isFieldDirty="isFieldDirty" required />
      <FormInput type="password" name="confirmPassword" label="Повторите пароль" :isFieldDirty="isFieldDirty" required />

      <Button :disabled="isSubmitting" class="text-base mt-10" type="submit">Сохранить</Button>

      <Button @click="onClickSignOut" variant="secondary" :disabled="isSubmitting" class="text-base" type="button">Выйти</Button>
    </form>
  </AppContainer>
</template>

<script setup lang="ts">
import type { User } from '@prisma/client'
import axios from 'axios'
import { useForm, useIsSubmitting } from 'vee-validate'

import { AppContainer, AppTitle, FormInput } from '@/components/shared'
import { useToast } from '@/components/ui/toast/use-toast'

import { formRegisterSchema } from './modals/auth-modal/forms/schemas'

interface Props {
  data: User
  userId: string
}

const props = defineProps<Props>()

const { signOut } = useAuth()
const { toast } = useToast()

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formRegisterSchema,
  initialValues: {
    email: props.data.email,
    fullName: props.data.fullName,
  },
})

const isSubmitting = useIsSubmitting()

const onSubmit = handleSubmit(async (data) => {
  try {
    await axios.post('/api/user', { ...data, userId: props.userId })

    toast({
      title: 'Успех',
      description: 'Данные обновлены 📝',
      variant: 'success',
    })
  } catch (error) {
    toast({
      title: 'Ошибка',
      description: '❌ Ошибка при обновлении данных',
      variant: 'destructive',
    })
  }
})

const onClickSignOut = () => {
  signOut({
    callbackUrl: '/',
  })
}
</script>

<style scoped></style>
