'use client';
import React, { useEffect, useState } from 'react';
import Landing from "../components/landing";
import Projects from '../components/projects';
import Description from "../components/description";
import SlidingGallery from '../components/slidingGallery';
import Footer from '../components/footer';
import Preloader from '../components/preloader'
import { AnimatePresence } from 'framer-motion';


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async()=>{
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0,0);
        }, 2000);
      }
    )()
  }, [])


  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingGallery />
      <Footer/>
    </main>
  )
}
