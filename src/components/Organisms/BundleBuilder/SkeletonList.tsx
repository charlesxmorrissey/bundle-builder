import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import { SkeletonCard } from 'components/Molecules/ProductCard/SkeletonCard'
import { SKELETON_THEME } from 'constant'

import styles from './BundleBuilder.module.css'

const cardCount = 8
const sectionCount = 2

export const SkeletonList = () => (
  <SkeletonTheme
    baseColor={SKELETON_THEME.baseColor}
    highlightColor={SKELETON_THEME.highlightColor}
  >
    {Array.from({ length: sectionCount }, (_, index) => (
      <div className={styles.sectionWrapper} key={`section-${index}`}>
        <h2 className={styles.sectionTitle}>
          <Skeleton height={24} width={260} />
        </h2>

        <div className={styles.cardWrapper}>
          {Array.from({ length: cardCount }, (_, index) => (
            <SkeletonCard key={`card-${index}`} />
          ))}
        </div>
      </div>
    ))}
  </SkeletonTheme>
)
