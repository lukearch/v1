'use client'

import { Fira_Code } from 'next/font/google'
import styles from './styles.module.css'
import { useEffect, useRef, useState } from 'react'
import Networks from '../Networks'

const firaCode = Fira_Code({
  weight: ['400', '500', '700'],
  preload: true,
  style: 'normal',
  subsets: ['latin'],
  variable: '--fira-code',
  display: 'swap',
})

const HUD = () => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false)
  const [showCopyMessage, setShowCopyMessage] = useState<boolean>(false)
  const [copyMessageTimeout, setCopyMessageTimeout] = useState<NodeJS.Timeout>()
  const message = useRef<HTMLDivElement>(null)

  const copyToClipboard = (text: string) => {
    if (!showCopyMessage) {
      setShowCopyMessage(true)
      navigator.clipboard.writeText(text)
      setCopyMessageTimeout(
        setTimeout(() => {
          setShowCopyMessage(false)
        }, 2000),
      )
    } else {
      clearTimeout(copyMessageTimeout)
      setCopyMessageTimeout(
        setTimeout(() => {
          setShowCopyMessage(false)
        }, 2000),
      )
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollTop(true)
    } else {
      setShowScrollTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`${styles.hud} hidden lg:flex`}>
      <div className='networks flex fixed bottom-0 left-12 flex-col items-center'>
        <Networks onClick={copyToClipboard} />
        <div className={styles.bar}></div>
      </div>
      <div className='email flex fixed bottom-0 right-12 flex-col items-center'>
        <span
          className={`${styles.email} ${firaCode.className} select-none`}
          onClick={copyToClipboard.bind(null, process.env.NEXT_PUBLIC_EMAIL)}
        >
          {process.env.NEXT_PUBLIC_EMAIL}
        </span>
        <div className={styles.bar}></div>
      </div>

      <div
        ref={message}
        className={`${styles.message} ${
          showCopyMessage ? styles.show : styles.hidden
        }`}
      >
        <span className={`${firaCode.className} `}>Copied to clipboard</span>
      </div>

      <div
        className={`${styles['scroll-top']} ${
          showScrollTop ? styles.show : styles.hidden
        }`}
        onClick={scrollTop}
      >
        <span className={firaCode.className}>{'->'}</span>
      </div>
    </div>
  )
}

export default HUD
