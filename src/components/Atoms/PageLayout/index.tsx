import LogoIcon from 'assets/icons/logo.svg'
import { METADATA } from 'constant'

import styles from './PageLayout.module.css'

interface PageLayoutProps {
  children: React.ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <main className={styles.pageWrapper}>
    <header className={styles.pageHeader}>
      <LogoIcon aria-label={METADATA.name} className={styles.logo} />
    </header>

    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>{children}</div>
    </div>

    <footer className={styles.pageFooter}>
      <div className={styles.pageFooterContainer}>
        <strong>{METADATA.author}</strong> @{new Date().getFullYear()}
      </div>
    </footer>
  </main>
)

export default PageLayout
