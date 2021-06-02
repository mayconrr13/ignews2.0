import { SignInButton } from '../SignInButton'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.headerContainer} >
      <div className={styles.headerContent} >
        <img src="/images/logo.svg" alt="ig.news"/>
        <nav>
          <a href="/" className={styles.active}>Home</a>
          <a href="/posts">Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}