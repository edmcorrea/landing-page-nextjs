import Image from "next/image";
import InfluencerDesk from '@/assets/influencersDesk.png';
import InfluencerMobile from '@/assets/influencersMobile.png';


export default function Testimonials() {
  return (
    <section>
      <p className="bg-slate-400">testimonials</p>
        <Image
          src={InfluencerDesk}
          alt='InfluencerDesk'
          priority
        />
        <Image
          src={InfluencerMobile}
          alt='InfluencerMobile'
          priority
        />
    </section>

  )
}