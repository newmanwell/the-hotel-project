const client = require("./client.cjs");

const createHotels = async(hotelName, hotelPrice, hotelDescription) => {
  try {
    await client.query(`
        INSERT INTO hotels (name, price, description)
        VALUES ('${hotelName}', ${hotelPrice}, '${hotelDescription}')
      `);
  } catch(err) {
    console.log(err);
  }
}

module.exports = { createHotels }