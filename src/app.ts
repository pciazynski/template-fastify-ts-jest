import axios from 'axios'
import fastify from 'fastify'

function build(opts = {}) {
  const app = fastify(opts)

  app.get('/users', async (): Promise<User[]> => {
    return (await axios.get('https://jsonplaceholder.typicode.com/users/veryfslkfsdlkfjdslkjf')).data
  })

  app.get('/test', (request, reply) => {
    reply.code(200).send('pass')
  })

  return app
}

export default build
