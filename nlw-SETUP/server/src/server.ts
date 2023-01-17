import FastiFy from "fastify"
import cors from "@fastify/cors"
import { PrismaClient } from '@prisma/client'

const app = FastiFy()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', async () => {
    const habits = await prisma.habit.findMany()

    return "hello word"
})

app.listen({
    port: 5555,
}).then(() => {
    console.log("server running")
})
