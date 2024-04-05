import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class DeliveryReceipt extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare date: DateTime

  @column()
  declare deliver_to: string | null

  @column()
  declare address: string | null

  @column()
  declare tin: string | null

  @column()
  declare plate_no: string | null
 
  @column()
  declare delivery_receipt_no: string // unique

  @column()
  declare checked_by: string | null

  @column() 
  declare trucking: string | null

  @column()
  declare custom_code: string | null

  @column()
  declare hauler: string | null

  @column()
  declare ref_so_no: string | null

  @column()
  declare ref_po_no: string | null

  @column()
  declare warehouse_location: string | null

  @column()
  declare trip_no: string

  @column()
  declare status: string | null

  @column() 
  declare approved_by: string[] | null; // Change type to string array

  @column()
  declare items: JSON[] | null //array of json type

  @column()
  declare comment:JSON[] | null

  @column()
  declare is_archieve: boolean | null

  @column()
  declare delivery_receipt_image: string[] | null; //array of json type

}