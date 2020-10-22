CREATE TABLE users (	
id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
name varchar
(50),
email	varchar
(25),
password	varchar
(255)
);

CREATE TABLE venues(	
id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
name varchar
(50),
email	varchar
(50),
password	varchar
(255),
description	varchar
(255)

);


CREATE TABLE bookings(
id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY ,
users_id	INTEGER REFERENCES users
(id) ON
DELETE CASCADE NOT NULL,
venue_id INTEGER REFERENCES venues
(id) ON
DELETE CASCADE NOT NULL,
booking_date DATE NOT NULL,
status VARCHAR(50)
);
