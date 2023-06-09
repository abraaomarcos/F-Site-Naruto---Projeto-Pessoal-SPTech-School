CREATE DATABASE naruto;
USE naruto;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45)
);
INSERT INTO usuario VALUES
(DEFAULT, 'Eliezer', 'eliezer@sptech.com', '123456'),
(DEFAULT, 'Jonatas', 'jonatas@sptech.com', '123456'),
(DEFAULT, 'Denis', 'denis@sptech.com', '123456'),
(DEFAULT, 'Michelle', 'michelle@sptech.com', '123456'),
(DEFAULT, 'Rebeca', 'rebeca@sptech.com', '123456'),
(DEFAULT, 'Jonas', 'jonas@sptech.com', '123456'),
(DEFAULT, 'Alao', 'alao@sptech.com', '123456'),
(DEFAULT, 'Dinalva', 'dinalva@sptech.com', '123456'),
(DEFAULT, 'Marcos', 'marcos@sptech.com', '123456'),
(DEFAULT, 'Guiomar', 'guiomar@sptech.com', '123456');

select * from usuario;
CREATE TABLE personalidade(
idPersonalidade INT PRIMARY KEY AUTO_INCREMENT,
nomePersonalidade VARCHAR(45)
);

INSERT INTO personalidade VALUES
(DEFAULT, 'Garra'),
(DEFAULT, 'Foco'),
(DEFAULT, 'Inteligência'),
(DEFAULT, 'Esforço'),
(DEFAULT, 'Raciocínio'),
(DEFAULT, 'Apaixonada'),
(DEFAULT, 'Autoestima'),
(DEFAULT, 'Responsabilidade'),
(DEFAULT, 'Moderação'),
(DEFAULT, 'Generosidade');

CREATE TABLE personagem(
idPersonagem INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nomePersonagem VARCHAR(45) NOT NULL,
fkUsuario INT NOT NULL,
CONSTRAINT fkUser FOREIGN KEY(fkUsuario)
REFERENCES usuario(idUsuario),
fkPersonalidade int NOT NULL,
CONSTRAINT fkPersonalidadeUser FOREIGN KEY(fkPersonalidade)
REFERENCES personalidade(idPersonalidade)
);
SELECT * FROM personagem JOIN usuario ON idUsuario = fkUsuario;
SELECT usuario.nome, personagem.nomePersonagem from usuario JOIN personagem ON idUsuario = fkUsuario;


INSERT INTO personagem VALUES
(DEFAULT, 'Naruto', 1, 1),
(DEFAULT, 'Sasuke', 2, 2),
(DEFAULT, 'Sakura', 3, 3),
(DEFAULT, 'Rock Lee', 4, 4),
(DEFAULT, 'Kakashi', 5, 5),
(DEFAULT, 'Hinata', 6, 6),
(DEFAULT, 'Neji', 7, 7),
(DEFAULT, 'Tsunade', 8, 8),
(DEFAULT, 'Jiraya', 9, 9),
(DEFAULT, 'Gaara', 10, 10);

SELECT * FROM usuario JOIN personagem ON idUsuario = fkUsuario;
SELECT * FROM usuario JOIN personagem ON idUsuario = fkUsuario JOIN personalidade ON idPersonalidade = fkPersonalidade;

SELECT * FROM usuario;
use naruto;
SELECT * FROM usuario;
select * from personagem;

SELECT * FROM usuario JOIN personagem ON idUsuario = fkUsuario;




