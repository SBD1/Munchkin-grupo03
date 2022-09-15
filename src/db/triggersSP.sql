--- Verficar se personagem existes

CREATE OR REPLACE FUNCTION verifica_personagem() RETURNS TRIGGER AS 

$$
BEGIN
    SELECT * FROM personagem WHERE personagem_id = NEW.personagem_id;
    IF FOUND THEN 
      RAISE EXCEPTION 'Este personagem já existe';
    END IF;
    RETURN NEW;            

END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER verifica_personagem BEFORE INSERT ON personagem
FOR EACH ROW EXECUTE PROCEDURE verifica_personagem();

--- Criar mochila quando cria o personagem

CREATE OR REPLACE FUNCTION criar_mochila_func() RETURNS TRIGGER AS 
$$
BEGIN
    INSERT INTO mochila (jogador_id) VALUES (NEW.jogador_id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER criar_mochila AFTER INSERT ON personagem

FOR EACH ROW EXECUTE PROCEDURE criar_mochila_func();

--- Batalha com inimigo ----

CREATE OR REPLACE FUNCTION inimigo_morto_func() RETURNS TRIGGER AS $$

DECLARE 
    total_poder_inimigo INTEGER; -- poder do inimigo
    total_poder_personagem INTEGER; -- poder do personagem
BEGIN
    SELECT poder FROM inimigo WHERE inimigo_id = NEW.inimigo_id into total_poder_inimigo;
    SELECT forca_combate FROM jogador WHERE personagem_id = NEW.jogador_id into total_poder_personagem; 

    IF total_poder_inimigo < total_poder_personagem THEN
        UPDATE jogador_enfrenta_inimigo SET resolvido = true WHERE jogador_id = NEW.jogador_id AND inimigo_id = NEW.inimigo_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE PLPGSQL;

CREATE OR REPLACE TRIGGER inimigo_morreu AFTER INSERT ON jogador_enfrenta_inimigo FOR EACH ROW EXECUTE PROCEDURE inimigo_morto_func();

--- Game Over ---

CREATE OR REPLACE FUNCTION game_over_func() RETURNS TRIGGER AS $$

DECLARE 
    viewl_resolvido BOOLEAN;

BEGIN
    SELECT resolvido FROM jogador_enfrenta_inimigo WHERE resolvido = false INTO viewl_resolvido;
    IF viewl_resolvido = false THEN
        DELETE FROM personagem WHERE jogador_id = NEW.jogador_id;
        DELETE FROM mochila WHERE jogador_id = NEW.jogador_id;
    END IF;    
    RETURN NEW;
END;
$$ LANGUAGE PLPGSQL;

CREATE OR REPLACE TRIGGER game_over AFTER UPDATE ON jogador_enfrenta_inimigo FOR EACH ROW EXECUTE PROCEDURE game_over_func();


