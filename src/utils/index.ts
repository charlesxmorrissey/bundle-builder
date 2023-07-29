import type { BundleItem } from 'types'

/**
 * Returns the product added to the bundle.
 */
export const getItemById = (
  arry: BundleItem[],
  id?: string,
): BundleItem | undefined => arry.find((item) => item.id === id)
