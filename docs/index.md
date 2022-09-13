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

O projeto conta com um makefile. Para rodar o projeto, o pacote make([linux](https://linuxhint.com/install-make-ubuntu/https://community.chocolatey.org/packages/make) | [windows](https://community.chocolatey.org/packages/make)) deve estar instalado na máquina juntamente com o [docker](https://www.docker.com/) e o [docker-compose](https://docs.docker.com/get-started/08_using_compose/).
### Rodando o jogo
#### 1) Caso seja a primeira vez rodando o jogo, crie a rede docker.

O comando ```make network``` irá criar a rede com o docker
```sh
make network
``` 

#### 2) Subindo os contêineres docker.

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

## 🧙 Equipe

| Foto | Nome | Github |
|:--:|:--:|:--:|
|<img width="100px" style="border-radius:10%" src="./assets/team/Matheus.jpeg">|<a href="https://github.com/Matheuspleal"style="text-decoration:none">Matheus Pimentel Leal</a>| Matheuspleal |
|<img width="100px" style="border-radius:10%" src="./assets/team/Luiz.jpeg">|<a href="https://github.com/LuizPettengill" style="text-decoration:none">Luiz Pettengill</a>| LuizPettengill |
|<img width="100px" style="border-radius:10%" src="./assets/team/Francisco.jpeg">|<a href="https://github.com/Francisco1code" style="text-decoration:none">Francisco Emanoel Ferreira</a>| Francisco1code |
|<img width="100px" style="border-radius:10%" src="./assets/team/yukio.jpeg">|<a href="https://github.com/Yukioz" style="text-decoration:none">Victor Yukio</a>| Yukioz
|<img width="100px" style="border-radius:10%" src="./assets/team/Italo.jpeg">|<a href="https://github.com/alvesitalo" style="text-decoration:none">Ítalo Alves</a>| alvesitalo
