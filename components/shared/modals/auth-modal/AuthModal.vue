<template>
  <Dialog :open="open" @update:open="handleClose">
    <DialogContent class="w-[450px] bg-white p-10">
      <DialogTitle class="hidden"></DialogTitle>

      <DialogDescription class="hidden"></DialogDescription>

      <LoginForms v-if="type === 'login'" :onClose="handleClose" />

      <RegisterForms v-else :onClose="handleClose" />

      <hr />

      <div class="flex gap-2">
        <Button
          variant="secondary"
          @click="() => signIn('github', { callbackUrl: '/', redirect: true })"
          class="gap-2 h-12 p-2 flex-1"
        >
          <img class="w-6 h-6" src="https://github.githubassets.com/favicons/favicon.svg" />
          GitHub
        </Button>

        <Button
          variant="secondary"
          @click="signIn('google', { callbackUrl: '/', redirect: true })"
          type="button"
          class="gap-2 h-12 p-2 flex-1"
        >
          <img class="w-6 h-6" src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" />
          Google
        </Button>
      </div>

      <Button variant="outline" @click="onSwitchType" type="button" class="h-12">
        {{ textLogin }}
      </Button>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { LoginForms, RegisterForms } from '@/components/shared'

interface Props {
  open: boolean
  onClose: VoidFunction
}

const props = defineProps<Props>()

const { signIn } = useAuth()

const type = ref<'login' | 'register'>('login')
const textLogin = computed(() => (type.value === 'login' ? 'Регистрация' : 'Войти'))

const onSwitchType = () => {
  type.value = type.value === 'login' ? 'register' : 'login'
}

const handleClose = () => {
  props.onClose()
  type.value = 'login'
}
</script>

<style scoped></style>
