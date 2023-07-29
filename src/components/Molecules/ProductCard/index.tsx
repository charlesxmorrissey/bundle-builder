import Image from 'next/image'

import type { Product } from 'types'

import styles from './ProductCard.module.css'

interface ProductCardProps {
  image: Product['image']
  name: Product['name']
  onClickAdd: () => void
  onClickRemove: () => void
}

export const ProductCard = ({
  image,
  name,
  onClickAdd,
  onClickRemove,
}: ProductCardProps) => (
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
      <button onClick={onClickRemove} type='button'>
        Remove
      </button>

      <button onClick={onClickAdd} type='button'>
        Add
      </button>
    </div>
  </div>
)
