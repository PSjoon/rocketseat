import 'dotenv/config'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

const app = fastify()

app.register(memoriesRoutes)
app.register(authRoutes)
app.register(cors, { origin: true })
app.register(jwt, { secret: 'spacetime' })

app.get('/hello', () => {
  return 'hello world'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('hello world')
  })
