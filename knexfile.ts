/* eslint-disable prettier/prettier */
import type { Knex } from 'knex';

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  stagging: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
  },

  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL, 
    // {
    //   database: 'my_db',
    //   user: 'username',
    //   password: 'password',
    // },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

module.exports = config;

// 'postgres://postgres:pass123@localhost:5432/blog',