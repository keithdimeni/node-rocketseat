import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

export const app = fastify()

app.register(cookie)

// Cria um Handler/Middleware para todas rotas de forma global, se usado num grupo de rota
// específico cria rota para todas as rotas do grupo
app.addHook('preHandler', async (request) => {
  console.log(`[${request.method}] ${request.url}`)
})

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app.get('/hello', async () => {
  return 'hello'
})
