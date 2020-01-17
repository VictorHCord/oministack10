const { Router } = require('express')

const routes = Router()

routes.get('/', (request , response) => {
  console.log(request.body)
  return response.json({ message: 'vai logo com video porra'});
})

module.exports = routes;