'use client'

import { Fira_Code } from 'next/font/google'
import styles from './styles.module.css'
import { useRef, useState } from 'react'
import Networks from '../Networks/page'

const firaCode = Fira_Code({
  weight: ['400', '500', '700'],
  preload: true,
  style: 'normal',
  subsets: ['latin'],
  variable: '--fira-code',
  display: 'swap',
})

const HUD = () => {
  const [delay, setDelay] = useState<NodeJS.Timeout>()
  const message = useRef<HTMLDivElement>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)

    copyMessage()
  }

  const copyMessage = () => {
    if (delay === undefined) {
      setTimeout(() => {
        message.current?.classList.add('-translate-y-12')
        setDelay(
          setTimeout(() => {
            message.current?.classList.remove('-translate-y-12')
            setDelay(undefined)
          }, 2000),
        )
      }, 100)
    } else {
      clearTimeout(delay)
      setDelay(
        setTimeout(() => {
          message.current?.classList.remove('-translate-y-12')
          setDelay(undefined)
        }, 2000),
      )
    }
  }

  return (
    <div className='hud hidden lg:flex'>
      <div className='networks flex fixed bottom-0 left-12 flex-col items-center'>
        <Networks onClick={copyToClipboard} />
        <div className={styles.bar}></div>
      </div>
      <div className='email flex fixed bottom-0 right-12 flex-col items-center'>
        <span
          className={`${styles.email} ${firaCode.className} select-none`}
          onClick={e => copyToClipboard(e.currentTarget.innerText)}
        >
          {process.env.NEXT_PUBLIC_EMAIL}
        </span>
        <div className={styles.bar}></div>
      </div>

      <div ref={message} className={`${styles.message}`}>
        <span className={`${firaCode.className}`}>Copied to clipboard</span>
      </div>
    </div>
  )
}

export default HUD
