import React, { useMemo } from 'react'
import styles from './styles.module.css'
import fonts from '../../styles/fonts.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Outfit, Fira_Code } from 'next/font/google'

const outfit = Outfit({
  weight: ['400', '500', '700', '800'],
  preload: true,
  style: 'normal',
  subsets: ['latin'],
  variable: '--outfit',
  display: 'swap',
})

const firaCode = Fira_Code({
  weight: ['400', '500', '700'],
  preload: true,
  style: 'normal',
  subsets: ['latin'],
  variable: '--fira-code',
  display: 'swap',
})

const Header = () => {
  const routes = useMemo(() => {
    return [
      {
        name: 'About',
        path: '#about',
        exact: true,
      },
      {
        name: 'Projects',
        path: '#projects',
        exact: true,
      },
      {
        name: 'Experience',
        path: '#experience',
        exact: true,
      },
      {
        name: 'Contact',
        path: '#contact',
        exact: true,
      },
    ]
  }, [])

  const withZero = (num: number) => {
    return num < 10 ? `0${num}` : num
  }

  return (
    <header className={''}>
      <div className={`${styles.content} flex items-center justify-between`}>
        <div className='flex'>
          <Image
            priority
            src='/logo.svg'
            width={150}
            height={30}
            alt='lukearch.io'
          />
        </div>
        <div className='flex items-center'>
          {routes.map((route, index) => {
            return (
              <React.Fragment key={index}>
                <Link className='mr-8' href={route.path}>
                  <span
                    className={`${styles.link} ${firaCode.className}`}
                    data-index={`${withZero(index + 1)}.`}
                  >
                    {route.name}
                  </span>
                </Link>
              </React.Fragment>
            )
          })}
          <button className={`${firaCode.className} btn`}>Resume</button>
        </div>
      </div>
    </header>
  )
}

export default Header
