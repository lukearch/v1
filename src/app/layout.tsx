import './styles/globals.css'

export const metadata = {
  title: 'Lucas Larangeira',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='pt-BR'>
      <body className='relative'>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
