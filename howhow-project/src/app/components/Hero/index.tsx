'use client'

import Image from "next/image"
import influencersDesk from "@/assets/Hero/heroDash.png"
import './Hero.scss';



export default function Hero() {
  // FUNÇÃO DE ESCRITA DINAMICA PARA O "h1" => https://www.youtube.com/watch?v=zx2axQoY_YM
  // function typeWriter(elemento: string) {
  //   const textoArray = elemento.innerHTML.split('');
  //   elemento.innerHTML = '';
  //   textoArray.forEach((letra, i) => {
  //     setTimeout(() => elemento.innerHTML += letra, 75 * i);
  //   });
  // }
  return (
    <section className="hero">
      <div className="hero-container">
        <section className="hero-container-info">
          <h1>Influenciadores que impulsionam positivamente o seu negócio.</h1>
          <h5>
            A Howhow é uma empresa que conecta marcas a influenciadores, encerre longas esperas por campanhas ou e-mails. Nosso sistema centralizado acelera o marketing de influência, potencializando resultados.
          </h5>
          <div className="hero-container-info-btns">
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
      <div className="hero-gif">
        <p>Inserir gif</p>
      </div>
    </section>
  )
}