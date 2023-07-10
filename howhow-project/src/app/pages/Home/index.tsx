import ContactUs from '@/app/components/ContactUs'
import AboutUs from '@/app/components/AboutUs'
import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import OurServices from '@/app/components/OurServices'
import Testimonials from '@/app/components/Testimonials'
import './Home.scss';


export default function Homepage() {
  return (
    <main className="homepage">
      <div className="homepage-headerHero">
        <Header />
        <Hero />
      </div>
      <OurServices />
      <AboutUs />
      <ContactUs />
      <Testimonials />
    </main>
  )
}
