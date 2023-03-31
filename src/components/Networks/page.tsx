import Link from 'next/link'
import LinkedinSVG from './linkedin'
import styles from './styles.module.css'
import GithubSVG from './github'
import InstagramSVG from './instagram'
import DiscordSVG from './discord'

const Networks = (props: { onClick: (text: string) => void }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Link
        href={process.env.NEXT_PUBLIC_GITHUB}
        target='_blank'
        rel='noopener noreferrer'
        className={styles['network-wrapper']}
      >
        <GithubSVG className={styles.network} />
      </Link>
      <Link
        href={process.env.NEXT_PUBLIC_INSTAGRAM}
        target='_blank'
        rel='noopener noreferrer'
        className={styles['network-wrapper']}
      >
        <InstagramSVG className={styles.network} />
      </Link>
      <Link
        href={process.env.NEXT_PUBLIC_LINKEDIN}
        target='_blank'
        rel='noopener noreferrer'
        className={styles['network-wrapper']}
      >
        <LinkedinSVG className={styles.network} />
      </Link>
      <Link
        onClick={() => {
          props.onClick(process.env.NEXT_PUBLIC_DISCORD)
        }}
        href='#'
        className={styles['network-wrapper']}
      >
        <DiscordSVG className={styles.network} />
      </Link>
    </div>
  )
}

export default Networks
