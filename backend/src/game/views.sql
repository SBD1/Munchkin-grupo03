-- Inimigos View
CREATE VIEW IF NOT EXISTS inimigo_view AS
    SELECT inimigo_id, nome, poder, jogador_id
    FROM inimigo;
