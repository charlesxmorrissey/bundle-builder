import { InitialStateType, ProductActionTypes, ProductActions } from 'types'

export const productsReducer = (
  state: InitialStateType,
  action: ProductActions,
): InitialStateType => {
  const { payload, type } = action

  switch (type) {
    case ProductActionTypes.AddProduct:
      return {
        ...state,
        bundle: payload.bundleItem
          ? [...state.bundle, payload.bundleItem]
          : state.bundle,
        bundleItem: payload.bundleItem,
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
      return {
        ...state,
        isLoading: payload.isLoading,
      }

    case ProductActionTypes.SetProducts:
      return {
        ...state,
        isLoading: false,
        productTypes: payload.productTypes,
      }

    default:
      return state
  }
}
