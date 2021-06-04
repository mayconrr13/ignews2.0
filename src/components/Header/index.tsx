import { useState } from 'react';
import { ActiveLink } from '../ActiveLink'
import { SignInButton } from '../SignInButton'
import styles from './Header.module.scss'

export const Header = () => {
  const [menuIsClosed, setMenuIsClosed] = useState(true);

  return (
    <header className={styles.headerContainer} >
      <img src="/images/react.svg" alt="react"/>
      <div className={styles.headerContent} >
        <img src="/images/logo.svg" alt="ig.news"/>
        <section 
        className={`${styles.headerMenuOptions} ${menuIsClosed && styles.menuClosed}`}
        onClick={() => setMenuIsClosed(true)}
        >
          <nav>
            <ActiveLink activeClassName={styles.active} href="/" >
              <a>Home</a>
            </ActiveLink>
            <ActiveLink activeClassName={styles.active} href="/posts">
              <a>Posts</a>
            </ActiveLink>
          </nav>

          <SignInButton />
        </section>

        <button 
          type="button" 
          onClick={() => setMenuIsClosed(!menuIsClosed)} 
          className={`${styles.burgerMenu} ${!menuIsClosed && styles.menuXForm}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
