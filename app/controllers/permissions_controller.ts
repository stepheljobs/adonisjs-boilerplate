import type { HttpContext } from '@adonisjs/core/http'
import Permission from "#models/permission"

export default class PermissionsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    try {
        const permissions = await Permission.all()
        return response.status(200).json(permissions)
      } catch (error) {
        return response.status(500).json({ error: 'Failed to fetch permissions' })
      }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    try {
      const data = request.only(['ability'])
      const permission = await Permission.create(data)
      return response.status(201).json(permission)
    } catch (error) {
      return response.status(500).json({ error: 'Failed to create permission' })
    }
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    try {
      const permission = await Permission.find(params.id)

      if (!permission) {
        return response.status(404).json({ error: 'Permission not found' })
      }

      return response.status(200).json(permission)
    } catch (error) {
      return response.status(500).json({ error: 'Failed to fetch permission' })
    }
  }


  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    try {
      const permission = await Permission.find(params.id)

      if (!permission) {
        return response.status(404).json({ error: 'Permission not found' })
      }

      const data = request.only(['ability'])
      permission.merge(data)
      await permission.save()

      return response.status(200).json(permission)
    } catch (error) {
      return response.status(500).json({ error: 'Failed to update permission' })
    }
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    try {
      const permission = await Permission.find(params.id)

      if (!permission) {
        return response.status(404).json({ error: 'Permission not found' })
      }

      await permission.delete()

      return response.status(204).json(null)
    } catch (error) {
      return response.status(500).json({ error: 'Failed to delete permission' })
    }
  }
}