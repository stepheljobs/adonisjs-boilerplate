import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Clients extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column()
  declare name: string | null

  @column()
  declare address: string | null

  @column()
  declare tin_no: string | null

  @column()
  declare vendor_code: string | null

  @column()
  declare acronym: string | null

  @column()
  declare is_archieve: boolean | null
}