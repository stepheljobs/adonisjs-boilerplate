import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {

  public async listUsers({ response }: HttpContext) {
    try {
      const users = await User.all()
      return response.status(200).json({ users })
    } catch (error) {
      return response.status(400).json({ message: 'Failed to list users' })
    }
  }

  public async updateUser({ params, request, response }: HttpContext) {
    const { id } = params
    const { email, fullName, password } = request.only(['email', 'fullName', 'password'])

    try {
      let user = await User.find(id)
      if (!user) {
        return response.status(404).json({ message: 'User not found' })
      }

      if (email) {
        user.email = email
      }

      if (fullName) {
        user.fullName = fullName
      }

      if (password) {
        user.password = password
      }

      await user.save()

      return response.status(200).json({ message: 'User updated successfully', user })
    } catch (error) {
      return response.status(400).json({ message: 'Failed to update user' })
    }
  }

  
  public async deleteUser({ params, response }: HttpContext) {
    const { id } = params
    try {
      const user = await User.find(id)
      if (!user) {
        return response.status(404).json({ message: 'User not found' })
      }
      await user.delete()
      return response.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
      return response.status(400).json({ message: 'Failed to delete user' })
    }
  }

  public async createUser({ request, response }: HttpContext) {
    const { fullName, email, password } = request.only(['fullName', 'email', 'password'])

    try {
      const user = await User.create({ fullName, email, password })
      return response.status(201).json({ message: 'User created successfully', user })
    } catch (error) {
      return response.status(400).json({ message: 'Failed to create user' })
    }
  }

  public async me({ auth, response }: HttpContext) {
    
    try {
      const user = await auth.authenticate()
      user.serialize()
      return response.status(201).json({ message: 'Success', user })
    }catch(error) {
      return response.status(400).json({ message: 'Unauthorized' })
    }
  }
}
