import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects  from '../components/Projects'
import Contact from '../components/Contact'
import { useInView } from 'react-intersection-observer'

const Home: NextPage = () => {
  const [section,sectionInView] = useInView({threshold: 0.5})
  return (
    <div className={styles.container}>
      <Hero />
      <Navbar view={sectionInView}/>
      <About />
      <Skills />
      <Projects />
      <Contact  ref={section}/>
    </div>
  )
}

export default Home
