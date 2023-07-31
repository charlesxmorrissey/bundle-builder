import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import { LoadingIndicator } from 'components/Atoms/LoadingIndicator'
import { BundleBuilder } from 'components/Organisms/BundleBuilder'
import { useProductsContext } from 'hooks'
import { ProductActionTypes } from 'types'

const ProductsPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  const { dispatch } = useProductsContext()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/products')
      const productTypes = await response.json()

      dispatch({
        payload: { productTypes },
        type: ProductActionTypes.SetProducts,
      })

      setIsLoading(false)
    }

    fetchData()
  }, [dispatch])

  return <>{isLoading ? <LoadingIndicator /> : <BundleBuilder />}</>
}

export default ProductsPage
