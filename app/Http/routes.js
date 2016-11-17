'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.group('version1', function () {
  Route.get('/time', function * (request, response) {
      const date = new Date()
      const current_hour = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` 
      response.send(`Time: ${current_hour}`)
  })
  Route.post('/contact', 'ContactController.contact')
  
}).prefix('/api/v1')

Route.any('*', 'WebAppController.render')
