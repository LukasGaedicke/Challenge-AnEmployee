# An Employee
Manter Funcionário foi desenvilvido para comprium um desafio de código. Neste desafio, uma Rest API foi desenvolvida com **Java 8 + Spring + React+**, para manter um funcionário. 

A aplicação frontend responde por: 
```
http://localhost:3000
```


A API responde a 4 chamadas, sendo elas: 
```
POST to http://localhost:8080/funcionario?nome={NOME}&sobrenome={SOBRENOME}&email={EMAIL}&numero={NUMERO}

GET to http://localhost:8080/funcionario

PUT to http://localhost:8080/funcionario?nome={NOME}&sobrenome={SOBRENOME}&email={EMAIL}&numero={NUMERO}

DELETE http://localhost:8080/funcionario?id={ID}
```

Onde: 
- Nome (Entre 2 e 30 caracteres)
- Sobrenome (Entre 2 e 50 caracteres)
- E-mail (Um e-mail válido)
- Número do NIS (PIS) (Somente números)


# Compile and Build
### API 
```
mvn clean package
```

Isso criará um arquivo `jar` dentro da pasta target e pode ser executado com:
```
java -jar ManterFuncionario-0.0.1-SNAPSHOT.jar
```

### Front-End 
Vá até a pasta raiz do projeto e execute:
```
 npm run build
```
Isso irá gerar uma pasta chamada build. Na pasta build execute: 
```
npm install
```
E após baixar as dependências, execute: 
```
npm start
```
E o resultado será esse: 

<img src="https://github.com/LukasGaedicke/Challenge-AnEmployee/blob/master/use.gif?raw=true">


### Requisitos Tecnológicos
- Linguagem back-end: Java
- Linguagem front-end: HTML5 com React

### Objetivo geral 
- Efetuar um CRUD de funcionário, em que funcionário tenha os atributos: 
  - Nome (Entre 2 e 30 caracteres);
  - Sobrenome (Entre 2 e 50 caracteres);
  - E-mail (Validar e-mail);
  - Número do NIS (PIS) (Somente números).

### Funcionalidades (CRUD):
- Inserção de um Funcionário;
- Exclusão de um Funcionário;
- Atualização de um Funcionário;
- Listagem de um Funcionário;

### Ferramentas/Tecnologias utilizadas
- Spring Boot (https://spring.io/projects/spring-boot)]
  - Desenvolvimento da API
- PostMan (https://www.getpostman.com/)
  - Testes referentes aos I/O's da API. 
- Visual Studio Code (https://code.visualstudio.com/)
  - Editor para o desenvolvimento com o REACT


### Decisões de projeto
- Usar padrão de projeto singleton para manter uma única instância do objeto funcionário em memória;
- Arquitetura minimalista, em função da complexidade baixa do problema a ser resolvido;
- Testes manuais/automatizados do tipo I/O na API e aplicação consumidora.

### Plano de trabalho
- Análise dos requisitos;
- Projeto da arquitetura;
- Desenvolvimento/Teste em parelelo.
