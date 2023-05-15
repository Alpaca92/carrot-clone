import client from '@/libs/client/client';
import withHandler, { ResponseType } from '@/libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
    // include: { user: true }, // if you need to include
  });

  if (!exists) res.status(404).end();

  req.session.user = {
    id: exists?.userId,
  };

  await req.session.save();

  res.status(200).end();
}

export default withIronSessionApiRoute(withHandler('POST', handler), {
  cookieName: 'carrot-session',
  password: '129if,-f0i1w-di1w0-di192u89012xue9120012emu190u90eu129e129x91uh',
});
