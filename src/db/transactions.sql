-- Derrotar monstro

BEGIN;

UPDATE jogador set arma_id = 1 where personagem_id = 1;
INSERT INTO enfrentou (personagem_id, inimigo_id) values(1,2);
UPDATE mochila set capacidade = capacidade - 1 where mochila_id = 1;

COMMIT; -- ROLLBACK


-- Pegar Item da sala

BEGIN;

UPDATE sala set item_id = null where sala_id = 5;
INSERT INTO items_guardados (mochila_id, item_id) values(1,1);
UPDATE mochila set capacidade = capacidade - 1 where mochila_id = 1;

COMMIT; -- ROLLBACK

-- Comprar pocao de força na loja

BEGIN;

INSERT INTO pocao (nome, valor, poder, tipo) values('pocao da força', 2, 1, 'Forca')
INSERT INTO items_guardados (mochila_id, item_id) values(1,14);
UPDATE mochila set capacidade = capacidade - 1 where mochila_id = 1;

COMMIT; -- ROLLBACK

-- Comprar pocao de confusão na loja

BEGIN;

INSERT INTO pocao (nome, valor, poder, tipo) values('pocao da força', 2, 1, 'Forca')
INSERT INTO items_guardados (mochila_id, item_id) values(1,14);
UPDATE mochila set capacidade = capacidade - 1 where mochila_id = 1;

COMMIT; -- ROLLBACK

-- Comprar equipamentot de confusão na loja

BEGIN;

INSERT INTO equipamento (nome, valor, poder,classe_personagem ,tipo) values('espada de prata', 2, 1,'Guerreiro' ,'Arma')
INSERT INTO items_guardados (mochila_id, item_id) values(1,15);
UPDATE mochila set capacidade = capacidade - 1 where mochila_id = 1;

COMMIT; -- ROLLBACK

