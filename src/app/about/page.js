"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import styles from './style.module.scss';
import Image from 'next/image';

export default function About() {
  const triggerRef = useRef(null);

  useEffect(() => {
    let scroll; // Declare here to ensure proper cleanup

    if (triggerRef.current) {
      const settings = {
        trigger: triggerRef.current,
        lerp: 0.05,
        numberOfClones: 8,
        imageWidth: 300, 
        imageHeight: 150, 
      };

      gsap.registerPlugin(ScrollTrigger);

      scroll = new LocomotiveScroll({
        el: triggerRef.current,
        smooth: true,
        lerp: settings.lerp,
      });

      scroll.on('scroll', ScrollTrigger.update);

      const cloneTitle = () => {
        const titleContainer = triggerElement.querySelector('.triggerText');
        const title = titleContainer?.querySelector('.triggerTextTitle'); // Optional chaining for safety

        if (title) {
          for (let i = 0; i < settings.numberOfClones; i++) {
            titleContainer.appendChild(title.cloneNode(true));
          }
        }
      };

      const animateMedia = () => {
        const media = {
          figure: gsap.utils.toArray('.triggerMediaFigure'),
          image: gsap.utils.toArray('.triggerMediaImage'),
        };

        gsap.set(media.image, { yPercent: 101 });
        tlMain.to(media.image, {
          yPercent: 0,
          stagger: 0.08,
        });

        const centerX = window.innerWidth / 2;

        media.figure.forEach((figure) => {
          const figureRect = figure.getBoundingClientRect();
          const figureCenterX = figureRect.x + figureRect.width / 2;
          const distance = centerX - figureCenterX;

          tlMain.to(figure, {
            x: distance,
            duration: 1,
          }, 0) 
            .to(figure, { scale: 5 });
        });
      };

      const animateText = () => {
        const title = {
          words: gsap.utils.toArray('.triggerTextTitleWord'),
          odd: '.triggerTextTitle:nth-child(odd)',
          even: '.triggerTextTitle:nth-child(even)',
        };

        gsap.set(title.words, { autoAlpha: 0 });
        gsap.set(title.words[0], { autoAlpha: 1 });
        gsap.set(title.even, { xPercent: -15 });

        tlMain.to(title.odd, { duration: 4, xPercent: -15 }, 2.5)
              .to(title.even, { duration: 4, xPercent: 0 }, 2.5)
              .to(title.words, {
                duration: 0,
                autoAlpha: 1,
                stagger: {
                  each: 0.2,
                  grid: 'auto',
                  from: 'random',
                },
              }, 2.5);
      };

      cloneTitle();
      animateMedia();
      animateText();
    }
    return () => scroll?.destroy();
  }, []); 

  return (
    <main className={styles.about}>
      <section className={styles.fixed}>
        <span className={styles.fixedItem}>Snype</span>
        <span className={styles.fixedItem}>&#128900</span>
        <span className={styles.fixedItem}>Studios</span>
      </section>

      <section className={styles.trigger}>
        <div className={styles.triggerWrapper}>
          <div className={styles.triggerText}>
            <div className={styles.triggerTextTitle}>
              <h1 className={styles.triggerTextTitleWord}>About</h1>
              <h1 className={styles.triggerTextTitleWord}>About</h1>
              <h1 className={styles.triggerTextTitleWord}>About</h1>
              <h1 className={styles.triggerTextTitleWord}>About</h1>
              <h1 className={styles.triggerTextTitleWord}>About</h1>
            </div>
          </div>

          <div className={styles.triggerMedia}>
            <figure className={styles.triggerMediaFigure}>
              <Image 
              className={styles.triggerMediaImage}
              src='/images/demo-pic01.jpg'
              alt='image'
              height={300}
              width={150}/>
            </figure>
            <figure className={styles.triggerMediaFigure}>
              <Image 
              className={styles.triggerMediaImage}
              src='/images/demo-pic02.jpg'
              alt='image'
              height={300}
              width={150}/>
            </figure>
            <figure className={styles.triggerMediaFigure}>
              <Image 
              className={styles.triggerMediaImage}
              src='/images/demo-pic03.jpg'
              alt='image'
              height={300}
              width={150}/>
            </figure>
            <figure className={styles.triggerMediaFigure}>
              <Image 
              className={styles.triggerMediaImage}
              src='/images/demo-pic04.jpg'
              alt='image'
              height={300}
              width={150}/>
            </figure>            
          </div>
        </div>
      </section>
    </main>
  );
}
