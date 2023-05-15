import client from '@/libs/client/client';
import mail from '@sendgrid/mail';
import withHandler, { ResponseType } from '@/libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

mail.setApiKey(process.env.SENDGRID_KEY!);
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone } : email ? { email } : null;

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

  // if (phone) {
  //   const message = await twilioClient.messages.create({
  //     messagingServiceSid: process.env.TWILIO_MSG_SID,
  //     from: process.env.TWILIO_FROM_NUMBER,
  //     to: process.env.MY_PHONE!, // for test
  //     body: `Your login token is ${payload}`,
  //   });

  //   console.log(message);
  // } else if (email) {
  //   const email = await mail.send({
  //     from: 'be.minimal.o.o9@gmail.com',
  //     to: 'zxcvbnm5288@naver.com',
  //     subject: 'Your carrot market verification Email',
  //     text: `your token is ${payload}`,
  //     html: `<strong>your token is ${payload}</strong>`,
  //   });

  //   console.log(email);
  // }

  return res.json({ ok: true });
}

export default withHandler('POST', handler);
