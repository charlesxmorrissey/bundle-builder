import Image from 'next/image'
import { useMemo } from 'react'

import { MAX_BUNDLE_SIZE } from 'constant'
import { useProductsContext } from 'hooks'
import type { BundleItem, Product } from 'types'
import { getItemById } from 'utils'

import styles from './ProductCard.module.css'

interface ProductCardProps {
  id?: Product['id']
  image: Product['image']
  name: Product['name']
  onClickAdd: () => void
  onClickRemove: (item?: BundleItem) => void
}

export const ProductCard = ({
  id,
  image,
  name,
  onClickAdd,
  onClickRemove,
}: ProductCardProps) => {
  const {
    state: { bundle },
  } = useProductsContext()

  const bundleItem = useMemo(() => getItemById(bundle, id), [id, bundle])

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{name}</h3>

      <div className={styles.cardImageWrapper}>
        <Image
          alt={name}
          className={styles.cardImage}
          height={200}
          src={image}
          width={200}
        />
      </div>

      <div className={styles.cardControls}>
        {!!bundleItem && (
          <button onClick={() => onClickRemove(bundleItem)} type='button'>
            Remove
          </button>
        )}

        <button
          disabled={bundle.length === MAX_BUNDLE_SIZE}
          onClick={onClickAdd}
          type='button'
        >
          Add
        </button>
      </div>
    </div>
  )
}
