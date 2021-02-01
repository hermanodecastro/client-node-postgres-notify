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

client.query('LISTEN blockchain');

client.on('notification', function(data) {
    console.log(data.payload);
});
