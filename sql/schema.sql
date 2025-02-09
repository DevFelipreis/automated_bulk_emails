CREATE DATABASE mailingdb;


CREATE TABLE mailing_list (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_cadastro TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO mailing_list (nome, email) 
VALUES ('João Silva', 'joao.silva@email.com');

INSERT INTO mailing_list (nome, email) 
VALUES ('Maria Oliveira', 'maria.oliveira@email.com');
