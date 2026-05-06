const client = require('./client.cjs');

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
  
  console.log('Adding Tables');
  await createTables();
  console.log('Tables Added');

  await client.end();
  console.log('Disconnected to hotelproject DB')
}

initDb();
