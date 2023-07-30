import { createContext, useReducer } from 'react'

import { productsReducer } from 'reducers'
import { InitialStateType, ProductActions, ProductsContextType } from 'types'

interface ProductsProviderProps {
  children: React.ReactNode
}

const initialState = {
  bundle: [],
  bundleItem: null,
  productTypes: [],
}

export const ProductsContext = createContext<ProductsContextType>({
  dispatch: () => null,
  state: initialState,
})

const rootReducer = (state: InitialStateType, action: ProductActions) =>
  productsReducer(state, action)

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <ProductsContext.Provider value={{ dispatch, state }}>
      {children}
    </ProductsContext.Provider>
  )
}
