export const useCategoryStore = defineStore('categoryStore', () => {
  const activeId = ref<number>(1)
  const setActiveId = (id: number) => (activeId.value = id)

  return {
    activeId,
    setActiveId,
  }
})
