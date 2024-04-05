import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Voucher extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare date: DateTime

  @column()
  declare voucher_no: string // unique

  @column()
  declare trip_no: string | null

  @column()
  declare plate_no: string | null

  @column()
  declare destination: string | null

  @column()
  declare first_received_by: string

  @column()
  declare first_amount: number 

  @column()
  declare second_received_by: string | null

  @column()
  declare second_amount: number | null

  @column()
  declare approved_by: string | null

  @column()
  declare status: string | null

  @column()
  declare comment: string[] | null

  @column()
  declare is_archieve: boolean

  @column()
  declare attached_liquidation: JSON | null

  @column()
  declare voucher_image: JSON[] | null

  @column()
  declare is_liquidated: boolean | null
}