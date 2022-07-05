# Modelo Entidade-Relacionamento

## Entidades
- Personagem
- Mochila	
- Item
- Equipamento
- Consumível
- Monstro
- Sala

## Atributos
- Personagem = {**id**, Nome, Sexo, Raça, Classe, Nível, Força de Combate, Equipados: [Cabeça, Mão Direita, Mão Esquerda, Duas Mãos, Armadura, Pés]}
- Mochila = {**id**, Capacidade}
- Item = {**Nome**, Valor, Bônus}
- Equipamento = {**Nome**, Valor, Bônus, Tamanho, Local Ocupado}
- Consumível = {**Nome**, Valor, Bônus, Efeito}
- Monstro = {**Nome**, Nível, Drops, Quantidade de níveis ganhos ao derrotar}
- Sala = {**Nome**}

## Relacionamentos

Personagem _Carrega_ Mochila
- Um Personagem pode _carregar_ uma Mochila, e uma Mochila pode ser _carregada_ por um personagem (1:1)

Personagem _Equipa_ Equipamento
- Um Personagem pode _equipar_ um ou vários Equipamento, e um Equipamento pode ser _equipado_ por um ou vários Personagem (1:n)

Personagem _Usa_ consumível
- Um Personagem pode _usar_ um ou vários Consumível, e um Consumível pode ser _usado_ por um ou vários Personagem (1:n)

Personagem _enfrenta_ Monstro
- Um Personagem pode _enfrentar_ um ou vários Monstro, e um ou vários Monstro podem _enfrentar_ um Personagem (1:n)

Mochila _contém_ Item
- Mochila pode _conter_ um ou vários Item, e um ou vários Item pode estar _contido_ em uma Mochila (1:n)

Sala _Possui_ Personagem
- Sala pode _possuir_ um personagem, e um personagem pode _estar_ a sala (1, 1)

Sala _Possui_ Item
- Sala pode _possuir_ nenhum ou vários Item, e um ou vários Item pode _estar_ na sala (1, n)
  
Sala _Possui_ Monstro
- Sala pode _possuir_ nenhum ou vários Monstro, e um ou vários Monstro pode _estar_ na sala (1, n)

## Vídeo de apresentação

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/VVhO_axioWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

## Versionamento

| Data       | Versão | Descrição                    | Autor                |
| ---------- | ------ | --------------------------   | ---------------------|
| 01/07/2022 | 1.0    | Adiciona o MER     | Francisco Emanoel, Matheus Pimentel |
| 02/07/2022 | 1.1    | Revisa o documento | Ítalo Alves     |
| 04/07/2022 | 1.1    | Vídeo do documento | Victor Yukio, Matheus Pimentel, Fancisco Ferreira, Ítalo Alves, Luiz Pettengil     |
