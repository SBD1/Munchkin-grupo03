-- INSET ITEMS
INSERT INTO item
(nome, valor, poder)
VALUES('chave 1', 0, 0);

INSERT INTO item
(nome, valor, poder)
VALUES('chave 2', 0, 0);

-- INSERT EQUIPAMENTO

INSERT INTO equipamento
(nome, valor, poder, classe_personagem, tipo)
VALUES('espada de madeira', 1, 2, 'Guerreiro', 'Arma');

INSERT INTO equipamento
(nome, valor, poder, classe_personagem, tipo)
VALUES('arco simples', 1, 2, 'Ladrao', 'Arma');

INSERT INTO equipamento
(nome, valor, poder, classe_personagem, tipo)
VALUES('cajado velho', 1, 1, 'Mago', 'Arma');

INSERT INTO equipamento
(nome, valor, poder, classe_personagem, tipo)
VALUES('calice sagrado', 1, 1, 'Clerico', 'Arma');

INSERT INTO equipamento
(nome, valor, poder, classe_personagem, tipo)
VALUES('arma mais forte do mundo', 100, 8001, default, 'Arma');

INSERT INTO equipamento
(nome, valor, poder, classe_personagem, tipo)
VALUES('lança magica', 5, 5, default, 'Arma');

INSERT INTO equipamento
(nome, valor, poder, classe_personagem, tipo)
VALUES('armadura de couro', 4, 2, 'Guerreiro', 'Armadura');

INSERT INTO equipamento
(nome, valor, poder, classe_personagem, tipo)
VALUES('robe de lã', 3, 1, 'Mago', 'Armadura');

INSERT INTO equipamento
(nome, valor, poder, classe_personagem, tipo)
VALUES('vestes leves', 2, 1, 'Ladrao', 'Armadura');

INSERT INTO equipamento
(nome, valor, poder, classe_personagem, tipo)
VALUES('santo robe', 5, 3, 'Clerico', 'Armadura');

INSERT INTO equipamento
(nome, valor, poder, classe_personagem, tipo)
VALUES('sapatinho de cristal', 10, 0, default, 'Pes');

INSERT INTO equipamento
(nome, valor, poder, classe_personagem, tipo)
VALUES('chinelo de ouro', 5, 2, default, 'Pes');

INSERT INTO equipamento
(nome, valor, poder, classe_personagem, tipo)
VALUES('botas pesadas', 3, 1, 'Guerreiro', 'Pes');

INSERT INTO equipamento
(nome, valor, poder, classe_personagem, tipo)
VALUES('tenis maneiro', 3, 3, default, 'Pes');

-- INSERT POCAO

INSERT INTO pocao
(nome, valor, poder, tipo)
VALUES('pocao da força', 2, 1, 'Forca');

INSERT INTO pocao
(nome, valor, poder, tipo)
VALUES('pocao da força', 2, 1, 'Forca');

INSERT INTO pocao
(nome, valor, poder, tipo)
VALUES('pocao da força', 2, 1, 'Forca');

INSERT INTO pocao
(nome, valor, poder, tipo)
VALUES('pocao da força', 2, 1, 'Forca');

INSERT INTO pocao
(nome, valor, poder, tipo)
VALUES('pocao da confusao', 4, 0, 'Confusao');

INSERT INTO pocao
(nome, valor, poder, tipo)
VALUES('pocao da confusao', 4, 0, 'Confusao');


-- INSERT SALAS

-- id 1
INSERT INTO sala
(nome, descricao, inimigo_id, objeto_id, item_id)
VALUES('A taverna', 'uma taverna quente e aconchegante com um quadro de missões e um taverneiro', default, default, default);

-- id 2
INSERT INTO sala
(nome, descricao, inimigo_id, objeto_id, item_id)
VALUES('A cidade', 'uma cidade movimentada e rica. Com uma loja no sul e uma saida ao oeste', default, default, default);

-- id 3
INSERT INTO sala
(nome, descricao, inimigo_id, objeto_id, item_id)
VALUES('floresta', 'uma floresta aberta. ela continua a leste e a cidade a oeste', default, default, default);

