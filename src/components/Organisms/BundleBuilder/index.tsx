import { memo, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ProductCard } from 'components/Molecules/ProductCard'
import { BundleList } from 'components/Organisms/BundleList'
import { useProductsContext } from 'hooks'
import { Product, ProductActionTypes } from 'types'
import type { BundleItem } from 'types'

import styles from './BundleBuilder.module.css'
import { SkeletonList } from './SkeletonList'

const MemoizedProductCard = memo(ProductCard)

export const BundleBuilder = () => {
  const {
    dispatch,
    state: { isLoading, productTypes },
  } = useProductsContext()

  const handleAddProductToBundle = (product: Product) => {
    dispatch({
      payload: {
        bundleItem: { bundleId: uuidv4(), ...product },
      },
      type: ProductActionTypes.AddProduct,
    })
  }

  const handleRemoveProductFromBundle = useCallback(
    (bundleItem?: BundleItem) => {
      if (!bundleItem) {
        return
      }

      dispatch({
        payload: { bundleItem },
        type: ProductActionTypes.RemoveProduct,
      })
    },
    [dispatch],
  )

  return (
    <div className={styles.wrapper}>
      <section className={styles.productsColumn}>
        {!isLoading && !!productTypes?.length ? (
          productTypes.map(({ id, products, type }) => (
            <div className={styles.sectionWrapper} key={id}>
              <h2 className={styles.sectionTitle}>{type}</h2>

              {!!products.length && (
                <div className={styles.cardWrapper}>
                  {products.map((product, index) => (
                    <MemoizedProductCard
                      key={product.id}
                      onClickAdd={() => handleAddProductToBundle(product)}
                      onClickRemove={handleRemoveProductFromBundle}
                      priority={!!(index <= 2)}
                      {...product}
                    />
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <SkeletonList />
        )}
      </section>

      <section className={styles.bundleColumn}>
        <BundleList onClickRemove={handleRemoveProductFromBundle} />
      </section>
    </div>
  )
}
