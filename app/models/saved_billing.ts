import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class SavedBilling extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column()
  declare billing_items: JSON[] | null

  @column()
  declare is_sent: boolean | null

  @column()
  declare billing_name: string | null

  @column()
  declare client_name: string | null

  @column()
  declare soa: string | null

  @column()
  declare si: string | null

  @column()
  declare period_cover: string[] | null
}