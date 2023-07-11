import Forms from "../Forms";
import './Contact.scss';

export default function ContactUs() {
  return (
    <section id="contact" className="contact">
    <div className="contact-info">
      <section>
        <h2>Vamos conversar?</h2>
        <h5>Complete o formulário para saber como a Howhow pode ajudar a sua marca a se conectar com influenciadores e alavancar suas campanhas.
        </h5>
      </section>
      <section className="">
        <h4>Contato</h4>
        <h4>contato@howhow.com</h4>
      </section>
    </div>
    <div className="contact-forms">
      <Forms />
    </div>
  </section>

  )
}