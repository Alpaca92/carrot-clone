import { withIronSessionApiRoute } from 'iron-session/next';

interface SessionUser {
  id: number;
}
declare module 'iron-session' {
  interface IronSessionData {
    user?: SessionUser;
  }
}

const cookieOptions = {
  cookieName: 'carrot-session',
  password: process.env.COOKIE_PASSWORD!,
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
