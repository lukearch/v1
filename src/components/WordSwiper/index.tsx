'use client'

import Link from 'next/link'
import React, {
  HTMLProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

type Options = {
  words: {
    text: string
    href?: string
  }[]
}

const WordSwiper = ({
  options,
  props,
}: {
  options: Options
  props?: HTMLProps<HTMLDivElement>
}) => {
  const swiperRef = React.useRef<HTMLDivElement>(null)
  const [previousWord, setPreviousWord] = useState(0)
  const [activeWord, setActiveWord] = useState(0)
  const [nextWord, setNextWord] = useState(0)
  const [loopInterval, setLoopInterval] = useState<NodeJS.Timeout>()
  const [maxBounds, setMaxBounds] = useState({
    width: 0,
    height: 0,
  })
  const [words, setWords] = useState<Word[]>(
    options.words.map((word, index) => {
      return {
        text: word.text,
        href: word.href,
      }
    }),
  )

  const getBounds = useCallback(
    (element: HTMLElement) => {
      const bounds = element.getBoundingClientRect()

      console.log(bounds, element)

      setMaxBounds(() => {
        return {
          width:
            bounds.width > maxBounds.width ? bounds.width : maxBounds.width,
          height:
            bounds.height > maxBounds.height ? bounds.height : maxBounds.height,
        }
      })

      if (swiperRef.current) {
        swiperRef.current.style.height = `${maxBounds.height / 16}rem`
        swiperRef.current.style.width = `${maxBounds.width / 16}rem`
      }
    },
    [maxBounds.height, maxBounds.width],
  )

  const hasNextWord = useCallback(() => {
    return activeWord < words.length - 1
  }, [activeWord, words.length])

  const hasPreviousWord = useCallback(() => {
    return activeWord > 0
  }, [activeWord])

  const handleLoop = useCallback(() => {
    if (hasNextWord()) {
      setNextWord(activeWord + 1)
    } else {
      setNextWord(0)
    }

    if (hasPreviousWord()) {
      setPreviousWord(activeWord - 1)
    } else {
      setPreviousWord(words.length - 1)
    }

    setActiveWord(nextWord)
    console.log('oi')
  }, [activeWord, hasNextWord, hasPreviousWord, nextWord, words.length])

  const startLoop = useCallback(() => {
    setActiveWord(0)
    setPreviousWord(0)
    setNextWord(0)

    setInterval(handleLoop, 3000)
  }, [handleLoop])

  useEffect(() => {
    for (let i = 0; i < words.length; i++) {
      const word = document.getElementById(`word-${i}`)

      if (word) {
        getBounds(word)
      }
    }
  }, [getBounds, words.length])

  return (
    <div ref={swiperRef} className='flex relative overflow-hidden'>
      {words.map((word, index) => {
        return (
          <React.Fragment key={index}>
            <span
              id={`word-${index}`}
              className={`absolute left-0 bottom-0 duration-300 ${
                (previousWord === index && 'translate-y-full opacity-0') ||
                (nextWord === index && '-translate-y-full opacity-0') ||
                (activeWord === index && 'translate-y-0')
              }`}
            >
              {(word.href && (
                <Link href={word.href} target='_blank'>
                  <span className='hover:text-cyan-400 transition-colors'>
                    {word.text}
                  </span>
                </Link>
              )) || <>{word.text}</>}
            </span>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default WordSwiper
