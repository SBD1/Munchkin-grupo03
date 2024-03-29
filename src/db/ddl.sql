------------------Tipos----------------------

CREATE TYPE tipo_raca AS ENUM (
    'Humano', 'Elfo', 'Halfling', 'Anao'
);

CREATE TYPE tipo_classe AS ENUM (
    'Guerreiro', 'Mago', 'Ladrao', 'Clerigo'
);

CREATE TYPE tipo_item AS ENUM (
    'Equipamento', 'Pocao'
);

CREATE TYPE tipo_equip AS ENUM (
    'Cabeca', 'Arma', 'Armadura', 'Pes'
);

CREATE TYPE tipo_pocao AS ENUM (
    'Confusao', 'Forca'
);

CREATE TYPE tipo_npc AS ENUM (
    'Vendedor', 'Cidadao'
);

CREATE TYPE tipo_personagem AS ENUM (
    'Npc', 'Jogador'
);

------------------------Entidades--------------------------

--Missoes
CREATE TABLE IF NOT EXISTS missao (

    missao_id SERIAL,
    nome VARCHAR(50),
    descricao VARCHAR(300),
    nivel_da_missao INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (missao_id)
);

--Itens
CREATE TABLE IF NOT EXISTS item (

    item_id SERIAL,
    nome VARCHAR(50) NOT NULL, 
    valor INTEGER NOT NULL DEFAULT 0, 
    poder INTEGER NOT NULL DEFAULT 0,
    tipo tipo_item DEFAULT NULL,

    PRIMARY KEY (item_id)
);

--Equipamentos
CREATE TABLE IF NOT EXISTS equipamento (

    classe tipo_classe DEFAULT NULL,
    local_equip tipo_equip DEFAULT NULL,

    PRIMARY KEY (item_id)
) INHERITS (item);


--Pocoes
CREATE TABLE IF NOT EXISTS pocao (

    efeito_pocao tipo_pocao NOT NULL DEFAULT 'Forca',

    PRIMARY KEY (item_id)
) INHERITS (item);

--Salas
CREATE TABLE IF NOT EXISTS sala (

    sala_id SERIAL,
    descricao VARCHAR(300),
    nome VARCHAR(20),

    PRIMARY KEY (sala_id)
);

--Objetos
CREATE TABLE IF NOT EXISTS objeto(

    objeto_id SERIAL,
    nome VARCHAR(20),
    descricao VARCHAR(300),

    PRIMARY KEY (objeto_id)
);

--Personagem
CREATE TABLE IF NOT EXISTS personagem(

    personagem_id SERIAL,
    nome VARCHAR(20) NOT NULL,
    raca tipo_raca NOT NULL DEFAULT 'Humano',
    tipo tipo_personagem  NOT NULL DEFAULT 'Jogador',

    PRIMARY KEY (personagem_id)
);

--NPCs
CREATE TABLE IF NOT EXISTS npc (

    profissao tipo_npc NOT NULL DEFAULT 'Cidadao',

    PRIMARY KEY (personagem_id)
) INHERITS (personagem);

-- Dialogo
CREATE TABLE IF NOT EXISTS dialogo (

    dialogo_id SERIAL,
    texto VARCHAR(500) NOT NULL,
    nivel_da_missao INTEGER NOT NULL DEFAULT 1,
    
    PRIMARY KEY (dialogo_id)
);

--Jogador
CREATE TABLE IF NOT EXISTS jogador (

    classe tipo_classe NOT NULL,
    nivel INTEGER NOT NULL DEFAULT 1,
    forca_combate INTEGER NOT NULL DEFAULT 1,
    equip_cabeca_id INTEGER DEFAULT NULL,
    equip_arma_id INTEGER DEFAULT NULL,
    equip_armadura_id INTEGER DEFAULT NULL,
    equip_pes_id INTEGER DEFAULT NULL,
    sala_atual_id INTEGER DEFAULT 1,
    missao_atual_id INTEGER NOT NULL DEFAULT 1,
    qtd_gold INTEGER NOT NULL DEFAULT 0,

   PRIMARY KEY (personagem_id),
   FOREIGN KEY(equip_cabeca_id) REFERENCES equipamento(item_id),
   FOREIGN KEY(equip_arma_id) REFERENCES equipamento(item_id),
   FOREIGN KEY(equip_armadura_id) REFERENCES equipamento(item_id),
   FOREIGN KEY(equip_pes_id) REFERENCES equipamento(item_id),
   FOREIGN KEY(missao_atual_id) REFERENCES missao(missao_id),
   FOREIGN KEY(sala_atual_id) REFERENCES sala(sala_id)
)INHERITS (personagem);

