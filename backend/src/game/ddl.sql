CREATE TYPE raca AS ENUM (
    'Humano', 'Elfo', 'Halfling', 'Anao'
);

CREATE TYPE classe AS ENUM (
    'Guerreiro', 'Mago', 'Ladrao', 'Clerico'
);

CREATE TYPE tipo_equip AS ENUM (
    'Cabeca', 'Arma', 'Armadura', 'Pes'
);

CREATE TYPE tipo_pocao AS ENUM (
    'Confusao', 'Forca'
);

CREATE TYPE tipo_npc AS ENUM (
    'Vendedor', 'Passivo'
);

--Itens
CREATE TABLE IF NOT EXISTS item (

    item_id SERIAL,
    nome VARCHAR(50) NOT NULL, 
    valor INTEGER NOT NULL DEFAULT 0, 
    poder INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (item_id)
);

--equipamentos

CREATE TABLE IF NOT EXISTS equipamento (

    classe_personagem classe DEFAULT NULL,
    tipo tipo_equip NOT NULL,

    PRIMARY KEY (item_id)

) INHERITS (item);


--Porcoes
CREATE TABLE IF NOT EXISTS pocao (

    tipo tipo_pocao DEFAULT NULL,

    PRIMARY KEY (item_id)

) INHERITS (item);

--NPCs
CREATE TABLE IF NOT EXISTS npc (

    personagem_id SERIAL,
    nome VARCHAR(20) NOT NULL,
    raca_npc raca DEFAULT NULL,
    tipo tipo_npc DEFAULT 'Passivo',
    sala_id INTEGER NOT NULL,

    PRIMARY KEY(personagem_id)
);

--Salas
CREATE TABLE IF NOT EXISTS sala (

    sala_id SERIAL,
    descricao VARCHAR(300),
    nome VARCHAR(20),
    inimigo_id INTEGER DEFAULT NULL,
    objeto_id INTEGER DEFAULT NULL,
    item_id INTEGER DEFAULT NULL,

    PRIMARY KEY (sala_id)
);

--Missoes
CREATE TABLE IF NOT EXISTS missao (

    missao_id SERIAL,
    nome VARCHAR(20),
    descricao VARCHAR(300),
    nivel_da_missao INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (missao_id)
);

CREATE TABLE IF NOT EXISTS jogador (
    personagem_id SERIAL,
    nome VARCHAR(20) NOT NULL,
    raca_personagem raca NOT NULL,
    classe_personagem classe DEFAULT NULL,
    nivel INTEGER NOT NULL DEFAULT 1,
    forca_combate INTEGER NOT NULL DEFAULT 0,
    cabeca_id INTEGER DEFAULT NULL,
    arma_id INTEGER DEFAULT NULL,
    armadura_id INTEGER DEFAULT NULL,
    pes_id INTEGER DEFAULT NULL,
    missao_id INTEGER DEFAULT NULL,
    sala_id INTEGER DEFAULT 1,
    missao_atual INTEGER NOT NULL DEFAULT 1,

   PRIMARY KEY (personagem_id),
   FOREIGN KEY(cabeca_id) REFERENCES equipamento(item_id),
   FOREIGN KEY(arma_id) REFERENCES equipamento(item_id),
   FOREIGN KEY(armadura_id) REFERENCES equipamento(item_id),
   FOREIGN KEY(pes_id) REFERENCES equipamento(item_id),
   FOREIGN KEY(missao_id) REFERENCES missao(missao_id),
   FOREIGN KEY(sala_id) REFERENCES sala(sala_id)
);
--Inimigos
CREATE TABLE IF NOT EXISTS inimigo (

    inimigo_id SERIAL,
    nome VARCHAR(20) NOT NULL,
    poder INTEGER NOT NULL DEFAULT 1,
    jogador_id INTEGER DEFAULT NULL,
    recompensa_id INTEGER DEFAULT NULL,

    PRIMARY KEY (inimigo_id),
    FOREIGN KEY (jogador_id) REFERENCES jogador(personagem_id)

);

-- Mochilas
CREATE TABLE IF NOT EXISTS mochila (
    mochila_id SERIAL,
    capacidade INTEGER NOT NULL DEFAULT 10,
    total_itens INTEGER NOT NULL DEFAULT 0,
    jogador_id INTEGER NOT NULL,
    
    PRIMARY KEY (mochila_id),
    FOREIGN KEY (jogador_id) REFERENCES jogador(personagem_id)
);

-- Dialogo
CREATE TABLE IF NOT EXISTS dialogo (
    dialogo_id SERIAL,
    texto VARCHAR(500) NOT NULL,
    nivel_da_missao INTEGER NOT NULL DEFAULT 1,
    npc_id INTEGER,
    
    PRIMARY KEY (dialogo_id),
    FOREIGN KEY (npc_id) REFERENCES npc(personagem_id)
);

-- Salas conectadas
CREATE TABLE IF NOT EXISTS salas_conectadas (
    id_da_sala_atual INTEGER,
    id_da_sala_conectada INTEGER
);

-- Items da Mochila
CREATE TABLE If NOT EXISTS item_guardados (
    mochila_id INTEGER,
    item_id INTEGER
);

-- Relação de monstros mortos
CREATE TABLE IF NOT EXISTS enfrentou (
    personagem_id INTEGER,
    inimigo_id INTEGER
);
