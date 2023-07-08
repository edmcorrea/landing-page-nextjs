import AboutUs from '../../components/AboutUs'
import Forms from '../../components/Forms'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import OurServices from '../../components/OurServices'
import Testimonials from '../../components/Testimonials'


export default function Homepage() {
  return (
    <body className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Hero />
      <OurServices />
      <AboutUs />
      <Forms />
      <Testimonials />
    </body>
  )
}
