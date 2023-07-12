"use client"

import ContactUs from '@/app/components/ContactUs'
import AboutUs from '@/app/components/AboutUs'
import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import OurServices from '@/app/components/OurServices'
import Testimonials from '@/app/components/Testimonials'
import './Home.scss';
import { useEffect } from 'react'
import { observerHorizontal, observerVertical } from '@/app/services/IntersectionsObserver'


export default function Homepage() {
  useEffect(() => {
    const hiddenXElements = document.querySelectorAll('.hiddenX');
    hiddenXElements.forEach((el) => observerHorizontal && observerHorizontal.observe(el));
  
    const hiddenYElements = document.querySelectorAll('.hiddenY');
    hiddenYElements.forEach((el) => observerVertical && observerVertical.observe(el));
  }, []);
  

  return (
    <main className="homepage">
      <div className="homepage-headerHero">
        <Header />
        <Hero />
      </div>
      <AboutUs />
      <OurServices />
      <Testimonials />
      <ContactUs />
    </main>
  )
}
