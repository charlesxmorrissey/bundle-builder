import classNames from 'classnames'
import Image from 'next/image'
import { useMemo } from 'react'

import AddIcon from 'assets/icons/add.svg'
import RemoveIcon from 'assets/icons/remove.svg'
import { Button, ButtonVariant } from 'components/Atoms/Button'
import { MAX_BUNDLE_SIZE } from 'constant'
import { useProductsContext } from 'hooks'
import type { BundleItem, Product } from 'types'
import { getItemById, getItemCount } from 'utils'

import styles from './ProductCard.module.css'

interface ProductCardProps {
  id?: Product['id']
  image: Product['image']
  name: Product['name']
  onClickAdd: () => void
  onClickRemove: (item?: BundleItem) => void
  priority?: boolean
}

export const ProductCard = ({
  id,
  image,
  name,
  onClickAdd,
  onClickRemove,
  priority = false,
}: ProductCardProps) => {
  const {
    state: { bundle },
  } = useProductsContext()

  const bundleItem = useMemo(() => getItemById(bundle, id), [id, bundle])
  const bundleCount = useMemo(() => getItemCount(bundle, id), [bundle, id])

  return (
    <div
      className={classNames(styles.card, {
        [styles.cardDisabled]: bundle.length === MAX_BUNDLE_SIZE && !bundleItem,
      })}
    >
      <h3 className={styles.cardTitle}>{name}</h3>

      <div className={styles.cardImageWrapper}>
        <Image
          alt={name}
          className={styles.cardImage}
          height={200}
          priority={priority}
          src={image}
          width={200}
        />
      </div>

      <div className={styles.cardControls}>
        {!!bundleItem && (
          <Button
            onClick={() => onClickRemove(bundleItem)}
            variant={ButtonVariant.roundedSecondary}
          >
            <RemoveIcon
              aria-label='Remove product'
              className={styles.cardBtnIcon}
            />
          </Button>
        )}

        {!!bundleCount && (
          <span className={styles.cardCount}>{bundleCount}</span>
        )}

        <Button
          isDisabled={bundle.length === MAX_BUNDLE_SIZE}
          onClick={onClickAdd}
          variant={ButtonVariant.rounded}
        >
          <AddIcon aria-label='Add product' className={styles.cardBtnIcon} />
        </Button>
      </div>
    </div>
  )
}
