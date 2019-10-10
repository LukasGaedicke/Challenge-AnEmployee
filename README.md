Para informações aprodundas sobre o projeto visite o [Wiki](https://github.com/LukasGaedicke/Challenge-AnEmployee/wiki). 

### Requisitos Tecnológicos
- Linguagem back-end: Java
- Linguagem front-end: HTML5 com React

### Objetivo geral 
- Efetuar um CRUD de funcionário, em que funcionário tenha os atributos: 
  - Nome (Entre 2 e 30 caracteres);
  - Sobrenome (Entre 2 e 50 caracteres);
  - e-mail (Validar e-mail);
  - Número do NIS (PIS) (Somente números).

### Funcionalidades (CRUD):
- Inserção de um Funcionário;
- Exclusão de um Funcionário;
- Atualização de um Funcionário;

### Ferramentas/Tecnologias utilizadas
- Spring Boot (https://spring.io/projects/spring-boot)]
  - Desenvolvimento da API
- PostMan (https://www.getpostman.com/)
  - Testes referentes aos I/O's da API. 

### Decisões de projeto
- Usar padrão de projeto singleton para manter uma única instância do objeto funcionário;
- Arquitetura minimalista, em função da complexidade baixa do problema a ser resolvido;
- Testes manuais/automatizados do tipo I/O na API e aplicação consumidora.
- Testes unitários nas funções de validação de dados (email, nome...). 

### Plano de trabalho
- Análise dos requisitos;
   - [Histórias e observações/decisões referentes aos requisitos](https://github.com/LukasGaedicke/Challenge-AnEmployee/wiki/ER) 
- Projeto da arquitetura;
- Desenvolvimento/Teste em parelelo.
