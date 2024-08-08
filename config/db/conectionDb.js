import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

/* const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE,POSTGRES_URL, } = process.env;

const pool = new pg.Pool({
  // user: DB_USER,
  // host: DB_HOST,
  // database: DB_DATABASE,
  // password: DB_PASSWORD,
  // allowExitOnIdle: true,
  connectionString: POSTGRES_URL,

}); */

pool.query('SELECT NOW()', (err, res) => {
  res ? console.log('🔋 DB-Connected', res.rows[0].now) : console.log({ err });
});

export default pool;
