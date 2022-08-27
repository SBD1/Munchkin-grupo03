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

O projeto conta com um makefile. Para rodar o projeto, o pacote [make](https://www.wikiwand.com/en/Make_(software)) deve estar instalado na máquina juntamente com o [docker](https://www.docker.com/).
### Rodando localmente
#### 1) Caso seja a primeira vez que está rodando o projeto, vá para dentro da pasta _*backend*_. Caso contrário, pule para o 3° passo.
```sh
cd backend
``` 

#### 2) Instale as dependências do backend
```sh
npm install
```
#### 3) Crie a rede interna do docker
```sh
docker network create munchkin
```

#### 4) Rode o comando _*up*_ com o pacote make.
```sh
make up
```

#### 5) Em outra janela de terminal, na pasta raiz do projeto, rode o comando _*migrate*_ com o pacote make.
```sh
make migrate
```

Agora com o banco de dados inicializado, ...

## 🦹‍♀️ Tecnologias

<div align=center>
    <img src="https://img.icons8.com/fluency/48/000000/typescript.png"/>
    <img src="https://img.icons8.com/color/48/000000/postgreesql.png"/>
</div>

## 🧙 Devs

- @Matheuspleal
- @LuizPettengill
- @francisco1code
- @Yukioz
- @alvesitalo
