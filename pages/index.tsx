import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
