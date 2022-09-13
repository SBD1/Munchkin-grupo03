--Limpa a mochila do jogador caso ele morra
CREATE OR REPLACE FUNCTION clear_bag() RETURNS trigger AS $clear_bag$
BEGIN
    DELETE FROM item_guardados WHERE mochila_id = (SELECT personagem_id FROM JOGADOR WHERE personagem_id = OLD.personagem_id);
    RETURN old;
END;
$clear_bag$ LANGUAGE plpgsql;

CREATE TRIGGER killPlayer
    AFTER DELETE ON jogador
    FOR EACH ROW EXECUTE PROCEDURE clear_bag();