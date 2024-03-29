import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('role').defaultTo('member').notNullable()
    })
  }

  async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('role')
    })
  }
}