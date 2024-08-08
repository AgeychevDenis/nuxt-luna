<template>
  <AppContainer>
    <AppTitle text="Оформление заказа" class="font-bold text-[36px] py-10" />

    <form @submit="onSubmit" class="flex gap-10">
      <div class="flex flex-col gap-10 flex-1 mb-20">
        <CheckoutCart :data="data" :onClickCountButton="onClickCountButton" />

        <CheckoutPersonalForm :isFieldDirty="isFieldDirty" />

        <CheckoutAddressForm />
      </div>

      <div class="w-[450px]">
        <CheckoutSidebar :totalSum="totalSum" />
      </div>
    </form>
  </AppContainer>
</template>

<script setup lang="ts">
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

definePageMeta({
  layout: 'checkout',
})

const isShow = ref(false)

const { data, totalSum, onClickCountButton } = useCart(isShow)

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: checkoutFormSchema,
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
})

onMounted(() => {
  isShow.value = true
})
</script>

<style scoped></style>
