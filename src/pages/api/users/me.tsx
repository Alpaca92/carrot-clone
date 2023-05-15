import client from '@/libs/client/client';
import withHandler, { ResponseType } from '@/libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';

interface SessionUser {
  id: number;
}
declare module 'iron-session' {
  interface IronSessionData {
    user: SessionUser;
  }
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  console.log(req.session.user);
  const { id } = req.session.user;
  const profile = await client.user.findUnique({
    where: {
      id,
    },
  });

  res.json({
    ok: true,
    profile,
  });
}

export default withIronSessionApiRoute(withHandler('GET', handler), {
  cookieName: 'carrot-session',
  password: '129if,-f0i1w-di1w0-di192u89012xue9120012emu190u90eu129e129x91uh',
});
