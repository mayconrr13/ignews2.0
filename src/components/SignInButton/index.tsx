import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './SignInButton.module.scss'

export const SignInButton = () => {
  const isSignedIn = false

  return (
    <button className={styles.signInButton} >
      <FaGithub color={isSignedIn ? '#04d361' : '#eba417'}/>
      {isSignedIn ? 'Maycon' : 'Sign in with Github' }
      {isSignedIn && <FiX /> }
    </button>
  )
}
