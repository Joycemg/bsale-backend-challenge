import { Sequelize } from 'sequelize';

/* Creating a new instance of Sequelize and connecting to the database. */
const database = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
  },
);

export default database;
