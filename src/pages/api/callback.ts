import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { code } = req.query;
  console.log('code', code)
  const result = await axios.post('https://mastodon.social/oauth/token', {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    grant_type: 'authorization_code',
    redirect_uri: process.env.REDIRECT_URI,
    code,
    scope: 'read write follow',
  })
  const { access_token } = result.data;
  res.redirect(`/?access_token=${access_token}`)
}

export default handler;