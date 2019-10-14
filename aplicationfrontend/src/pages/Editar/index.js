
import React, { useState, useEffect } from 'react';
import api from '../../service/api';
import { Link } from 'react-router-dom'
import validate from '../../helper/validation';

export default function Editar() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');

  //Popular os campos de edição
  useEffect(() => {
    async function carregarFuncionario() {
      const response = await api.get('/funcionario', {});
      setId(response.data.id);
      setNome(response.data.nome);
      setSobrenome(response.data.sobrenome);
      setEmail(response.data.email);
      setNumero(response.data.numero);
    }
    carregarFuncionario();
  }, []);

  //submissão do form
  async function handleSubmit(event) {
    event.preventDefault();
    validate.handleChangeValidate('nome', nome);
    validate.handleChangeValidate('sobrenome', sobrenome);
    validate.handleChangeValidate('email', email);
    validate.handleChangeValidate('numero', numero);

    await api.put('/funcionario', {
      id, nome, sobrenome, email, numero
    }).then(response => {
      window.location = '/';
    })
      .catch(error => {
        console.log(error)
        //document.getElementById("messagemDaValidação").innerHTML = error.response.data;
      });

  }
  return (
    <>
      <p>Editar Funcionário</p>
      <form onSubmit={handleSubmit}>

        {/* Campo Nome */}
        <label htmlFor="nome">Nome:</label>
        <input required type="text" id="nome" placeholder="Seu nome."
          maxlength="30" minlength="2"
          value={nome}
          onChange={event => setNome(event.target.value)}
        />
        <span className="error-message" id="validateName"></span>

        {/* Campo Sobrenome */}
        <label htmlFor="sobrenome">Sobrenome</label>
        <input required type="text" id="sobrenome" placeholder="Seu sobrenome."
          value={sobrenome}
          maxlength="50" minlength="2"
          onChange={event => setSobrenome(event.target.value)} />
        <span className="error-message" id="validateLastName"></span>
        {/* Campo E-mail */}
        <label htmlFor="email">E-Mail</label>
        <input required type="email" id="email" placeholder="Seu e-mail."
          value={email}
          onChange={event => setEmail(event.target.value)} />
        <span className="error-message" id="validateEmail"></span>
        {/* Campo Numero */}
        <label htmlFor="numero">Número</label>
        <input required id="numero" placeholder="Seu numero."
          value={numero}
          onChange={event => setNumero(event.target.value)} />
        <span className="error-message" id="validateNumber"></span>

        <p className="error-message" id="messagemDaValidação"></p>
        <div className="inline-buttons">
          <button className="btn btnGreen">Confirmar</button>
          <Link to="/">
            <button className="btn">Cancelar</button>
          </Link>
        </div>
      </form>

    </>
  );
}
