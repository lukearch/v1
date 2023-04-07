'use client'

import { Fira_Code } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
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
  const [lastScroll, setLastScroll] = useState(0)
  const [scroll, setScroll] = useState(0)
  const [isScrollingTop, setIsScrollingTop] = useState(false)
  const [aboutY, setAboutY] = useState({
    starts: 0,
    ends: 0,
  })
  const [projectsY, setProjectsY] = useState({
    starts: 0,
    ends: 0,
  })
  const [experienceY, setExperienceY] = useState({
    starts: 0,
    ends: 0,
  })

  const [contactY, setContactY] = useState({
    starts: 0,
    ends: 0,
  })

  const handleScroll = useCallback(() => {
    const currentScroll = window.pageYOffset
    if (currentScroll > 0) {
      setScroll(currentScroll)
      setIsScrollingTop(currentScroll < lastScroll)
    } else {
      setScroll(0)
      setIsScrollingTop(false)
    }
    setLastScroll(currentScroll)
  }, [lastScroll])

  const routes = useMemo(() => {
    return [
      {
        name: 'About',
        path: '#about',
        ref: aboutY,
      },
      {
        name: 'Projects',
        path: '#projects',
        ref: projectsY,
      },
      {
        name: 'Experience',
        path: '#experience',
        ref: experienceY,
      },
      {
        name: 'Contact',
        path: '#contact',
        ref: contactY,
      },
    ]
  }, [aboutY, contactY, experienceY, projectsY])

  const scrollTo = (path: string) => {
    const element = document.querySelector(path)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const aboutElement = document.querySelector('#about') as HTMLElement
    const projectsElement = document.querySelector('#projects') as HTMLElement
    const experienceElement = document.querySelector(
      '#experience',
    ) as HTMLElement
    const contactElement = document.querySelector('#contact') as HTMLElement

    if (aboutElement) {
      setAboutY({
        starts: aboutElement.offsetTop,
        ends: aboutElement.offsetTop + aboutElement.clientHeight,
      })
    }

    if (projectsElement) {
      setProjectsY({
        starts: projectsElement.offsetTop,
        ends: projectsElement.offsetTop + projectsElement.clientHeight,
      })
    }

    if (experienceElement) {
      setExperienceY({
        starts: experienceElement.offsetTop,
        ends: experienceElement.offsetTop + experienceElement.clientHeight,
      })
    }

    if (contactElement) {
      setContactY({
        starts: contactElement.offsetTop,
        ends: contactElement.offsetTop + contactElement.clientHeight,
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <header
      className={`fixed w-full ${scroll > 0 && 'shadow-xl'} ${styles.header} 
        ${scroll > 0 && !isScrollingTop && styles.scrolling}
      `}
    >
      <div className={`${styles.content} flex items-center justify-between`}>
        <div
          className={`${styles.logo} items-center flex`}
          onClick={scrollTo.bind(null, '#index')}
        >
          <Image
            priority
            src='/logo.svg'
            alt='lukearch.io'
            width={150}
            height={38}
            style={{
              width: '9.375rem',
              height: '2.375rem',
            }}
          />
        </div>
        <div className='hidden lg:flex items-center'>
          {routes.map((route, index) => {
            return (
              <React.Fragment key={index}>
                <div className='mr-8' onClick={scrollTo.bind(null, route.path)}>
                  <span
                    className={`${styles.link} ${firaCode.className} ${
                      scroll >= route.ref.starts &&
                      scroll < route.ref.ends &&
                      styles.active
                    }`}
                  >
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
