import React, {useEffect, useState} from 'react'
import api from '../../service/api'



export default function Listar() {
    const [funcionario, setFuncionario] = useState([]);

    useEffect(() => {
        async function carregarFuncionario() {
        const response  = await api.get('/funcionario' , {});
        console.log(response.data);
        setFuncionario(response.data);
    }
    carregarFuncionario();
    }, []);
    
    
    return (
    <>
    <h1>Listagem do Funcionário</h1>
    <ul className="listagemFuncionario">
        <p>Nome: {funcionario.nome}</p>
        <p>{funcionario.sobrenome}</p>
        <p>{funcionario.email}</p>
        <p>{funcionario.numero}</p>
    </ul>

    <div class="btn-group">
  <button>Editar</button>
  <button>Remover</button>
</div>
    </>
    )
}