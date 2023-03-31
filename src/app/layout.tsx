import HUD from '@/components/HUD/page'
import Header from '@/components/Header/page'
import '../styles/globals.css'

export const metadata = {
  title: 'Lucas Larangeira',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='pt-BR'>
      <body className='relative overflow-x-hidden'>
        <main>
          <Header />
          {children}
          <HUD />
        </main>
      </body>
    </html>
  )
}

export default RootLayout
