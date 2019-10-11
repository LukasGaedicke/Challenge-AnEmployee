
import React, {useState} from 'react';
import api from '../../service/api';

export default function Listar() {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  
  async function handleSubmit(event) {
    
    //não atualizar a página
    event.preventDefault();

   
        const resposta = await api.post('/funcionario', {
          nome, sobrenome, email, numero
        }).then(response => { 
          console.log(response)
        })
        .catch(error => {
          let errorRes =  error.response.data;
          document.getElementById("messagemDaValidação").innerHTML = errorRes;
        });

  }


    return (
        <>
        <p>Faça se cadastro agora mesmo.</p>
        <form onSubmit = {handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input required type="text" id = "nome" placeholder="Seu nome." 
          maxlength="30" minlength="2"
          onChange = {event => setNome(event.target.value)}/>
          
          <label htmlFor="sobrenome">Sobrenome</label>
          <input required type="text" id = "sobrenome" placeholder="Seu sobrenome."
           //value = 'Wick' 
           maxlength="50" minlength="2"
           onChange = {event => setSobrenome(event.target.value)}/>

          <label htmlFor="email">E-Mail</label>
          <input required type="email" id = "email" placeholder="Seu e-mail."
           //value = {email}
           //value = 'dsadsa@gmail.com'
           onChange = {event => setEmail(event.target.value)}/>

          <label htmlFor="numero">Número</label>
          <input required id = "numero" placeholder="Seu numero."
           //value = '123'
           onChange = {event => setNumero(event.target.value)}/>
          <p id="messagemDaValidação"></p>
          <button className="btn">Registrar</button>
         
        </form>
        </>
    );
}
