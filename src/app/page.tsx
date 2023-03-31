import About from '@/components/About/page'
import Contact from '@/components/Contact/page'
import Experience from '@/components/Experience/page'
import Introduction from '@/components/Introduction/page'
import Projects from '@/components/Projects/page'

const Home = () => {
  return (
    <>
      <Introduction />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}

export default Home
