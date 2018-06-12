DROP DATABASE IF EXISTS game_of_sql;
CREATE DATABASE game_of_sql;

\c game_of_sql;

CREATE TABLE houses (
  house_id SERIAL PRIMARY KEY, 
  house_name VARCHAR (30) NOT NULL, 
  sigil_img VARCHAR(2083),
  words TEXT NOT NULL,
  seat VARCHAR(50), 
  region VARCHAR(50)
);

CREATE TABLE religions (
  religion_id SERIAL PRIMARY KEY, 
  name VARCHAR(50) NOT NULL,
  type VARCHAR(50) NOT NULL,
  god VARCHAR (50)
);

CREATE TABLE people (
  people_id SERIAL PRIMARY KEY,
  name VARCHAR (30) NOT NULL,
  picture_url VARCHAR (2083),
  dead BOOLEAN NOT NULL,
  house_id INT NOT NULL,
  religion_id INT,
  FOREIGN KEY (house_id) REFERENCES houses(id),
  FOREIGN KEY (religion_id) REFERENCES religions(id)
);

INSERT INTO houses (house_name, sigil_img, words, seat, region)
  VALUES ('Stark', 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142', 'Winter is Coming', 'Winterfell', 'The North'), ('Lannister','http://tu9srvbirvvtmjikdmlnbmv0dguud2lraweubm9jb29rawuubmv0.g00.wikia.com/g00/2_Z2FtZW9mdGhyb25lcy53aWtpYS5jb20%3D_/TU9SRVBIRVVTMjIkaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvZ2FtZW9mdGhyb25lcy9pbWFnZXMvOC84YS9Ib3VzZS1MYW5uaXN0ZXItTWFpbi1TaGllbGQuUE5HL3JldmlzaW9uL2xhdGVzdD9jYj0yMDE3MDEwMTA5NTM1NyZpMTBjLm1hcmsuaW1hZ2UudHlwZQ%3D%3D_$/$/$/$/$/$/$/$', 'Hear me roar', 'Casterly Rock', 'The Westerlands'), ('Baratheon', 'http://tu9srvbirvvtmjikdmlnbmv0dguud2lraweubm9jb29rawuubmv0.g00.wikia.com/g00/2_Z2FtZW9mdGhyb25lcy53aWtpYS5jb20%3D_/TU9SRVBIRVVTMjIkaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvZ2FtZW9mdGhyb25lcy9pbWFnZXMvNC80YS9Ib3VzZS1CYXJhdGhlb24tb2YtRHJhZ29uc3RvbmUtTWFpbi1TaGllbGQuUE5HL3JldmlzaW9uL2xhdGVzdD9jYj0yMDE3MDUxOTAwMzQxNw%3D%3D_$/$/$/$/$/$/$/$', 'Ours is the fury', 'Dragonstone', 'Blackwater Bay'), ('Targaryen', 'http://tu9srvbirvvtmjikdmlnbmv0dguud2lraweubm9jb29rawuubmv0.g00.wikia.com/g00/2_Z2FtZW9mdGhyb25lcy53aWtpYS5jb20%3D_/TU9SRVBIRVVTMjIkaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvZ2FtZW9mdGhyb25lcy9pbWFnZXMvNC80My9Ib3VzZS1UYXJnYXJ5ZW4tTWFpbi1TaGllbGQuUE5HL3JldmlzaW9uL2xhdGVzdD9jYj0yMDE3MDUxMDIzNTMyMCZpMTBjLm1hcmsuaW1hZ2UudHlwZQ%3D%3D_$/$/$/$/$/$/$/$', 'Fire and blood', null, 'Essos'), ('Greyjoy', 'http://tu9srvbirvvtmjikdmlnbmv0dguud2lraweubm9jb29rawuubmv0.g00.wikia.com/g00/2_Z2FtZW9mdGhyb25lcy53aWtpYS5jb20%3D_/TU9SRVBIRVVTMjIkaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvZ2FtZW9mdGhyb25lcy9pbWFnZXMvOC84Ni9Ib3VzZS1HcmV5am95LU1haW4tU2hpZWxkLlBORy9yZXZpc2lvbi9sYXRlc3Q%2FY2I9MjAxNzA1MjMwMTU4MzYmaTEwYy5tYXJrLmltYWdlLnR5cGU%3D_$/$/$/$/$/$/$/$', 'We do not sow', 'Pyke', 'Iron Islands'), ('Tyrell', null, 'Growing strong', 'Highgarden', 'The Reach'), ('Martell', 'http://tu9srvbirvvtmjikdmlnbmv0dguud2lraweubm9jb29rawuubmv0.g00.wikia.com/g00/2_Z2FtZW9mdGhyb25lcy53aWtpYS5jb20%3D_/TU9SRVBIRVVTMjIkaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvZ2FtZW9mdGhyb25lcy9pbWFnZXMvYy9jZi9Ib3VzZS1UeXJlbGwtTWFpbi1TaGllbGQuUE5HL3JldmlzaW9uL2xhdGVzdD9jYj0yMDE3MDEwODE2MzAzNSZpMTBjLm1hcmsuaW1hZ2UudHlwZQ%3D%3D_$/$/$/$/$/$/$/$', 'Unbowed, unbent, unbroken', 'Sunspear', 'Dorne'), ('Tarly', null, 'First in battle', 'Horn Hill', 'The Reach');

INSERT INTO religions (name, type, god)
  VALUES ('Old Gods of the Forest', 'animistic', null), ('Faith of the Seven', 'monotheistic', 'The Seven'), ('The Drowned God', 'monolatristic', 'The Drowned God'), ('The Lord of Light', 'monotheistic', 'The Red God'), ('Faceless Men', 'syncretic monotheistic', 'The Many Faced God');

INSERT INTO people (name, picture_url, dead, house_id, religion_id)
  VALUES ('Ned Stark', 'https://upload.wikimedia.org/wikipedia/en/5/52/Ned_Stark-Sean_Bean.jpg', true, 1, 1), ('Catelyn Stark', 'https://upload.wikimedia.org/wikipedia/en/2/25/Catelyn_Stark-Michelle_Fairley_S3.jpg', true, 1, 2), ('Arya Stark', 'https://upload.wikimedia.org/wikipedia/en/3/39/Arya_Stark-Maisie_Williams.jpg', false, 1, 5), ('Sansa Stark', 'https://upload.wikimedia.org/wikipedia/en/7/74/SophieTurnerasSansaStark.jpg', false, 1 , 2), ('Jon Snow', 'https://upload.wikimedia.org/wikipedia/en/f/f0/Jon_Snow-Kit_Harington.jpg', true, 1, 1), ('Tyrion Lannister', 'https://upload.wikimedia.org/wikipedia/en/5/50/Tyrion_Lannister-Peter_Dinklage.jpg', false, 2, null), ('Jaime Lannister', 'https://upload.wikimedia.org/wikipedia/en/b/b4/Jaime_Lannister-Nikolaj_Coster-Waldau.jpg', false, 2, 2), ('Cersei Lannister', 'https://upload.wikimedia.org/wikipedia/en/9/94/Cersei_Lannister-Lena_Headey.jpg', false, 2, 2), ('Tywin Lannister', 'https://upload.wikimedia.org/wikipedia/en/c/c6/Tywin_Lannister-Charles_Dance.jpg', true, 2, null), ('Daenerys Targaryen', 'https://upload.wikimedia.org/wikipedia/en/0/0d/Daenerys_Targaryen_with_Dragon-Emilia_Clarke.jpg', false, 3, null), ('Viserys Targaryen', null, true, 3, null), ('Stannis Baratheon', 'https://upload.wikimedia.org/wikipedia/en/0/05/Stannis_Baratheon-Stephen_Dillane.jpg', true, 4, 4), ('Theon Greyjoy', 'https://upload.wikimedia.org/wikipedia/en/5/51/Theon_Greyjoy-Alfie_Allen.jpg', false, 5, 3), ('Yara Greyjoy', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/yara-ellaria-kiss-1500993584.jpg', false, 5, 3), ('Balon Greyjoy', 'http://assets2.ignimgs.com/2016/05/02/balongreyjoyjpg-652c93_1280w.jpg', true, 5, 3), ('Olenna Tyrell', 'https://upload.wikimedia.org/wikipedia/en/d/da/Olenna_Tyrell-Diana_Rigg.jpg', false, 6, 2), ('Margaery Tyrell', 'https://upload.wikimedia.org/wikipedia/en/8/84/Margery_Tyrell-Natalie_Dormer.jpg', false, 6, 2), ('Oberyn Martell', 'https://upload.wikimedia.org/wikipedia/en/a/ac/Oberyn_Martell-Pedro_Pascal.jpg', true, 7, 2), ('Doran Martell', 'https://winteriscoming.net/wp-content/blogs.dir/385/files/2015/03/1Doran.jpg', false, 7, 2), ('Samwell Tarly', 'https://upload.wikimedia.org/wikipedia/en/4/4d/Samwell_Tarly-John_Bradley.jpg', false, 7, 2), ('Randyll Tarly', null, false, 7, 2);


