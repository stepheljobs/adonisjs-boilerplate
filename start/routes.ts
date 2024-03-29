/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import AuthenticationController from '#controllers/authentication_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/login', [AuthenticationController, 'login'])
router.post('/register', [AuthenticationController, 'register'])
router.get('/me', [UsersController, 'me']).use(middleware.auth())
router.get('/users', [UsersController, 'listUsers']).use(middleware.auth())
router.put('/users/:id', [UsersController, 'updateUser']).use(middleware.auth())

