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
import PermissionsController from '#controllers/permissions_controller'
import UserPermissionsController from '#controllers/user_permissions_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/login', [AuthenticationController, 'login'])
router.post('/register', [AuthenticationController, 'register'])
router.get('/me', [UsersController, 'me']).use(middleware.auth())

router.get('/users', [UsersController, 'list']).use(middleware.auth())
router.put('/users/:id', [UsersController, 'update']).use(middleware.auth())
router.post('/users', [UsersController, 'create']).use(middleware.auth())
router.delete('/users/:id', [UsersController, 'delete']).use(middleware.auth())

router.resource('permissions', PermissionsController).apiOnly().use('*', middleware.auth())
router.resource('user-permissions', UserPermissionsController).apiOnly().use('*', middleware.auth())



