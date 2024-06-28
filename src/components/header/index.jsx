'use client'
import styles from './style.module.scss'
import { useState } from 'react'
import Nav from './nav/index'
import { AnimatePresence } from 'framer-motion';

export default function index(){
  const [isActive, setIsActive] = useState(false);

  return (
    <>
    <div className={styles.main}>
      <div className={styles.header}>
        <div onClick={()=>{setIsActive(!isActive)}} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive:""}`}></div>
        </div>
      </div>
    </div>

    <AnimatePresence mode="wait">
        {isActive && <Nav />}
    </AnimatePresence>
    </>
  )
}