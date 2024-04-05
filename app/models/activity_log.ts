import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ActivityLog extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column()
  declare activity: string | null

  @column()
  declare user: string | null

  @column()
  declare resources: string | null

  @column()
  declare table_identity: string | null

  @column()
  declare name: string | null
}