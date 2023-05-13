import { knex as setupKex, Knex } from 'knex'
import { env } from './env'

const databaseClient = env.DATABASE_CLIENT == 'sqlite' ? {
  filename: env.DATABASE_URL,
} : env.DATABASE_URL

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection: databaseClient,
},
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './database/migrations',
  },
}
export const knex = setupKex(config)
