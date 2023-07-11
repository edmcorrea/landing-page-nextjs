import Carrousel from "./Carrousel";
import './AboutUs.scss';

export default function AboutUs() {
  return (
    <section id="about" className="about">
      <div className="about-company">
        <section className="about-company-info">
          <h3>Um pouco da nossa história</h3>
          <h6>A Howhow reinventa a interação entre marcas e influenciadores. Nossa plataforma centraliza e acelera todas as fases das campanhas de marketing de influência, tornando a colaboração eficiente e eficaz. Com a Howhow, cada conexão conta.
          </h6>
        </section>
        <section className="about-company-score">
          <div>
            <h1>+6.916</h1>
            <h6>Campanhas realizadas</h6>
          </div>
          <div className="">
            <h1>+12.400</h1>
            <h6>Influenciadores cadastrados</h6>
          </div>
          <div className="">
            <h1>+62</h1>
            <h6>Empresas cadastradas</h6>
          </div>
        </section>
      </div>
      <div className="about-clients">
        <h3>
          Mais de 30 marcas globais reconhecidas
        </h3>
        <Carrousel />
      </div>
    </section>

  )
}