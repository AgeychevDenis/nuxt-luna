<template>
  <form @submit="onSubmit">
    <div class="flex justify-between items-center mb-4">
      <div class="mr-2">
        <AppTitle text="Вход в аккаунт" size="md" class="font-bold" />
        <p class="text-gray-400">Введите свою почту, чтобы войти в свой аккаунт</p>
      </div>
    </div>

    <FormInput class="mb-3" name="email" label="E-Mail" required :isFieldDirty="isFieldDirty" />
    <FormInput class="mb-5" type="password" name="password" label="Пароль" required :isFieldDirty="isFieldDirty" />

    <Button :loading="isSubmitting" :disabled="isSubmitting" class="h-12 text-base" type="submit">{{ textForm }}</Button>
  </form>
</template>

<script setup lang="ts">
import { useForm, useIsSubmitting } from 'vee-validate'

import { AppTitle, FormInput } from '@/components/shared'
import { useToast } from '@/components/ui/toast/use-toast'

import { formLoginSchema } from './schemas'
import { useAuthStore } from '@/stores/AuthStore'

interface Props {
  onClose?: VoidFunction
}

const props = defineProps<Props>()

const { toast } = useToast()
const { signIn, getSession } = useAuth()

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formLoginSchema,
})

const isSubmitting = useIsSubmitting()

const store = useAuthStore()

const textForm = computed(() => (isSubmitting.value ? 'Вход...' : 'Войти'))

const onSubmit = handleSubmit(async (value) => {
  try {
    const resp = await signIn('credentials', {
      ...value,
      redirect: false,
    })

    if (!resp?.ok) {
      throw Error()
    }

    toast({
      title: 'Успех',
      description: 'Вы вошли в аккаунт',
      variant: 'success',
    })

    store.setSession()
    props.onClose?.()
  } catch (error) {
    console.error('Error [LOGIN]', error)

    toast({
      title: 'Ошибка',
      description: '❌ Не удалось войти в аккаунт',
      variant: 'destructive',
    })
  }
})
</script>

<style scoped></style>
