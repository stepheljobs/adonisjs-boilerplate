import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Waybill extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare date: DateTime

  @column()
  declare plate_no: string

  @column()
  declare truck_type: string | null

  @column()
  declare waybill_no: string  //unique

  @column()
  declare driver_name: string | null

  @column()
  declare helper_name: string | null

  @column()
  declare origin: string

  @column()
  declare destination: string | null

  @column.dateTime()
  declare arrival_origin: DateTime

  @column.dateTime()
  declare arrival_destination: DateTime

  @column.dateTime()
  declare start_loading: DateTime

  @column.dateTime()
  declare start_unloading: DateTime

  @column.dateTime()
  declare finish_loading: DateTime

  @column.dateTime()
  declare finish_unloading: DateTime

  @column.dateTime()
  declare origin_docs_release: DateTime

  @column.dateTime()
  declare destination_docs_release: DateTime

  @column.dateTime()
  declare origin_exit: DateTime

  @column.dateTime()
  declare destination_exit: DateTime

  @column()
  declare trip_no: string

  @column()
  declare approved_by: string[] | null

  @column()
  declare status: string | null

  @column()
  declare comment: JSON[] | null

  @column()
  declare trip_type: string | null

  @column()
  declare dr_no: string | null

  @column.dateTime()
  declare origin_received: DateTime

  @column.dateTime()
  declare destination_received: DateTime

  @column()
  declare is_archieve: boolean

  @column()
  declare waybill_image: JSON[] | null

  @column()
  declare rate_unique_identifier: string




}