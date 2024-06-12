import { PrismaClient } from '@prisma/client'
import { defaultMaxListeners } from 'events'

let prisma: PrismaClient

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = new PrismaClient()
}

prisma = globalForPrisma.prisma

export default prisma
