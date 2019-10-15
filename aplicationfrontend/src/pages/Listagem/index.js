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



  const [funcionario, setFuncionario] = useState([]);
  const [idF, setIdF] = useState('');


  useEffect(() => {
    async function carregarFuncionario() {
      const response = await api.get('/funcionario', {})
        .then(response => {
          document.getElementById("comFuncionario").style.display= "block"
          setFuncionario(response.data);
          setIdF(response.data.id);
        })
        .catch(error => {
          document.getElementById("semFuncionario").style.display= "block"
        });;


    }
    carregarFuncionario();
  }, []);

  async function removerFuncionario() {
    await api.delete('/funcionario/'+idF, {
    }).then(response => {
      window.location = '/';
    })
      .catch(error => {
        console.log(error)
      });
  }


  return (
    <>

      <div id="semFuncionario" hidden>
        <p>O funcionário não está cadastrado.</p>
        <hr/>
        <center>
          <Link to="/cadastrar">
            <button id="btnCadastrar" className="btn btnGreen">Cadastrar</button>
          </Link>
        </center>
      </div>


      <div id="comFuncionario" hidden>

        <p>Informações do Funcionário</p>
        <hr/>
        <center>
          <div className="card">
            <div className="container">
              <img src={require('../../assets/employee.png')} alt="Foto de perfil" />
              <p><b>Nome Completo:</b> {funcionario.nome} {funcionario.sobrenome}</p>
              <p><b>E-mail: </b>{funcionario.email}</p>
              <p><b>Número: </b>{funcionario.numero}</p>
            </div>
            <hr/>
            <div className="inline-buttons">
              <Link to="/editar">
                <button className="btn btnBlue">Editar</button>
              </Link>
              <button className="btn btnRed" onClick={handleClick}>Remover</button>
            </div>
          </div>
        </center>

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
          <button className="btn btnConfirm" onClick={removerFuncionario}>Deseja mesmo remover?</button>
        </Popover>
      </div>

    </>
  )
}