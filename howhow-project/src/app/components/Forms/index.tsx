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
    const html = `Name: ${nome} \nEmail: ${email} \nDescription: ${description}`;

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
    <section>
      <form className="profile-edit-info-container">
        <div className="profile-edit-info">
          <section className="profile-edit-info-input">
            <h3>Nome</h3>
            <input
              placeholder="insira o seu nome"
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
            />
          </section>
          <section className="profile-edit-info-input">
            <h3>E-mail</h3>
            <input
              placeholder="Insira o seu e-mail"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </section>
          <section className="profile-edit-info-input">
            <h3>Descrição</h3>
            <textarea
              placeholder="Insira a sua mensagem"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </section>
        </div>
        <button
          className="profile-edit-btn"
          type="button"
          disabled={disableBtn}
          onClick={sendMail}
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
}

function setError(arg0: boolean) {
  throw new Error("Function not implemented.");
}