-- id 4
INSERT INTO sala
(nome, descricao, inimigo_id, objeto_id, item_id)
VALUES('floresta sombria', 'uma floresta fechada e perigosa seria ruim ficar muito tempo aqui. existe um caminho a oeste.', 1, default, default);

-- id 5
INSERT INTO sala
(nome, descricao, inimigo_id, objeto_id, item_id)
VALUES('encruzilhada', 'um caminho que se bifurca. deserto ao oeste e o pantano ao sul', default, default, default);

-- id 6
INSERT INTO sala
(nome, descricao, inimigo_id, objeto_id, item_id)
VALUES('deserto', 'um deserto seco e vazio, mas trás um sensação de perigo ao norte nas montanhas', 2, default, default);

-- id 7
INSERT INTO sala
(nome, descricao, inimigo_id, objeto_id, item_id)
VALUES('pantano', 'um pantano molhado e escuro. com certeza criaturas habitam aqui. uma caverna se encontra ao leste e uma encruzilhada ao norte.', default, default, default);

-- id 8
INSERT INTO sala
(nome, descricao, inimigo_id, objeto_id, item_id)
VALUES('caverna', 'uma caverna, provavelmente moradia de um Troll. Fora da caverna está o pantano.', 4, default, default);

-- id 9
INSERT INTO sala
(nome, descricao, inimigo_id, objeto_id, item_id)
VALUES('montanhas', 'uma montanha grande e gelada. É possivel ouvir uivos aqui. Um grande castelo está ao norte, uma praia ao leste e no sul o deserto', 3, default, default);

-- id 10
INSERT INTO sala
(nome, descricao, inimigo_id, objeto_id, item_id)
VALUES('A praia', 'Uma praia fedorenta e vazia, As montanhas estão a oeste', 5, default, default);

-- id 11
INSERT INTO sala
(nome, descricao, inimigo_id, objeto_id, item_id)
VALUES('O Castelo', 'um castelo grande e caloroso, o lar de um grande dragão. A saida do casttelo tem acesso as monttanhas', 6, default, default);

-- id 12
INSERT INTO sala
(nome, descricao, inimigo_id, objeto_id, item_id)
VALUES('A loja', 'Uma loja simpática com varios equipamentos e pocões. a saida está ao norte.', default, default, default);

-- CONECTA SALAS

-- taverna conecta com cidade
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(1,2);

-- cidade conecta com taverna
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(2,1);

-- cidade conecta com floresta
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(2,3);

-- floresta conecta com cidade
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(3,2);

-- floresta conecta com floresta sombria
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(3,4);

-- floresta sombria conecta com floresta
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(4,3);

-- floresta sombria conecta com encruzilhada
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(4,5);

-- encruzilhada conecta com floresta sombria
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(5,4);

-- encruzilhada conecta com deserto
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(5,6);

-- encruzilhada conecta com pantano
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(5,7);

-- deserto conecta com encruzilhada
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(6,5);

-- deserto conecta com montanha
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(6,9);

-- montanha conecta com deserto
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(9,6);

-- montanha conecta com praia
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(9,10);

-- montanha conecta com castelo
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(9,11);

-- praia conecta com montanha
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(10, 9);

-- castelo conecta com montanha
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(11, 9);

-- pantano conecta com encruzilhada
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(7,5);

-- pantano conecta com caverna 
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(7, 8);

-- caverna conecta com pantano
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(8,7);

-- cidade conecta com loja
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(2,12);

-- loja conecta com cidade
INSERT INTO salas_conectadas
(id_da_sala_atual, id_da_sala_conectada)
VALUES(12,2);

-- INSERT NPCS

-- id 1
INSERT INTO npc
(nome, raca_npc, tipo, sala_id)
VALUES('O taverneiro', 'Humano', 'Passivo'::tipo_npc, 1);

-- id 2
INSERT INTO npc
(nome, raca_npc, tipo, sala_id)
VALUES('O vendedor', 'Humano', 'Vendedor'::tipo_npc, 12);

-- id 3
INSERT INTO npc
(nome, raca_npc, tipo, sala_id)
VALUES('Barney', 'Humano', 'Passivo'::tipo_npc, 2);

