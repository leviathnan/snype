'use client';
import React, {useLayoutEffect, useRef } from 'react'
import styles from './style.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function index() {
  const background = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger:{
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end:'+=500px',
      }
    })
    timeline.from(background.current, {clipPath: `inset(15%)`})
    .to(introImage.current, {height: '200px'}, 0)

  }, [])
  return (
    <div className={styles.homeHeader}>
      <div ref={background} className={styles.background}>
        <Image
          src={'/images/demo-pic01.jpg'} 
          fill={true}
          alt='background image'
          priority={true} 
        />
      </div>
      <div className={styles.intro}>
        <div ref={introImage} data-scroll data-scroll-speed='0.3' className={styles.introImage}>
          <Image
            src={'/images/demo-pic02.jpg'} 
            fill={true}
            alt='Intro image'
            priority={true} 
          />
        </div>
        <h1 data-scroll data-scroll-speed='0.7'>Nigga is Nigga</h1>
      </div>
    
    </div>
  )
}
