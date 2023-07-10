import Image from "next/image";
import Carrousel from "./Carrousel";

export default function AboutUs() {
  return (
    <section>
    <p className="bg-slate-400">aboutUs</p>
    <div>
      <section>
        <h2>Um pouco da nossa história</h2>
        <h4>A Howhow reinventa a interação entre marcas e influenciadores. Nossa plataforma centraliza e acelera todas as fases das campanhas de marketing de influência, tornando a colaboração eficiente e eficaz. Com a Howhow, cada conexão conta.
        </h4>
      </section>
      <section className="">
        <h1>+6.916</h1>
        <h5>Campanhas realizadas</h5>
      </section>
      <section className="">
        <h1>+12.400</h1>
        <h5>Influenciadores cadastrados</h5>
      </section>
      <section className="">
        <h1>+62</h1>
        <h5>Empresas cadastradas</h5>
      </section>
    </div>
    <div>
      <h2>
        Mais de 30 marcas globais reconhecidas
      </h2>
      <Carrousel />
    </div>
  </section>

  )
}