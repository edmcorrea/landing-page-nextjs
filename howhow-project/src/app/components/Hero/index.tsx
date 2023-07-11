'use client'

import Image from "next/image"
import influencersDesk from "@/assets/Hero/heroDash.png"
import notgif from "@/assets/gif.gif"

import './Hero.scss';
import { useGlobalContext } from "@/app/services/Context-API";



export default function Hero() {
  const { company, setCompany } = useGlobalContext();
  return (
    <section className="hero">
      <div className="hero-container">
        <section className="hero-container-info">
          <h1 className="hiddenX">Influenciadores que impulsionam positivamente o seu negócio.</h1>
          <h5 className="hiddenY">
            A Howhow é uma empresa que conecta marcas a influenciadores, encerre longas esperas por campanhas ou e-mails. Nosso sistema centralizado acelera o marketing de influência, potencializando resultados.
          </h5>
          <div className="hero-container-info-btns hiddenY">
            <a href="#services">
              <button
                className={`hero-container-info-btns-btn${company ? '-selected' : ''}`}
                type="button"
                onClick={() => setCompany(true)}
              >
                  Sou Empresa
              </button>
            </a>
            <a href="#services">
              <button
                className={`hero-container-info-btns-btn${!company ? '-selected' : ''}`}
                type="button"
                onClick={() => setCompany(false)}
              >
                  Sou Influenciador
              </button>
            </a>
          </div>
        </section>
        <section>
          <Image
            className="hero-container-img"
            src={influencersDesk}
            alt="influencersDesk"
            priority
          />
        </section>
      </div>
      <div className="hero-gifContainer">
        <a href="#services">
          <Image
            className="hero-gifContainer-gif"
            src={notgif}
            alt="notgif"
            priority
          />
        </a>
      </div>
    </section>
  )
}