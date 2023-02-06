# modulo2-semana11

<p align="justify"> 
Neste repositório está o projeto de uma RESTfull API desenvovido no Módulo 2 da Semana 11 com a Turma DEVinClamed.
Nesta semana foram abordados os tópicos sobre Spring: (i) Deploy, (ii) Logging e (iii) Debug. Para colocar em prática os tópicos de aula o projeto desenvolvido contempla a implentação de uma RESTfull API que simula uma agenda de contatos.

Tópicos abordados em aulas anteriores foram revisados e exercitados ao longo do desenvolvimento do projeto, que são ele:

- Banco de dados: 
   - elaboração do modelo lógico relacional do domínio do projeto
   
   <img src="https://github.com/DEVin-Clamed/modulo2-semana11/blob/main/src/main/resources/doc/er_api_agenda_clamed.png" > <br> <sub> Diagrama Entidade Relacionamento (ER) do projeto Agenda de Contatos </sub>
   
- Spring Boot: 
   - criação do pojeto utilizando o repositório central do maven, 
   - injeção de dependências.
   
- Spring Data: 
   - mapeamento objeto relacional com Hibernate
   
- Padrões: 
    - Model, 
    - Repository, 
    - Service, 
    - Controllers, 
    - DTO (Data Transfer Object). 
    
- Operações CRUD: 
    - Implementação de métodos para interceptação de requisições HTTP: 
      - POST: para inserção de recurso, 
      - GET: obteção de recursos, 
      - PUT: atualização de recursos, 
      - DELETE: deletar recursos.
     
- Deploy: 
    - estratégias,
    - empacotamento do projeto com maven para deploy em servidor local e na nuvem,
    - uma visão geral do Docker,
    - criação da imagem docker do projeto.
    
- Logging: 
    - configuração de appenders e layout
    - registro de logging com Logback, SLF4J local, e
    - usando serviço da [Loggly](https://www.loggly.com/) para registro de logging na nuvem
- Debug: 
    - conhecendo as ferramentas de debug na Intellij IDEA
</p>
