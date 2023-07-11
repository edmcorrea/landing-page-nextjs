import Image from "next/image";
import Forms from "../Forms";
import './Contact.scss';

export default function ContactUs() {
  return (
    <section id="contact" className="contact">
    <div className="contact-info">
      <section>
        <h2 className="hiddenX">Vamos conversar?</h2>
        <h5 className="hiddenY">Complete o formulário para saber como a Howhow pode ajudar a sua marca a se conectar com influenciadores e alavancar suas campanhas.
        </h5>
      </section>
      <section className="hiddenY">
        <h4>Contato</h4>
        <p>contato@howhow.com</p>
      </section>
      <section className="contact-info-img">
        <Image
          src="https://www.howhow.com.br/logo.svg"
          alt="howhow-logo"
          width={180}
          height={24}
          priority
        />
      </section>
    </div>
    <div className="contact-forms hiddenY">
      <Forms />
    </div>
  </section>

  )
}