import client from '@/libs/client/client';
import withHandler, { ResponseType } from '@/libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;

  if (!user) return res.status(400).json({ ok: false });

  const payload = Math.floor(100000 + Math.random() * 90000) + '';
  const token = await client.token.create({
    data: {
      payload, // for test
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: 'anonymous',
            ...user,
          },
        },
      },
    },
  });

  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSG_SID,
      from: process.env.TWILIO_FROM_NUMBER,
      to: process.env.MY_PHONE!, // for test
      body: `Your login token is ${payload}`,
    });

    console.log(message);
  }

  return res.json({ ok: true });
}

export default withHandler('POST', handler);
