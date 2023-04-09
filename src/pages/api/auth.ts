import { NextApiRequest, NextApiResponse } from 'next';
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.redirect(
    `https://mastodon.social/oauth/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${process.env.REDIRECT_URI}&lang=zh-CN`,
  );
}

export default handler;