// import { useState } from 'react'

import { BundleCard } from 'components/Molecules/BundleCard'
import { useProductsContext } from 'hooks'
import { mockBundle } from 'mocks'

import styles from './BundleList.module.css'

const placeholders = mockBundle

export const BundleList = () => {
  const { state } = useProductsContext()
  const { bundle } = state

  console.log('BundleList::', bundle)

  return (
    <div className={styles.bundleList}>
      {placeholders.map((item, index) => {
        const props = bundle?.[index] ? bundle?.[index] : item

        return <BundleCard key={`item-${index}`} {...props} />
      })}
    </div>
  )
}
