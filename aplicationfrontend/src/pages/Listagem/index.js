import React, { useEffect, useState } from 'react'
import api from '../../service/api'
import { Link } from 'react-router-dom'

import Popover from '@material-ui/core/Popover';

export default function Listar() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  {/* FIM - Coisas do MODAL*/ }


  const [funcionario, setFuncionario] = useState([]);
  const [idF, setIdF] = useState('');


  useEffect(() => {
    async function carregarFuncionario() {
      const response = await api.get('/funcionario', {})
        .then(response => {
          document.getElementById("semFuncionario").style.display = "none";
          setFuncionario(response.data);
          setIdF(response.data.id);
        })
        .catch(error => {
          document.getElementById("comFuncionario").style.display = "none";
        });;


    }
    carregarFuncionario();
  }, []);

  async function removerFuncionario() {
    await api.delete('/funcionario', {}, {
      idF
    }).then(response => {
      window.location = '/';
    })
      .catch(error => {
        console.log(error)
      });
  }


  return (
    <>
      <div id="semFuncionario">
        <p>Não há funcionários cadastrados, cadastre um.</p>
        <Link to="/cadastrar">
         <button id="btnCadastrar" className="btn btnGreen">Cadastrar</button>
        </Link>
      </div>

      <div id="comFuncionario">
        <p>Informações do Funcionário</p>
        <ul className="listagemFuncionario">
          <p>Nome: {funcionario.nome}</p>
          <p>{funcionario.sobrenome}</p>
          <p>{funcionario.email}</p>
          <p>{funcionario.numero}</p>
        </ul>


        <div className="inline-buttons">
          <Link to="/editar">
            <button className = "btn btnBlue">Editar</button>
          </Link>
          <button className = "btn btnRed" onClick={handleClick}>Remover</button>
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <button className="btn" onClick={removerFuncionario}>Deseja mesmo remover?</button>
        </Popover>
      </div>

    </>
  )
}