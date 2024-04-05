import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Rate extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare date: DateTime

  @column()
  declare unique_identifier: string | null

  @column()
  declare route_code: string | null

  @column()
  declare route_description: string | null

  @column()
  declare truck_type: string | null

  @column()
  declare client_name: string | null

  @column()
  declare shipment_type: string | null

  @column()
  declare plant: string | null

  @column()
  declare category: string | null

  @column()
  declare is_customer_delivery: boolean | null

  @column()
  declare rate: number | null

  @column()
  declare two_way_distance: number | null

  @column()
  declare fuel_consumption: number | null

  @column()
  declare actual_fuel_consumption: number | null

  @column()
  declare pump_price: number | null

  @column()
  declare fuel_cost: number | null

  @column()
  declare total_rate: number | null

  @column.dateTime()
  declare start_fuel_period: DateTime | null

  @column.dateTime() 
  declare end_fuel_period: DateTime | null
  
  @column()
  declare is_archieve: boolean | null
}