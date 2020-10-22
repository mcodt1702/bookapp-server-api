const knex = require("knex");

const BookingService = {
  getAllBookings(knex) {
    return knex.select("*").from("bookings");
  },

  insertBooking(knex, newBooking) {
    return knex
      .insert(newBooking)
      .into("bookings")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
};

module.exports = BookingService;