import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthenticationController {
  public async login({ request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    try {
      const user = await User.verifyCredentials(email, password)
      const token = await User.accessTokens.create(user)
      // const token = await User.accessTokens.create(user, ['',''])
      const userJSON = user.serialize()
      return response.status(200).json({ userJSON, token })
    } catch (error) {
      return response.status(401).json({ message: 'Invalid credentials2' })
    }
  }

  public async register({ request, response }: HttpContext) {
    const { email, password, role } = request.only(['email', 'password', 'role'])

    try {
      const userRole = role || 'member'
      const user = await User.create({ email, password, role: userRole })
      return response.status(201).json({ message: 'User registered successfully', user })
    } catch (error) {
      return response.status(400).json({ message: 'Failed to register user' })
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
