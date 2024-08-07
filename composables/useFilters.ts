import type { LocationQueryValue } from 'vue-router'

import type { PriceProps } from '@/composables/useQueryFilters'

/**
 * Функция для добавление/удаление ids в Объект Set
 *
 * @example
 * ```
 * useToggleItemsIds(id, pizzaIds)
 * ```
 *
 * @param item - элемент
 * @param items - список элементов Set
 */

const useToggleItemsIds = (item: string, items: Set<string>) => {
  if (items.has(item)) {
    items.delete(item)
  } else {
    items.add(item)
  }
}

/** Функция парсинга query строки из url
 *
 * @param queryField - поле
 * @returns новый объект Set с ключами
 */

const useProcessQuery = (queryField: LocationQueryValue | LocationQueryValue[] | undefined) => {
  if (Array.isArray(queryField)) {
    return new Set<string>()
  }
  return new Set<string>(queryField?.split(',') || [])
}

const useFilters = () => {
  const query = useRoute().query

  const sizesIds = ref(useProcessQuery(query.sizes))
  const pizzaTypesIds = ref(useProcessQuery(query.pizzaTypes))
  const ingredientsIds = ref(useProcessQuery(query.ingredients))

  const price = ref<PriceProps>({
    priceFrom: Number(query.priceFrom) || 0,
    priceTo: Number(query.priceTo) || 1000,
  })

  const updatePriceFromSlider = (newValues: number[]) => {
    price.value.priceFrom = newValues[0]
    price.value.priceTo = newValues[1]
  }

  return {
    sizesIds,
    pizzaTypesIds,
    ingredientsIds,
    price,
    updatePriceFromSlider,
  }
}

export { useToggleItemsIds, useProcessQuery, useFilters }
