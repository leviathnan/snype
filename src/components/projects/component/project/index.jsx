import React, {useEffect, useRef} from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import { color,motion } from 'framer-motion'
import gsap from 'gsap';

const scaleAnimation ={
  initial: {scale: 0, x:'-50%', y:'-50%'},
  open: {scale: 1, x:'-50%', y:'-50%', transition:{duration: 0.4, ease:[0.76, 0, 0.24, 1]}},
  closed: {scale: 0, x:'-50%', y:'-50%', transition:{duration: 0.4, ease:[0.32, 0, 0.67, 0]}}
};

export default function index({modal, projects}) {
  const {active, index} = modal;
  const container= useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(()=>{
    let moveContainerX = gsap.quickTo(container.current, "left", {duration:0.8, ease:"power3"})
    let moveContainerY = gsap.quickTo(container.current, "top", {duration:0.8, ease:"power3"})

    let moveCursorX = gsap.quickTo(cursor.current, "left", {duration:0.5, ease:"power3"})
    let moveCursorY = gsap.quickTo(cursor.current, "top", {duration:0.5, ease:"power3"})

    let moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {duration:0.45, ease:"power3"})
    let moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {duration:0.45, ease:"power3"})

    window.addEventListener('mousemove', (e)=>{
      const {clientX, clientY} = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveCursorLabelX(clientX);
      moveCursorLabelY(clientY);
    })
  }, [])

  return (
    <>
    <motion.div ref={container} variants={scaleAnimation} initial={"initial"} animate={active? 'open' : 'closed'} className={styles.modalContainer}>
      <div style={{top: index* -100+"%"}} className={styles.modalSlider}>
        {
          projects.map((project, index)=> {
            return <div key={`modal_${index}`} style={{backgroundColor: color}} className={styles.modal}>
              <Image
                src={`/images/${project.src}`}
                width ={300}
                height={0}
                alt='image'
              />
            </div>
          })
        }
      </div>
    </motion.div>
    <motion.div ref={cursor} variants={scaleAnimation} initial={"initial"} animate={active? 'open' : 'closed'} className={styles.cursor}></motion.div>
    <motion.div ref={cursorLabel} variants={scaleAnimation} initial={"initial"} animate={active? 'open' : 'closed'} className={styles.cursorLabel}>View</motion.div>
    </>
  )
}
