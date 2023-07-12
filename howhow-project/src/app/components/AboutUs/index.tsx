import Carrousel from "./Carrousel";
import './AboutUs.scss';
import { useEffect, useRef } from "react";

export default function AboutUs() {
  const aboutSectionRef = useRef<HTMLElement>(null);

  function animateCounters() {
    const tempo_intervalo = 5;
    const tempo = 2000;

    document.querySelectorAll('.counter-up').forEach(function(element) {
      const count_to = element.getAttribute('data-countTo');
      if (count_to !== null) {
        let count_to_num = parseInt(count_to);
        let intervalos = tempo / tempo_intervalo;
        let incremento = count_to_num / intervalos;
        let valor = 0;
        let el = element;

        let timer = setInterval(function() {
          if (valor >= count_to_num) {
            valor = count_to_num;
            clearInterval(timer);
          }

          let texto = valor.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
          el.textContent = texto;
          valor += incremento;
        }, tempo_intervalo);
      }
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.unobserve(aboutSectionRef.current!);
      }
    });

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }
  }, []);

  return (
    <section id="about" className="about" ref={aboutSectionRef}>
      <div className="about-company">
        <section className="about-company-info">
          <h3 className="hiddenX">Um pouco da nossa história</h3>
          <h6 className="hiddenY">A Howhow reinventa a interação entre marcas e influenciadores. Nossa plataforma centraliza e acelera todas as fases das campanhas de marketing de influência, tornando a colaboração eficiente e eficaz. Com a Howhow, cada conexão conta.
          </h6>
        </section>
        <section className="about-company-score">
          <div className="hiddenX">
            <section className="about-company-score-details">
              <h1>+</h1>
              <h1 className="counter-up" data-countTo="6916"></h1>
            </section>
            <h6>Campanhas realizadas</h6>
          </div>
          <div className="hiddenX">
            <section className="about-company-score-details">
              <h1>+</h1>
              <h1 className="counter-up" data-countTo="12400"></h1>
            </section>
            <h6>Influenciadores cadastrados</h6>
          </div>
          <div className="hiddenX">
            <section className="about-company-score-details">
              <h1>+</h1>
              <h1 className="counter-up" data-countTo="62"></h1>
            </section>
            <h6>Empresas cadastradas</h6>
          </div>
        </section>
      </div>
      <div className="about-clients">
        <h3 className="hiddenY">
          Mais de 30 marcas globais reconhecidas
        </h3>
        <Carrousel />
      </div>
    </section>
  )
}
