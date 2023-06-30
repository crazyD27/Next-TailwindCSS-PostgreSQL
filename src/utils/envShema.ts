import { z } from 'zod'

const envSchema = z.object({
  SECRET: z.string(),
})

export const env = envSchema.parse(process.env)
