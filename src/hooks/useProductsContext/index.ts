import { useContext } from 'react'

import { ProductsContext } from 'components/Providers/ProductsProvider'
import { ProductsContextType } from 'types'

export const useProductsContext = (): ProductsContextType =>
  useContext(ProductsContext)
