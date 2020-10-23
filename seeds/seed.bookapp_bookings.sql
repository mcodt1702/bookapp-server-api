DROP TABLE IF EXISTS bookings;
CREATE TABLE bookings(
id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY ,
users_id	INTEGER REFERENCES users
(id) ON
DELETE CASCADE,
venue_id INTEGER REFERENCES venues
(id) ON
DELETE CASCADE NOT NULL,
booking_date date
);
INSERT INTO bookings(users_id, venue_id, booking_date)
VALUES(null,1,'2020-10-23'),(null,1,'2020-10-23'),(null,2,'2020-10-23'),(null,3,'2020-10-23'),
(null,1,'2020-10-24'),(null,2,'2020-10-24'),(null,3,'2020-10-25')