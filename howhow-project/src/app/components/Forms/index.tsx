'use client'

import { requestMail } from "@/app/services/RequestMail/index.";
import { useEffect, useState } from "react";

export default function Forms() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    description: "",
  });
  const [disableBtn, setDisableBtn] = useState(true);

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.currentTarget;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const sendMail = async () => {
    const { nome, email, description } = form;
    const html = `Name: ${nome} **** \nEmail: ${email} **** \nDescription: ${description}`;

    try {
      await requestMail("/contact", { html });
      setForm({
        nome: "",
        email: "",
        description: "",
      });
    } catch (_error) {
      setError(true);
    }
  };

  useEffect(() => {
    const magicNumber = 3;
    const regexMail = /\S+@\S+\.\S+/;
    const { email, description } = form;
    if (description.length >= magicNumber && regexMail.test(email)) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [form]);

  return (
    <form className="forms">
      <div>
      <h5>Contato</h5>
      <h6>Digite as informações necessárias abaixo.</h6>
      </div>
      <div className="forms-inputs">
        <section className="forms-inputs-containerInput">
          <h6>Nome</h6>
          <input
            placeholder="Insira o seu nome"
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className="forms-inputs-containerInput-input"
          />
        </section>
        <section className="forms-inputs-containerInput">
          <h6>E-mail</h6>
          <input
            className="forms-inputs-containerInput-input"
            placeholder="Insira o seu e-mail"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </section>
        <section className="forms-inputs-containerInput">
          <h6>Descrição</h6>
          <textarea
            className="forms-inputs-containerInput-txtarea"
            placeholder="Insira a sua mensagem"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </section>
      </div>
      <button
        className="forms-btn"
        type="button"
        disabled={disableBtn}
        onClick={sendMail}
      >
        Enviar Mensagem
      </button>
    </form>
  );
}

function setError(arg0: boolean) {
  throw new Error("Function not implemented.");
}
