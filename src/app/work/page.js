'use client'
import { useEffect } from 'react';
import styles from './style.module.scss'
import Intro from './components/intro'

export default function Work() {

  useEffect(() => {
    (
      async ()=>{
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )
  
  }, [])
  
  return (
    <main className={styles.main}>
      <Intro />
    </main>
  )
}
