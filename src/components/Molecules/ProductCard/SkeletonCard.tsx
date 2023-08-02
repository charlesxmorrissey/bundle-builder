import classNames from 'classnames'
import Skeleton from 'react-loading-skeleton'

import styles from './ProductCard.module.css'

export const SkeletonCard = () => (
  <div className={styles.card}>
    <h3 className={styles.cardTitle}>
      <Skeleton inline width={100} />
    </h3>

    <div
      className={classNames(
        styles.cardImageWrapper,
        styles.cardImageWrapperLoading,
      )}
    >
      <Skeleton height='100%' width={60} />
    </div>

    <div className={styles.cardControls}>
      <Skeleton circle height={32} width={32} />
    </div>
  </div>
)
