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
        // @ts-ignore
        bundle: [...state.bundle, payload.bundleItem],
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

    case ProductActionTypes.SetProducts:
      return { ...state, productTypes: payload.productTypes }

    default:
      return state
  }
}
