import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

client.user.create({
  data: {
    name: 'totoro',
    email: 'totoro@gmail.com',
  },
});

export default client;
