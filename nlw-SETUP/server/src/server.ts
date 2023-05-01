import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";


const port = 3333

const app = Fastify()
const prisma = new PrismaClient

/**
 * 1 para bloqueio de acesso, somente os dados dentro de origem podem ter acesso:
 * * app.register(cors. {
 * * origin: ['http://localhost:3000]})
 */


app.register(cors)

app.get('/', async () => {

    const habits = await prisma.habit.findMany({
        where: {
            title: { startsWith: 'beber' }
        }
    })

    return habits
})

app.listen({ port }).then(() => {
    console.log('server on')
})