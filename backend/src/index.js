import { server } from './server'
import './database'

server.listen().then(({ url }) => {
  console.log('Server ready at', url)
})
