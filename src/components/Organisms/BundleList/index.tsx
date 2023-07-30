import { useEffect, useState } from 'react'

import { Button, ButtonType } from 'components/Atoms/Button'
import { BundleCard } from 'components/Molecules/BundleCard'
import { MAX_BUNDLE_SIZE } from 'constant'
import { useProductsContext } from 'hooks'
import { mockBundle } from 'mocks'
import type { BundleItem } from 'types'
import { pluralize } from 'utils'

import styles from './BundleList.module.css'

interface BundleListProps {
  onClickRemove: (item: BundleItem) => void
}

export const BundleList = ({ onClickRemove }: BundleListProps) => {
  const [buttonText, setButtonText] = useState('')
  const {
    state: { bundle },
  } = useProductsContext()

  useEffect(() => {
    if (bundle.length === MAX_BUNDLE_SIZE) {
      setButtonText('Add to cart')
    } else {
      setButtonText(
        `Choose ${pluralize(
          !bundle.length ? MAX_BUNDLE_SIZE : MAX_BUNDLE_SIZE - bundle.length,
          'product',
        )}`,
      )
    }
  }, [bundle.length])

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

      <Button
        className={styles.bundleAddBtn}
        isDisabled={bundle.length !== MAX_BUNDLE_SIZE}
        type={ButtonType.submit}
      >
        <span>{buttonText}</span>
      </Button>
    </div>
  )
}
