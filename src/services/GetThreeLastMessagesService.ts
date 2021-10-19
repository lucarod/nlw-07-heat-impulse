import prismaClient from '../prisma'
import { io } from '../app'

class GetThreeLastMessagesService {
  async execute() {
    const messages = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: 'desc'
      },
      include: {
        user: true
      }
    })

    return messages;
  }
}

export { GetThreeLastMessagesService }