import type { BundleItem } from 'types'

/**
 * Returns the product added to the bundle.
 */
export const getItemById = (
  items: BundleItem[],
  id?: string,
): BundleItem | undefined => items.find((item) => item.id === id)

/**
 * Returns the total product count added to the bundle.
 */
export const getItemCount = (items: BundleItem[], id?: string): number =>
  items.filter((item) => item.id === id).length

/**
 * Returns a pluralized word.
 */
export const pluralize = (count: number, noun: string, suffix = 's'): string =>
  `${count} ${noun}${count !== 1 ? suffix : ''}`
