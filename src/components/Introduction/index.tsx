'use client'

import { Fira_Code, Outfit } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import WordSwiper from '../WordSwiper'
import styles from './styles.module.css'

const outfit = Outfit({
  weight: ['400', '500', '600', '700'],
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

const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const Introduction = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div
      id='index'
      className={`transition-opacity opacity-0 w-full h-screen flex items-center justify-center ${
        isMounted && 'opacity-100'
      }`}
    >
      <div className='max-w-4xl w-full flex flex-col'>
        <p style={firaCode.style} className='text-cyan-400 ml-1 mb-4'>
          Hi, my name is
        </p>
        <h1 style={outfit.style} className={styles.title}>
          Lucas Larangeira.
        </h1>
        <h1 style={outfit.style} className={styles.subtitle}>
          <span className='mr-3 flex'>
            I build things with{' '}
            <WordSwiper
              options={{
                words: [
                  {
                    text: 'TypeScript',
                    href: 'https://www.typescriptlang.org',
                  },
                  {
                    text: 'NodeJS',
                    href: 'https://nodejs.org',
                  },
                  {
                    text: 'ReactJS',
                    href: 'https://reactjs.org',
                  },
                  {
                    text: 'NextJS',
                    href: 'https://nextjs.org',
                  },
                  {
                    text: 'Spring',
                    href: 'https://spring.io/projects/spring-boot',
                  },
                ],
              }}
            />
          </span>
        </h1>
        <p style={outfit.style} className={styles.description}>
          {"I'm"} a software engineer specializing in building and designing
          webapps with powerful digital experiences. Currently, {"I'm"} focused
          on building microservices with NodeJS at{' '}
          <Link
            className='text-cyan-400'
            href='https://www.meuvidraceiro.com.br'
            target='_blank'
          >
            MeuVidraceiro
          </Link>{' '}
          company.
        </p>
        <button
          onClick={scrollTo.bind(null, 'contact')}
          className='btn w-fit mt-10'
          style={firaCode.style}
        >
          Get in touch!
        </button>
      </div>
    </div>
  )
}

export default Introduction