-- id 4
INSERT INTO npc
(nome, raca_npc, tipo, sala_id)
VALUES('Sherley', 'Humano', 'Passivo'::tipo_npc, 5);

-- id 5
INSERT INTO npc
(nome, raca_npc, tipo, sala_id)
VALUES('Tuk', 'Humano', 'Passivo'::tipo_npc, 7);

-- INSERT MISSOES

INSERT INTO missao (missao_id, nome, descricao, nivel_da_missao)
VALUES(default, 'caça aos golbins', 'Golbins estão atacando os moradores da cidade de Munchiki City pela entra leste nas planícies, elimineos para obter a recompensa dessa missão!', 1);

INSERT INTO missao (missao_id, nome, descricao, nivel_da_missao)
VALUES(default, 'caça aos trolls', 'Mate o Troll, elimineo para obter a recompensa dessa missão!', 2);

INSERT INTO missao (missao_id, nome, descricao, nivel_da_missao)
VALUES(default, 'salve o reino', 'O dragão pretende atacar a cidade. derrote-o antes que ele ataque!', 3);


-- INSERT INIMIGOS e JOGADOR
INSERT INTO jogador
(personagem_id, nome, raca_personagem, classe_personagem, nivel, forca_combate, cabeca_id, arma_id, armadura_id, pes_id, missao_id, sala_id, missao_atual)
VALUES(default, 'francisco', 'Humano', 'Mago', default, default, default, default, default, default, default, default, 1);

INSERT INTO inimigo
(inimigo_id, nome, poder, jogador_id, recompensa_id)
VALUES(default, 'aranha', 1, default, 4);

INSERT INTO inimigo
(inimigo_id, nome, poder, jogador_id, recompensa_id)
VALUES(default, 'goblin', 2, default, 2);

INSERT INTO inimigo
(inimigo_id, nome, poder, jogador_id, recompensa_id)
VALUES(default, 'lobo', 3, default, 3);

INSERT INTO inimigo
(inimigo_id, nome, poder, jogador_id, recompensa_id)
VALUES(default, 'troll', 7, default, 6);

INSERT INTO inimigo
(inimigo_id, nome, poder, jogador_id, recompensa_id)
VALUES(default, 'polvo gigante', 15, default, 7);

INSERT INTO inimigo
(inimigo_id, nome, poder, jogador_id, recompensa_id)
VALUES(default, 'dragão de plutonio', 20, default, 10);

-- INSERT DIALOGOS

INSERT INTO dialogo
(dialogo_id, texto, nivel_da_missao, npc_id)
VALUES(default, 'boas vindas viajante eu sou Barney, o prefeito da cidade, destruas as aranhas por favor!.', 1, 3);

INSERT INTO dialogo
(dialogo_id, texto, nivel_da_missao, npc_id)
VALUES(default, 'boas vindas viajante eu sou Barney, o prefeito da cidade, salve nos do dragão no castelo da montanha!.', 3, 3);

INSERT INTO dialogo
(dialogo_id, texto, nivel_da_missao, npc_id)
VALUES(default, 'Cuidado aonde anda! tem um troll com 7 de poder naquela caverna!', 2, 5);

INSERT INTO dialogo
(dialogo_id, texto, nivel_da_missao, npc_id)
VALUES(default, 'Eu sou a maga sherley, se você matar o polvo na praia você conseguira grande recompensa!', 0, 4);

INSERT INTO dialogo
(dialogo_id, texto, nivel_da_missao, npc_id)
VALUES(default, 'Bem vindo ao mundo de Munchikin. Eu sou o taverneiro, use comandos de texto para jogar: "ir para...","usar...","conversar com..." ', 0, 1);

INSERT INTO dialogo
(dialogo_id, texto, nivel_da_missao, npc_id)
VALUES(default, 'Olá como posso ajudar?', 0, 2);

-- Enfrentou

INSERT INTO enfrentou
(personagem_id, inimigo_id)
VALUES(1,1);

-- Mocihila
INSERT INTO mochila
(mochila_id, capacidade, total_itens, jogador_id)
VALUES(default, default, default, 1);

-- Itens guardados
INSERT INTO item_guardados
(mochila_id, item_id)
VALUES(1,3);