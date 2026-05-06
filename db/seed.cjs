const client = require('./client.cjs');
const { createHotels } = require('./hotels.cjs');

const deleteTables = async() => {
  try {
    await client.query(`
        DROP TABLE IF EXISTS hotels;
      `)
  } catch(err) {
    console.log(err);
  }
}

const createTables = async() => {
  try {
    await client.query(`
        CREATE TABLE hotels (
          id SERIAL PRIMARY KEY,
          name VARCHAR(30) NOT NULL UNIQUE,
          price INTEGER,
          description VARCHAR(100)
        );
      `)
  } catch(err) {
    console.log(err);
  }
}

const initDb = async() => {
  await client.connect();
  console.log('Connected to hotelproject DB');

  console.log('Deleting Tables');
  await deleteTables();
  console.log('Tables Deleted');
  
  
  console.log('Adding Tables');
  await createTables();
  console.log('Tables Added');

  console.log('Creating Hotels');
  await createHotels('Hotel 1', 10000, 'Hotel 1 Description');
  await createHotels('Hotel 2', 12500, 'Hotel 2 Description');
  await createHotels('Hotel 3', 15000, 'Hotel 3 Description');
  console.log('Hotels Created');

  await client.end();
  console.log('Disconnected to hotelproject DB')
}

initDb();
