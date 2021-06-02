import { signIn, signOut, useSession } from 'next-auth/client'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './SignInButton.module.scss'

export const SignInButton = () => {
  const [session] = useSession()
  // console.log(session)

  return (
    <button 
      className={styles.signInButton} 
      onClick={() => session ? signOut() : signIn('github')} 
    >
      <FaGithub color={session ? '#04d361' : '#eba417'}/>
      {session ? session.user.name : 'Sign in with Github' }
      {session && <FiX /> }
    </button>
  )
}
