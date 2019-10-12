import React, {useEffect, useState} from 'react'
import api from '../../service/api'
import { Link } from 'react-router-dom'



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

    <Link to="/editar">
        <button className= "btn">Editar</button>
    </Link>
    <Link to="/cadastrar">
        <button className= "btn">Cadastrar</button>
    </Link>
    </>
    )
}