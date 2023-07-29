import { BundleCard } from 'components/Molecules/BundleCard'
import { useProductsContext } from 'hooks'
import { mockBundle } from 'mocks'
import type { BundleItem } from 'types'

import styles from './BundleList.module.css'

interface BundleListProps {
  onClickRemove: (item: BundleItem) => void
}

export const BundleList = ({ onClickRemove }: BundleListProps) => {
  const {
    state: { bundle },
  } = useProductsContext()

  return (
    <div className={styles.bundleList}>
      <h2 className={styles.bundleListTitle}>Build your bundle</h2>

      <div className={styles.bundleListWrapper}>
        {mockBundle.map((item, index) => (
          <BundleCard
            key={`item-${index}`}
            onClickRemove={onClickRemove}
            {...(bundle?.[index] ?? item)}
          />
        ))}
      </div>
    </div>
  )
}
