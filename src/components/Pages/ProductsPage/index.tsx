import type { NextPage } from 'next'
import { useEffect } from 'react'

import { BundleBuilder } from 'components/Organisms/BundleBuilder'
import { useProductsContext } from 'hooks'
import { ProductActionTypes } from 'types'

import styles from './ProductsPage.module.css'

const ProductsPage: NextPage = () => {
  const { dispatch } = useProductsContext()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/products')
      const results = await response.json()

      dispatch({
        payload: {
          productTypes: results,
        },
        type: ProductActionTypes.SetProducts,
      })
    }

    fetchData()
  }, [dispatch])

  return (
    <div className={styles.page}>
      <BundleBuilder />
    </div>
  )
}

export default ProductsPage
