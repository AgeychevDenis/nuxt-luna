<template>
  <AppContainer>
    <AppTitle text="Оформление заказа" class="font-bold text-[36px] py-10" />

    <form @submit="onSubmit" class="flex gap-10">
      <div class="flex flex-col gap-10 flex-1 mb-20">
        <CheckoutCart :data="data" :onClickCountButton="onClickCountButton" />

        <CheckoutPersonalForm :class="{ 'opacity-50 pointer-events-none': store.loading }" :isFieldDirty="isFieldDirty" />

        <CheckoutAddressForm :class="{ 'opacity-50 pointer-events-none': store.loading }" :isFieldDirty="isFieldDirty" />
      </div>

      <div class="w-[450px]">
        <CheckoutSidebar :submitting="submitting" :totalSum="totalSum" />
      </div>
    </form>
  </AppContainer>
</template>

<script setup lang="ts">
import axios from 'axios'
import { useForm } from 'vee-validate'

import {
  AppContainer,
  AppTitle,
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
  CheckoutSidebar,
} from '@/components/shared'
import { checkoutFormSchema } from '@/components/shared/checkout/CheckoutFormSchemas'
import { useToast } from '@/components/ui/toast/use-toast'

import { CartStore } from '@/stores/CartStore'

definePageMeta({
  layout: 'checkout',
})

const store = CartStore()
const { toast } = useToast()

const isShow = ref(false)
const submitting = ref(false)

const { data, totalSum, onClickCountButton } = useCart(isShow)

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: checkoutFormSchema,
})

const onSubmit = handleSubmit(async (values) => {
  try {
    submitting.value = true

    const { data } = await axios.post<string>('/api/checkout', values)

    toast({
      title: 'Успех',
      description: 'Заказ успешно оформлен',
      variant: 'success',
    })

    if (data) {
      location.href = data
    }
  } catch (error) {
    console.log(error)
    submitting.value = false
    toast({
      title: 'Ошибка',
      description: 'Не удалось оформить заказ',
      variant: 'destructive',
    })
  }
})

onMounted(() => {
  isShow.value = true
})
</script>

<style scoped></style>
