import ContactUs from '@/app/components/ContactUs'
import AboutUs from '@/app/components/AboutUs'
import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import OurServices from '@/app/components/OurServices'
import Testimonials from '@/app/components/Testimonials'


export default function Homepage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Hero />
      <OurServices />
      <AboutUs />
      <ContactUs />
      <Testimonials />
    </main>
  )
}
