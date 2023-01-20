/* eslint-disable prettier/prettier */
import { Knex } from 'knex';

const tableName = 'posts';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (t) => {
    t.increments('id');
    t.text('title');
    t.text('contents');
    t.string('image');
    t.integer('category_id');
    t.integer('user_id');
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
