"use client"

import Image from "next/image";
import person1 from '@/assets/testimonial/person1.jpg';
import person2 from '@/assets/testimonial/person2.jpg';
import worldMap from '@/assets/testimonial/world-map.jpg';
import worldMapMobile from '@/assets/testimonial/world-map-mobile.jpg';
import './Testimonials.scss';
import { useState } from "react";

export default function Testimonials() {
  const [hover, setHover] = useState('hide');
  return (
    <section className="testimonial">
      <h3 className="hiddenX">Muitas Empresas e Influenciadores já aprovaram a <span>HowHow</span></h3>
      <div className="testimonial-container">
        <Image
          className="testimonial-container-world"
          src={worldMap}
          alt='worldMap'
          priority
          onMouseEnter={() => setHover('show')}
          onMouseLeave={() => setHover('hide')}
        />
        <Image
          className="testimonial-container-world-mobile"
          src={worldMapMobile}
          alt='worldMapMobile'
          priority
          onMouseEnter={() => setHover('show')}
          onMouseLeave={() => setHover('hide')}
        />
        <Image
          className="testimonial-container-person1 hiddenX"
          src={person1}
          alt='person1'
          priority
          onMouseEnter={() => setHover('show')}
          onMouseLeave={() => setHover('hide')}
        />
        <div
          className={`testimonial-container-person1-info-${hover}`}
          onMouseEnter={() => setHover('show')}
          onMouseLeave={() => setHover('hide')}
        >
          <h4>{`"Howhow alavancou minhas vendas em 150%, através de uma influenciadora digital de moda feminina."`}</h4>
        </div>
        <Image
          className="testimonial-container-person2 hiddenX"
          src={person2}
          alt='person2'
          priority
          onMouseEnter={() => setHover('show')}
          onMouseLeave={() => setHover('hide')}
        />
        <div
          className={`testimonial-container-person2-info-${hover}`}
          onMouseEnter={() => setHover('show')}
          onMouseLeave={() => setHover('hide')}
        >
          <h4>{`"Sou influenciador e tive um grande reconhecimento público na área de games."`}</h4>
        </div>
      </div>
    </section>

  )
}