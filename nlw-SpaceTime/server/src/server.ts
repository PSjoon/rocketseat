import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

// criando API para poder fazer requisicoes http (APIRestFull)

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

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
