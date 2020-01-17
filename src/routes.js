const { Router } = require('express')

const routes = Router()

routes.post('/devs', (request , response) => {
  const { github_username } = request.body;
  return response.json({ message: 'vai logo com video porra'});
})

module.exports = routes;