-- CREATE DATABASE naruto;
-- USE naruto;

CREATE TABLE personagem(
idPersonagem INT,
nomePersonagem VARCHAR(45),
descricao VARCHAR(100),
energia DOUBLE,
fase VARCHAR(45),
constraint chkFase CHECK(fase in('genin', 'chunin', 'jonin')),
nivel VARCHAR(45),
constraint chkNivel CHECK(nivel in('elite', 'kage'))
);

 CREATE TABLE usuario(
 idUsuario INT PRIMARY KEY AUTO_INCREMENT,
 nomeUsuario VARCHAR(45),
 email VARCHAR(45),
 senha VARCHAR(45),
 fkPersonagem INT
 );
 ALTER TABLE  personagem ADD CONSTRAINT chavePrimaria PRIMARY KEY(idPersonagem);
 ALTER TABLE usuario ADD CONSTRAINT fkPersonagUsua FOREIGN KEY(fkPersonagem) REFERENCES personagem(idPersonagem);
