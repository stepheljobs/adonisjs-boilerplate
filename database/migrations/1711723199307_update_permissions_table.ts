import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'update_permissions'

  async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('resource')
      table.json
    })
  }

  async down() {}
}