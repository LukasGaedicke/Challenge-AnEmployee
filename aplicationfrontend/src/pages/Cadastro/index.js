
import React, { useState } from 'react';
import api from '../../service/api';
import { Link } from 'react-router-dom'
import validate from '../../helper/validation';

export default function Listar() {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');

  async function handleSubmit(event) {

    //não atualizar a página
    event.preventDefault();
    
    validate.handleChangeValidate('nome', nome);
    validate.handleChangeValidate('sobrenome',sobrenome);
    validate.handleChangeValidate('email', email);
    validate.handleChangeValidate('numero', numero);

    if (validate.authorizeSumbit()) {
      console.log(nome);
      await api.post('/funcionario', {
        nome, sobrenome, email, numero
      }).then(response => {
        console.log(response)
        window.location = '/';

      })
        .catch(error => {
          console.log(error)
          document.getElementById("messagemDaValidaçao").innerHTML = "Já existe um funcionário cadastrado.";
        });
    } else {
      document.getElementById("messagemDaValidaçao").innerHTML = "Erro ao submeter o formulário.";

    }

  }

  return (
    <>

      <p>Inseria suas dados abaixo.</p>

      <form onSubmit={handleSubmit}>

        <label htmlFor="nome">Nome:</label>
        <input maxlength="30" type="text" name="nome" id="nome" placeholder="Digite seu nome. (2 a 30 letras)"
          onChange={event => setNome(event.target.value)} />
        <span className="error-message" id="validateName"></span>

        <label htmlFor="sobrenome">Sobrenome:</label>
        <input maxlength="50" type="text" id="sobrenome" name="sobrenome" placeholder="Seu sobrenome."
          onChange={ event => setSobrenome(event.target.value)} />
        <span className="error-message" id="validateLastName"></span>

        <label htmlFor="email">E-Mail:</label>
        <input id="email" name="email" placeholder="Seu e-mail."
          onChange={ event => setEmail(event.target.value)} />
        <span className="error-message" id="validateEmail"></span>

        <label htmlFor="numero">Número:</label>
        <input id="numero" name="numero" placeholder="Seu numero."
          onChange={event => setNumero(event.target.value)} />
        <span className="error-message" id="validateNumber"></span>

        <p className="error-message" id="messagemDaValidaçao"></p>
        <div className="inline-buttons">
          <button className="btn">Registrar</button>
          <Link to="/">
            <button className="btn">Voltar</button>
          </Link>
        </div>
      </form>

    </>
  );
}
