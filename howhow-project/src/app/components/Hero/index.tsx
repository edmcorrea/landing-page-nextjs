'use client'

import Image from "next/image"
import influencersDesk from "@/assets/Hero/heroDash.png"
import notgif from "@/assets/notgif.png"

import './Hero.scss';



export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <section className="hero-container-info">
          <h1 className="hiddenX">Influenciadores que impulsionam positivamente o seu negócio.</h1>
          <h5 className="hiddenY">
            A Howhow é uma empresa que conecta marcas a influenciadores, encerre longas esperas por campanhas ou e-mails. Nosso sistema centralizado acelera o marketing de influência, potencializando resultados.
          </h5>
          <div className="hero-container-info-btns hiddenY">
            <button
              className="hero-container-info-btns-btn"
              type="button"
              // onClick={sendMail}
            >
              <a href="#services">
                Sou Empresa
              </a>
            </button>
            <button
              className="hero-container-info-btns-btn"
              type="button"
              // onClick={sendMail}
            >
              <a href="#services">
                Sou Influenciador
              </a>
            </button>
          </div>
        </section>
        <section>
          <Image
            src={influencersDesk}
            alt="influencersDesk"
            className="dark:invert"
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