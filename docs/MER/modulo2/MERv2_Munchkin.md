# Modelo Entidade-Relacionamento

## Enumerações

- tipo_porção = ('Vida', 'Confusao', 'Forca');
- tipo_classe = ('Guerreiro', 'Mago', 'Ladrao', 'Clerigo');
- tipo_equip = ('Cabeca', 'Arma', 'Armadura', 'Pes');
- raça = ('Humano', 'Elfo', 'Halfling', 'Anao');
- tipo npc = ('Vendedor', 'Passivo');

## Entidades
- Personagem
- Jogador
- Mochila	
- Item
- Equipamento
- Porção
- Inimigo
- Sala
- Missao
- NPC
- Dialogo
- Objeto
- Quadro_de_missao

## Atributos
- Personagem = {**id**, Nome, Raça}
- Jogador = {**id**, Nome, Sexo, Raça, Classe, Nível, Força de Combate, Equipados: [Cabeça, Mão Direita, Mão Esquerda, Duas Mãos, Armadura, Pés]}
- Mochila = {**id**, Capacidade}
- Item = {**id**, Nome, Valor, Bônus}
- Equipamento = {**id**, Nome, Valor, Bônus, Tipo, classe}
- Porção = {**id**, Nome, Valor, Bônus, Tipo}
- Inimigo = {**id**, Nome, Nível}
- Sala = {**id**, Nome, Descrição}
- Missão = {**id**, Descrição}
- Quadro de Missão = {**id**}

## Relacionamentos

### Jogador _Carrega_ Mochila
- Um Jogador pode _carregar_ uma Mochila, e uma Mochila pode ser _carregada_ por um Jogador (1:1)

### Jogador _Equipa_ Equipamento
- Um Jogador pode _equipar_ um ou vários Equipamento, e um Equipamento pode ser _equipado_ por um ou vários Jogador (1:n)

### Jogador _Utiliza_ Porção
- Um Jogador pode _usar_ um ou vários Porção, e um Porção pode ser _usado_ por um ou vários Jogador (1:n)

### Jogador _enfrenta_ Inimigo
- Um Jogador pode _enfrentar_ um ou vários Inimigo, e um ou vários Inimigo podem _enfrentar_ um Jogador (1:n)

### Jogador _conversa_ NPC
- Um Jogador pode _conversar_ um NPC, e um NPC pode _conversar_ um jogador (1:1)

### Jogador _avança_ Missão
- Um jogador pode _avançar_ uma ou várias missões, e uma ou várias missões podem _avançado_ por um jogador.

### Mochila _contém_ Item
- Mochila pode _conter_ um ou vários Item, e um ou vários Item pode estar _contido_ em uma Mochila (1:n)

### Sala _Possui_ Jogador
- Sala pode _possuir_ um Jogador, e um Jogador pode _estar_ em uma sala (1, 1)

### Sala _Dispoem_ Objeto
- Sala pode _dispor_ nenhum ou vários Objeto, e um ou vários Objeto pode _disposto_ por uma sala (1, n)

### Sala _Possui_ Item
- Sala pode _possuir_ nenhum ou vários Item, e um ou vários Item pode _estar_ em uma sala (1, n)

### Sala _Possui_ NPC
- Sala pode _possuir_ nenhum ou vários NPC, e um ou vários NPC pode _estar_ em uma sala (1, n)
  
### Sala _Possui_ Inimigo
- Sala pode _possuir_ nenhum ou vários Inimigo, e um ou vários Inimigo pode _estar_ em uma sala (1, n)

### Sala _Conecta_ Sala
- Sala pode _conectar_ uma ou várias Salas, (1:n)

### Inimigo _Dropa_ Item
- Um Inimigo pode _dropar_ um ou vários Itens, um ou vários Itens podem _dropado_ por um inimigo.(0:n)

### NPC _Possui_ Diálogo
- Um NPC pode _possuir_ um ou vários diálogos, e um ou vários diálogos podem _possuido_ por um NPC.(1:n)

### Missão _Libera_ Diálogo
- Uma Missão pode _liberar_ um ou vários diálogos, e um ou vários diàlogos podem _liberado_ por uma Missão. (1:n)

### Missão _Desbloqueia_ Missão
- Uma Missão pode _Desbloquear_ uma ou várias missões, e uma ou várias Missões podem _liberado_ por uma Missão. (1:n)

### Missão _Recompensa_ Item
- uma Missão _Recompensa_ com uma ou vários itens, e um ou vários Itens são _recompensados_ por uma Missão.

### Quadro_de_Missão _Possui_ Missão
- Uma Quadro_de_MIssão _possui_ uma ou várias Missões, e uma ou várias Missões _estão_ no Quadro_de_Missão.

## Versionamento

| Data       | Versão | Descrição                    | Autor                |
| ---------- | ------ | --------------------------   | ---------------------|
| 01/07/2022 | 1.0    | Adiciona o MER     | Francisco Emanoel, Matheus Pimentel |
| 02/07/2022 | 1.1    | Revisa o documento | Ítalo Alves     |
| 04/07/2022 | 1.1    | Vídeo do documento | Victor Yukio, Matheus Pimentel, Fancisco Ferreira, Ítalo Alves, Luiz Pettengil     |
| 01/08/2022 | 1.2 | Atualizar documento em relação aos requisitos | Victor Yukio |