-- Mochilas
CREATE TABLE IF NOT EXISTS mochila (

    jogador_id INTEGER NOT NULL PRIMARY KEY REFERENCES jogador(personagem_id) ON DELETE RESTRICT,
    capacidade INTEGER NOT NULL DEFAULT 10,
    total_itens INTEGER NOT NULL DEFAULT 0  
);

--Inimigos
CREATE TABLE IF NOT EXISTS inimigo (

    inimigo_id SERIAL,
    nome VARCHAR(55) NOT NULL,
    poder INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (inimigo_id)
);

---------------------------Relacionamentos------------------------------

--Possui
CREATE TABLE IF NOT EXISTS npc_possui_dialogo(

    npc_id SERIAL,
    dialogo_id SERIAL,

    FOREIGN KEY (npc_id) REFERENCES npc(personagem_id),
    FOREIGN KEY (dialogo_id) REFERENCES dialogo(dialogo_id)
);

--Libera
CREATE TABLE IF NOT EXISTS missao_libera_dialogo(

    missao_id SERIAL,
    dialogo_id SERIAL,

    FOREIGN KEY (missao_id) REFERENCES missao(missao_id),
    FOREIGN KEY (dialogo_id) REFERENCES dialogo(dialogo_id)
);

--Recompensa
CREATE TABLE IF NOT EXISTS missao_recompensa_item(

    missao_id SERIAL,
    item_id SERIAL,

    FOREIGN KEY (missao_id) REFERENCES missao(missao_id),
    FOREIGN KEY (item_id) REFERENCES item(item_id)
);

--Desbloqueia
CREATE TABLE IF NOT EXISTS missao_desbloqueia_missao(

    missao_base_id SERIAL,
    missao_alvo_id SERIAL,

    FOREIGN KEY (missao_base_id) REFERENCES missao(missao_id),
    FOREIGN KEY (missao_alvo_id) REFERENCES missao(missao_id)
);

--Guarda
CREATE TABLE IF NOT EXISTS mochila_guarda_item(

    personagem_id SERIAL,
    item_id SERIAL,

    FOREIGN KEY (personagem_id) REFERENCES mochila(jogador_id),
    FOREIGN KEY (item_id) REFERENCES item(item_id)
);

--Conecta
CREATE TABLE IF NOT EXISTS sala_conecta_sala(

    sala_base_id SERIAL,
    sala_alvo_id SERIAL,

    FOREIGN KEY (sala_base_id) REFERENCES sala(sala_id),
    FOREIGN KEY (sala_alvo_id) REFERENCES sala(sala_id)
);

--Contem
CREATE TABLE IF NOT EXISTS sala_contem_item(

    sala_id SERIAL,
    item_id SERIAL,

    FOREIGN KEY (sala_id) REFERENCES sala(sala_id),
    FOREIGN KEY (item_id) REFERENCES item(item_id)
);

--Dispoe
CREATE TABLE IF NOT EXISTS sala_dispoe_objeto(

    sala_id SERIAL,
    objeto_id SERIAL,

    FOREIGN KEY (sala_id) REFERENCES sala(sala_id),
    FOREIGN KEY (objeto_id) REFERENCES objeto(objeto_id)
);

--Acomoda
CREATE TABLE IF NOT EXISTS sala_acomoda_npc(

    sala_id SERIAL,
    npc_id SERIAL,

    FOREIGN KEY (sala_id) REFERENCES sala(sala_id),
    FOREIGN KEY (npc_id) REFERENCES npc(personagem_id)
);

--Tem
CREATE TABLE IF NOT EXISTS sala_tem_inimigo(

    sala_id SERIAL,
    inimigo_id SERIAL,

    FOREIGN KEY (sala_id) REFERENCES sala(sala_id),
    FOREIGN KEY (inimigo_id) REFERENCES inimigo(inimigo_id)
);

--Reserva
CREATE TABLE IF NOT EXISTS objeto_reserva_item(

    objeto_id SERIAL,
    item_id SERIAL,

    FOREIGN KEY (objeto_id) REFERENCES objeto(objeto_id),
    FOREIGN KEY (item_id) REFERENCES item(item_id)
);

--Dropa
CREATE TABLE IF NOT EXISTS inimigo_dropa_item(

    inimigo_id SERIAL,
    item_id SERIAL,

    FOREIGN KEY (inimigo_id) REFERENCES inimigo(inimigo_id),
    FOREIGN KEY (item_id) REFERENCES item(item_id)
);

--Enfrenta
CREATE TABLE IF NOT EXISTS jogador_enfrenta_inimigo(

    jogador_id SERIAL,
    inimigo_id SERIAL,
    resolvido BOOLEAN NOT NULL DEFAULT false,

    FOREIGN KEY (jogador_id) REFERENCES jogador(personagem_id),
    FOREIGN KEY (inimigo_id) REFERENCES inimigo(inimigo_id)
);