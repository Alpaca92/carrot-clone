import client from '@/libs/client/client';
import withHandler from '@/libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;

  if (email) {
    let user = await client.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      console.log('user found');
    }

    if (!user) {
      console.log('did not found and will create a new user');
      user = await client.user.create({
        data: {
          name: 'Anonymous',
          email,
        },
      });
    }

    console.log(user);
  }

  if (phone) {
    let user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });

    if (user) {
      console.log('user found');
    }

    if (!user) {
      console.log('did not found and will create a new user');
      user = await client.user.create({
        data: {
          name: 'Anonymous',
          phone: +phone,
        },
      });
    }

    console.log(user);
  }

  return res.status(200).end();
}

export default withHandler('POST', handler);
