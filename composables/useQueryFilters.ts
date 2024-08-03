import qs from 'qs'

export interface PriceProps {
  priceFrom: number
  priceTo: number
}

interface Filters {
  price: Ref<PriceProps>
  pizzaTypesIds: Ref<Set<string>>
  sizesIds: Ref<Set<string>>
  ingredientsIds: Ref<Set<string>>
}

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter()

  watch(
    [filters.price, filters.pizzaTypesIds, filters.sizesIds.value, filters.ingredientsIds],
    () => {
      const params = {
        ...filters.price.value,
        pizzaTypes: Array.from(filters.pizzaTypesIds.value),
        sizes: Array.from(filters.sizesIds.value),
        ingredients: Array.from(filters.ingredientsIds.value),
      }

      const query = qs.stringify(params, {
        arrayFormat: 'comma',
      })

      router.push(`?${query}`)
    },
    { deep: true }
  )
}
