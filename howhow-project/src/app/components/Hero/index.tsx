'use client'

import Image from "next/image"


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
    <div className="">
      <p className="bg-slate-400">hero</p>
      <Image
        src="https://www.amigoconstrutor.com.br/on/demandware.static/Sites-amigoConstrutor-Site/-/default/dw69cf4fbe/images/logo/logo_preferential.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      <h1>Influenciadores influenciando positivamente o seu negócio</h1>
      <h3>
        A Howhow é uma empresa que conecta marcas a influenciadores, encerre longas esperas por campanhas ou e-mails. Nosso sistema centralizado acelera o marketing de influência, potencializando resultados.
      </h3>
    </div>
  )
}