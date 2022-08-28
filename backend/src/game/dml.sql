

INSERT INTO public.item
(nome, valor, poder)
VALUES('teste', 0, 0);

INSERT INTO public.sala
(nome, descricao)
VALUES('floresta-1', 'uma floresta fechada e cheia de vida');

INSERT INTO public.npc
(nome, raca_npc, tipo)
VALUES('Barney', 'Humano', 'Passivo'::tipo_npc);


INSERT INTO missao (missao_id, nome, descricao, nivel_da_missao)
VALUES
(default, 'caça aos javalis', 'Javalis estão atacando os moradores da cidade de Munchiki City pela entra leste nas planícies, elimineos para obter a recompensa dessa missão!', 1);

INSERT INTO jogador
(personagem_id, nome, raca_personagem, classe_personagem, nivel, forca_combate, cabeca_id, arma_id, armadura_id, pes_id, missao_id, sala_id, nivel_da_missao)
VALUES(default, 'francisco', 'Humano', 'Mago', default, default, default, default, default, default, default, default, 1);

INSERT INTO public.inimigo
(inimigo_id, nome, poder, jogador_id)
VALUES(default, 'teste', 1, default);


INSERT INTO public.mochila
(mochila_id, capacidade, total_itens, jogador_id)
VALUES(default, default, default, default);

INSERT INTO public.equipamento
(nome, valor, poder, classe_personagem, tipo)
VALUES('espada de madeira', 1, 1, 'Guerreiro', 'Arma');

INSERT INTO public.pocao
(nome, valor, poder, tipo)
VALUES('pocao da confusao', 2, 0, 'Confusao');

INSERT INTO public.dialogo
(dialogo_id, texto, nivel_da_missao, npc_id)
VALUES(default, 'boas vindas viajante eu sou Barney, o tarveneiro da cidade.', 1, 1)