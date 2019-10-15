package com.example.demo.domain;

import java.util.Random;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class Funcionario {
	
	private static Random r = new Random(); 
	private int id;
	
	
	@NotEmpty(message = "Por favor, preencha o campo nome.")
	@NotBlank(message = "O campo não deve conter espaços em branco")
	@Size(min = 2, max = 30)
	@Pattern(regexp = "^[a-zA-Z]*$", message = "O campo deve conter apenas letras.")
	private String nome;

	@NotEmpty(message = "Por favor, preencha o campo sobrenome.")
	@NotBlank(message = "O campo não deve conter espaços em branco")
	@Pattern(regexp = "^[a-zA-Z]*$", message = "O campo deve conter apenas letras.")
	@Size(min = 2, max = 50)
	private String sobrenome;

	@NotEmpty(message = "Por favor, preencha o campo e-mail.")
	@Email
	private String email;

	@Pattern(regexp = "^[0-9]*$", message = "O campo deve conter apenas números.")
	@NotBlank(message = "O campo não deve conter espaços em branco")
	@NotEmpty(message = "Por favor, preencha campo número.")
	private String numero;

	private static Funcionario funcionarioInstance;

	
	public Funcionario(int id, String nome, String sobrenome, String email, String numero){
		super();
		this.id = id; 
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.email = email;
		this.numero = numero;
	}

	public static Funcionario getInstance() {
		if (funcionarioInstance == null) {
			synchronized (Funcionario.class) {
				if (funcionarioInstance == null) {
					funcionarioInstance = new Funcionario((int) r.nextInt((9999)), null,null,null,null);
				}
			}
		}
		return funcionarioInstance;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	
	public int getId() {
		return id;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public static void setToNull() {
		funcionarioInstance = null;
	}
}
