declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    PUBLIC_URL: string
    NEXT_PUBLIC_EMAIL: string
    NEXT_PUBLIC_GITHUB: string
    NEXT_PUBLIC_LINKEDIN: string
    NEXT_PUBLIC_DISCORD: string
    NEXT_PUBLIC_INSTAGRAM: string
  }
}
