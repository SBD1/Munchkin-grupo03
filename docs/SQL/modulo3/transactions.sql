-- Derrotar monstro

begin;

update jogador set arma_id = 1 where personagem_id = 1;
insert into enfrentou (personagem_id, inimigo_id) values(1,2);
update mochila set capacidade = capacidade - 1 where mochila_id = 1;

commit;


-- Pegar Item da sala

begin;

update sala set item_id = null where sala_id = 5;
insert into items_guardados (mochila_id, item_id) values(1,1);
update mochila set capacidade = capacidade - 1 where mochila_id = 1;

commit;

-- Comprar pocao de força na loja

begin;

insert into pocao (nome, valor, poder, tipo) values('pocao da força', 2, 1, 'Forca')
insert into items_guardados (mochila_id, item_id) values(1,14);
update mochila set capacidade = capacidade - 1 where mochila_id = 1;

commit;

-- Comprar pocao de confusão na loja

begin;

insert into pocao (nome, valor, poder, tipo) values('pocao da força', 2, 1, 'Forca')
insert into items_guardados (mochila_id, item_id) values(1,14);
update mochila set capacidade = capacidade - 1 where mochila_id = 1;

commit;

-- Comprar equipamentot de confusão na loja

begin;

insert into equipamento (nome, valor, poder,classe_personagem ,tipo) values('espada de prata', 2, 1,'Guerreiro' ,'Arma')
insert into items_guardados (mochila_id, item_id) values(1,15);
update mochila set capacidade = capacidade - 1 where mochila_id = 1;

commit;

-- Desequipar equipamento


-- Equipar equipamento