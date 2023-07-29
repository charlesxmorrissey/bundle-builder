import { Dispatch } from 'react'

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { payload: M[Key]; type: Key }
}

interface ProductPayload {
  [ProductActionTypes.AddProduct]: InitialStateType
  [ProductActionTypes.RemoveProduct]: InitialStateType
  [ProductActionTypes.SetProducts]: InitialStateType
}

export interface Product {
  id: string
  image: string
  name: string
}

export interface BundleItem extends Product {
  bundleId?: string
}

export interface ProductTypes {
  id: string
  products: Product[]
  type: string
}

export enum ProductActionTypes {
  AddProduct = 'ADD_PRODUCT',
  RemoveProduct = 'REMOVE_PRODUCT',
  SetProducts = 'SET_PRODUCTS',
}

export type InitialStateType = {
  bundle?: BundleItem[]
  bundleItem?: BundleItem | null
  productTypes?: ProductTypes[]
}

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>]

export interface ProductsContextType {
  dispatch: Dispatch<ProductActions>
  state: InitialStateType
}
