import Image from 'next/image'

import type { BundleItem } from 'types'

import styles from './BundleCard.module.css'

interface BundleCardProps {
  bundleId?: BundleItem['bundleId']
  id?: BundleItem['id']
  image: BundleItem['image']
  name: BundleItem['name']
  onClickRemove: (item: BundleItem) => void
}

export const BundleCard = ({
  bundleId,
  id,
  image,
  name,
  onClickRemove,
}: BundleCardProps) => (
  <div className={styles.card}>
    <div className={styles.cardImageWrapper}>
      <Image
        alt={name}
        className={styles.cardImage}
        height={100}
        src={image}
        width={100}
      />
    </div>

    <h4>{name}</h4>

    {bundleId && (
      <button
        onClick={() => onClickRemove({ bundleId, id, image, name })}
        type='button'
      >
        X
      </button>
    )}
  </div>
)
