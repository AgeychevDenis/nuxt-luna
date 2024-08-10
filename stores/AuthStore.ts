export const useAuthStore = defineStore('authStore', () => {
  const session = ref()

  const { getSession } = useAuth()

  const setSession = async () => {
    session.value = await getSession()
  }

  return {
    session,
    setSession,
  }
})
