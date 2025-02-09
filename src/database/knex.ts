import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
    }
};

const db = knex(dbConfig);
export default db;
