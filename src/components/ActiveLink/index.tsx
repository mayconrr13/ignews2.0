import { useRouter } from 'next/dist/client/router'
import Link, { LinkProps } from 'next/link'
import { ReactElement, cloneElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export const ActiveLink = ({ children, activeClassName, ...rest }:ActiveLinkProps) => {
  const { asPath } = useRouter()

  const className = asPath.split('/')[1] === (rest.href).toString().split('/')[1] ? activeClassName : ''

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  )
}
