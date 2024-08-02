import type { LocationQueryValue } from 'vue-router'

const toggleItemsIds = (item: string, items: Set<string>) => {
  if (items.has(item)) {
    items.delete(item)
  } else {
    items.add(item)
  }
}

const processQuery = (queryField: LocationQueryValue | LocationQueryValue[] | undefined) => {
  if (Array.isArray(queryField)) {
    return new Set<string>()
  }
  return new Set<string>(queryField?.split(',') || [])
}

export { toggleItemsIds, processQuery }
