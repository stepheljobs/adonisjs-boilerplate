import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class PalletIssuance extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare date: DateTime

  @column()
  declare warehouse_location: string | null

  @column()
  declare pallet_issuance_no: string // unique

  @column()
  declare trucker: string | null

  @column()
  declare ref_no: string | null

  @column()
  declare driver: string  | null

  @column()
  declare plate_no: string | null

  @column()
  declare pallet_issued: JSON[] | null

  @column() 
  declare pallet_replaced: JSON[] | null

  @column()
  declare trip_no: string

  @column()
  declare approved_by: string[] | null

  @column()
  declare status: string | null

  @column() 
  declare comment: JSON[] | null

  @column()
  declare is_archieve: boolean | null

  @column()
  declare pallet_issuance_image: string[] | null ; //array of json type

}