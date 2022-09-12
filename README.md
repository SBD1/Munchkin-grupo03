<div align="center">
    <img src="https://raw.githubusercontent.com/SBD1/Munchkin/main/docs/assets/images/Logo.png" width="400">
</div>

#

## 🎯 Objetivo

Este projeto tem como objetivo principal ser objeto de avaliação pelo professor na disciplina de Sistemas de Bancos de Dados I ministrada na Universidade de Brasília, Campus Gama - FGA.

## 🦸‍♀️ Inspirações

- [Munchkin](https://munchkin.game/)
- [Darkest Dungeon](https://www.wikiwand.com/en/Darkest_Dungeon)
- [Slay The Spire](https://www.wikiwand.com/en/Slay_the_Spire)
- [Guild of Dungeoneering](https://www.wikiwand.com/en/Guild_of_Dungeoneering)
- [Dungeons & Dragons](https://dnd.wizards.com/pt-BR)

## 🧝 Como jogar?

O projeto conta com um makefile. Para rodar o projeto, o pacote [make](https://www.wikiwand.com/en/Make_(software)) deve estar instalado na máquina juntamente com o [docker](https://www.docker.com/) e o [docker-compose](https://docs.docker.com/get-started/08_using_compose/).
### Rodando o jogo localmente
#### 1) Crie a rede docker.

O comando ```make network``` irá criar a rede com o docker
```sh
make network
``` 

#### 2) Subindo os contêineres docker

O comando ```make up``` irá subir os contêineres docker com o banco de dados postgres e um servidor deno com instruções
```sh
make up
```
#### 3) Caso seja a primeira vez rodando o jogo, em outro terminal, execute as migrações. Caso contrário, pule para o 4° passo.

O comando ```make migrate``` irá realizar a criação das tabelas e inserção dos dados básicos no banco de dados postgres.
```sh
make migrate
```

#### 4) Inicie o jogo.

O comando ```make start``` faz a inicialização do jogo utilizando a runtime do Deno.
```sh
make start
```

#### **_Opcional_** - Caso seja necessário remover os contêineres e limpar os dados, execute o comando a seguir.

O comando ```make clean``` derruba todos os contêineres e faz a remoção das images e dos processos docker.
```sh
make clean
```

> caso tenha executado o comando ```make clean```, será necessário realizar novamente as migrações do banco com o 3° passo.

## 🦹‍♀️ Tecnologias

<div align=center>
    <img src="https://img.icons8.com/color/48/000000/deno.png"/>
    <img src="https://img.icons8.com/fluency/48/000000/typescript.png"/>
    <img src="https://img.icons8.com/color/48/000000/postgreesql.png"/>
</div>

## 🧙 Devs

- @Matheuspleal
- @LuizPettengill
- @francisco1code
- @Yukioz
- @alvesitalo