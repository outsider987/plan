create table plan (
id INT(11) NOT NULL AUTO_INCREMENT, 
name varchar(200) NOT NULL  ,
general boolean NOT NULL default false, 
specialist boolean NOT NULL default false, 
physiotherapy boolean NOT NULL default false,
others boolean NOT NULL default false,
PRIMARY KEY (id));

insert plan (name,general,specialist, physiotherapy,others) 
VALUES('premium',true,true,true,true);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 't52045204';