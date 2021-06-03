import { signIn, signOut, useSession } from 'next-auth/client'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './SignInButton.module.scss'

export const SignInButton = () => {
  const [session] = useSession()
  // console.log(session)

  return session ? (
    <button 
      className={styles.signInButton} 
      onClick={() => signOut()} 
    >
      <FaGithub color='#04d361'/>

      {session.user.name}
      
      <FiX />
    </button>
  ) : (
    <button 
      className={styles.signInButton} 
      onClick={() => signIn('github')} 
    >
      <FaGithub color='#eba417'/>

      <span>Sign In with GitHub</span>
    </button>
  )
}
