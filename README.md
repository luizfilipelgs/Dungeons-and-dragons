# Boas vindas ao repositório do projeto Trybers and Dragons!


 ## O que foi desenvolvido  👨‍💻 

  Foi desenvolvido a estrutura de um jogos de `RPG` (_Role Playing Game_) com intuito de aplicar os princípios da arquitetura `SOLID` e os princípios de `POO`.

  Foi necessário: 

  - O conhecimento dos pilares da Programação Orientada a Objetos: Herança, Abstração, Encapsulamento e Polimorfismo.
  - A habilidade de criar e utilizar Interface;
  - A habilidade de utilizar Composição;
  - Implementar, em TypeScript, Classes, Instâncias, Atributos, Métodos e Objetos;
  - O conhecimento e aplicação dos princípios SOLID.
 
  ---

## Orientações

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker

  > Clone o repositório

  - `git clone git@github.com:luizfilipelgs/Trybers-and-dragons.git`.
  - Entre na pasta do repositório que você acabou de clonar:
  - `cd Trybers-and-dragons`.

  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `trybers_and_dragons`.
  - A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybers_and_dragons bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima com excessão do dos comandos do **git**, pois ele não vem configurado com suas credenciais dentro do container, então os commits fora. 

---
  
  ## Sem Docker

  > Clone o repositório

  - `git clone git@github.com:luizfilipelgs/Trybers-and-dragons.git`.
  - Entre na pasta do repositório que você acabou de clonar:
  - `cd Trybers-and-dragons`.
  > Instale as dependências [**Caso existam**] com `npm install`
  
  ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

  <br/>
</details>
