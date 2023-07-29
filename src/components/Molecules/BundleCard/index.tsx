import classNames from 'classnames'
import Image from 'next/image'

import RemoveIcon from 'assets/icons/close.svg'
import { Button, ButtonVariant } from 'components/Atoms/Button'
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
}: BundleCardProps) => {
  const isPlaceholder = !bundleId

  return (
    <div className={styles.card}>
      <div
        className={classNames(styles.cardImageWrapper, {
          [styles.cardPlaceholderImageWrapper]: isPlaceholder,
        })}
      >
        <Image
          alt={name}
          className={styles.cardImage}
          height={100}
          src={image}
          width={100}
        />
      </div>

      <h4
        className={classNames(styles.cardTitle, {
          [styles.cardTitlePlaceholder]: isPlaceholder,
        })}
      >
        {name}
      </h4>

      {!isPlaceholder && (
        <Button
          className={styles.cardBtn}
          onClick={() => onClickRemove({ bundleId, id, image, name })}
          variant={ButtonVariant.unstyled}
        >
          <RemoveIcon className={styles.cardIcon} />
        </Button>
      )}
    </div>
  )
}
