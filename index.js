const { Client } = require('pg');

require('dotenv').config();

const client = new Client({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASS,
	port: process.env.PORT,
});

client.connect();

console.log("Database connected");

client.query('LISTEN channel');

client.on('notification', async (data) => {
	const payload = JSON.parse(data.payload);
	console.log(payload)
});
