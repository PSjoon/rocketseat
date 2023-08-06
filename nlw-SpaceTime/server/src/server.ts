import 'dotenv/config'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import fastatic from '@fastify/static'
import { uploadRoutes } from './routes/uploads'
import { resolve } from 'path'

const app = fastify()

app.register(memoriesRoutes)
app.register(multipart)
app.register(authRoutes)
app.register(uploadRoutes)
app.register(cors, { origin: true })
app.register(jwt, { secret: 'spacetime' })

app.register(fastatic, {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads/',
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('hello world')
  })
