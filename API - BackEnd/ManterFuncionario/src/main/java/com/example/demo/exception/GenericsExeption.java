package com.example.demo.exception;

import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class GenericsExeption extends RuntimeException {
	
	private JsonNodeFactory f = JsonNodeFactory.instance ;
	private ObjectNode json = new ObjectNode(f);
	
	public GenericsExeption(String json) {
		super(json);
	}

	public GenericsExeption(String message, Throwable cause) {
		super(message, cause);
	}

	
}
