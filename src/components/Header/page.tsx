'use client'

import { Fira_Code } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'
import styles from './styles.module.css'

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

  const scrollTo = (path: string) => {
    const element = document.querySelector(path)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className='fixed w-full '>
      <div className={`${styles.content} flex items-center justify-between`}>
        <div
          className={`${styles.logo} items-center flex`}
          onClick={scrollTo.bind(null, '#index')}
        >
          <Image
            priority
            src='/logo.svg'
            width={150}
            height={38}
            alt='lukearch.io'
          />
        </div>
        <div className='hidden lg:flex items-center'>
          {routes.map((route, index) => {
            return (
              <React.Fragment key={index}>
                <div className='mr-8' onClick={scrollTo.bind(null, route.path)}>
                  <span className={`${styles.link} ${firaCode.className}`}>
                    {route.name}
                  </span>
                </div>
              </React.Fragment>
            )
          })}
          <Link href='/resume.pdf' target='_blank'>
            <button className={`${firaCode.className} btn`}>
              Download resume
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
