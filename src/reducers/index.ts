import { InitialStateType, ProductActionTypes, ProductActions } from 'types'

export const productsReducer = (
  state: InitialStateType,
  action: ProductActions,
): InitialStateType => {
  const { payload, type } = action

  switch (type) {
    case ProductActionTypes.AddProduct:
      const { bundleItem } = payload

      return {
        ...state,
        bundle: bundleItem ? [...state.bundle, bundleItem] : state.bundle,
        bundleItem,
      }

    case ProductActionTypes.RemoveProduct:
      return {
        ...state,
        bundle: [
          ...state?.bundle?.filter(
            (item) => item.bundleId !== payload?.bundleItem?.bundleId,
          ),
        ],
      }

    case ProductActionTypes.RequestProducts:
      const { isLoading } = payload

      return {
        ...state,
        isLoading,
      }

    case ProductActionTypes.SetProducts:
      const { productTypes } = payload

      return {
        ...state,
        isLoading: false,
        productTypes,
      }

    default:
      return state
  }
}
