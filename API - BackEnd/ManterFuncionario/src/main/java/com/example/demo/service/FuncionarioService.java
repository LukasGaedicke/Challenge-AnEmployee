package com.example.demo.service;

import com.example.demo.domain.Funcionario;
import com.example.demo.exception.GenericsExeption;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class FuncionarioService {
	
	public Funcionario buscarFuncionario() {
		if (Funcionario.getInstance().getNome() != null) {
			return Funcionario.getInstance();
		} else {
			throw new GenericsExeption("O funcionário não está cadastrado.");
		}

	}

	public String cadastrarFuncionario(Funcionario data) {
		if (Funcionario.getInstance().getNome() == null) {
			Funcionario.getInstance().setEmail(data.getEmail());
			Funcionario.getInstance().setNome(data.getNome());
			Funcionario.getInstance().setSobrenome(data.getSobrenome());
			Funcionario.getInstance().setNumero(data.getNumero());
			return "Funcionário cadastrado com sucesso.";
		} else {
		
			throw new GenericsExeption("Já existe um funcionário cadastrado.");
		}

	}

	public String editarFuncionario(Funcionario data) {
		if (Funcionario.getInstance().getNome() != null) {
			if (Funcionario.getInstance().getId().equals(data.getId())) {
				Funcionario.getInstance().setNome(data.getNome());
				Funcionario.getInstance().setSobrenome(data.getSobrenome());
				Funcionario.getInstance().setNumero(data.getNumero());
				return "Funcionário editado com sucesso.";
			}else {
				throw new GenericsExeption("ID informado é inválido.");
			}
		} else {
			throw new GenericsExeption("O funcionário que você deseja editar não está cadastrado.");
		}

	}

	public String removerFuncionario(String data) {
		if (Funcionario.getInstance().getNumero().equals(data)) {
			Funcionario.setToNull();
			return "Funcionário removido com sucesso.";
		} else {
			throw new GenericsExeption("Não existe um funcionário cadastrado com esse número.");
		}

	}

}
