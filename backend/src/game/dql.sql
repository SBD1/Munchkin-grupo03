-- Jogador

select * from jogador

select classe_personagem  from jogador where personagem_id = 1


-- Dialogo

select * from dialogo where npc_id = 1 and nivel_da_missao = (select missao_atual from jogador where personagem_id = 1)

select * from dialogo where npc_id = 1 and nivel_da_missao = 1

select * from dialogo where npc_id = 1

-- sala


-- missao
select * from missao where nivel_da_missao = 1

-- inimigos mortos
SELECT CASE WHEN EXISTS (
    SELECT *
    FROM enfrentou
    WHERE personagem_id  = 1 AND inimigo_id = 1
)
THEN CAST(1 AS BIT)
ELSE CAST(0 AS BIT) END