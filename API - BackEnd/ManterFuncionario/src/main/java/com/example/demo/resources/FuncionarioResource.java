
package com.example.demo.resources;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.domain.Funcionario;
import com.example.demo.service.FuncionarioService;

@RestController
@RequestMapping("/funcionario")
public class FuncionarioResource {

	private FuncionarioService funcionarioService;

	@CrossOrigin( origins = "*" )
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity retornarFuncionario() {
		funcionarioService = new FuncionarioService();
		try {
			return ResponseEntity.status(HttpStatus.OK).body(funcionarioService.buscarFuncionario());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());

		}

	}

	@CrossOrigin()
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity criarFuncionario(@RequestBody @Valid Funcionario data) {
		funcionarioService = new FuncionarioService();
		try {
			return ResponseEntity.status(HttpStatus.OK).body(funcionarioService.cadastrarFuncionario(data));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
		}

	}

	@CrossOrigin
	@DeleteMapping("/{id}")
	public ResponseEntity removeFuncionario(@PathVariable int id){
		funcionarioService = new FuncionarioService();
		try {
			return ResponseEntity.status(HttpStatus.OK).body(funcionarioService.removerFuncionario(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
		}
		
		
	}
	
	@CrossOrigin
	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity editarFuncionario(@RequestBody @Valid Funcionario data) {
		funcionarioService = new FuncionarioService();
		try {
			return ResponseEntity.status(HttpStatus.OK).body(funcionarioService.editarFuncionario(data));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
		}
	}

	

}
