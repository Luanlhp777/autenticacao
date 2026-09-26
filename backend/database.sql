CREATE DATABASE IF NOT EXISTS autenticacao;

USE autenticacao;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

USE autenticacao;

DELIMITER $$

DROP PROCEDURE IF EXISTS sp_buscar_usuario $$

CREATE PROCEDURE sp_buscar_usuario(
    IN p_usuario VARCHAR(100)
)
BEGIN
    SELECT
        id,
        usuario,
        senha
    FROM usuarios
    WHERE usuario = p_usuario
    LIMIT 1;
END $$


DROP PROCEDURE IF EXISTS sp_criar_usuario $$

CREATE PROCEDURE sp_criar_usuario(
    IN p_usuario VARCHAR(100),
    IN p_senha VARCHAR(255)
)
BEGIN
    INSERT INTO usuarios (usuario, senha)
    VALUES (p_usuario, p_senha);

    SELECT
        LAST_INSERT_ID() AS id,
        p_usuario AS usuario;
END $$


DROP PROCEDURE IF EXISTS sp_listar_usuarios $$

CREATE PROCEDURE sp_listar_usuarios()
BEGIN
    SELECT
        id,
        usuario,
        criado_em
    FROM usuarios
    ORDER BY id;
END $$

DELIMITER ;