import type { NextPage } from 'next'
import { useEffect } from 'react'

import { BundleBuilder } from 'components/Organisms/BundleBuilder'
import { useProductsContext } from 'hooks'
import { ProductActionTypes } from 'types'

const ProductsPage: NextPage = () => {
  const { dispatch } = useProductsContext()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/products')
      const productTypes = await response.json()

      dispatch({
        payload: { productTypes },
        type: ProductActionTypes.SetProducts,
      })
    }

    fetchData()
  }, [dispatch])

  return <BundleBuilder />
}

export default ProductsPage
