'use client'

import { useEffect, useState } from "react"

export default function Forms() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [disableBtn, setDisableBtn] = useState(true);


  const handleChange = (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { type, value } = e.currentTarget;
    if (type === 'text') setNome(value);
    if (type === 'email') setEmail(value);
    if (type === 'textarea') setDescription(value);
  };

  // const sendMail = async () => {
  //   try {
  //     const user = await requestLogin('/login', { email, password });
  //     setToken(user.token);
  //     localStorage.setItem('user', JSON.stringify(user));
  //     setUserRoleContext(user);
  //   } catch (_error) {
  //     setError(true);
  //   }
  // };

  useEffect(() => {
    const magicNumber = 3;
    const regexMail = /\S+@\S+\.\S+/;
    if (description.length >= magicNumber && regexMail.test(email)) {
      return setDisableBtn(false);
    }

    return setDisableBtn(true);
  }, [email, description]);

  return (
    
    <section>
      <p className="bg-slate-400">forms</p>
      <form className="profile-edit-info-container">
        <div className="profile-edit-info">
          <section className="profile-edit-info-input">
            <h3>Nome</h3>
            <input
              placeholder="insira o seu nome"
              type="text"
              name="name"
              value={ nome }
              onChange={ handleChange }
            />
          </section>
          <section className="profile-edit-info-input">
            <h3>E-mail</h3>
            <input
              placeholder="Insira o seu e-mail"
              type="email"
              name="email"
              value={ email }
              onChange={ handleChange }

            />
          </section>
          <section className="profile-edit-info-input">
            <h3>Descrição</h3>
            <textarea
              placeholder="Insira a sua mensagem"
              name="description"
              value={ description }
              onChange={ handleChange }

            />
          </section>
        </div>
        <button
          className="profile-edit-btn"
          type="button"
          disabled={ disableBtn }
          // onClick={ sendMail }
        >
          Salvar
        </button>
      </form>
    </section>
  )
}