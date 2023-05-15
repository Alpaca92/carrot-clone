import client from '@/libs/client/client';
import withHandler, { ResponseType } from '@/libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import { withApiSession } from '@/libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
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

export default withApiSession(withHandler('GET', handler));
