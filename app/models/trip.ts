import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Trip extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare date: DateTime

  @column()
  declare warehouse_location: string | null

  @column()
  declare trip_no: string // unique

  @column()
  declare plate_no: string

  @column()
  declare driver_name: string | null

  @column()
  declare helper_name: string  | null

  @column()
  declare items: JSON[] | null

  @column()
  declare total_expenses: number |null

  @column()
  declare cash_return: number | null

  @column()
  declare total_toll_fee: number | null

  @column()
  declare status: string | null

  @column()
  declare client_name: string | null
 
  @column.dateTime()
  declare billed_date: DateTime | null

  @column()
  declare billing_status: boolean | null

  @column()
  declare is_archieve: boolean | null

  @column()
  declare trip_image: string[] | null ; //array of json type
}