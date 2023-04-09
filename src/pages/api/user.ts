import { NextApiRequest, NextApiResponse } from 'next';
import { parseCookies } from 'nookies';
import Mastodon from 'mastodon-api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // 从cookie中读取访问令牌
    const cookies = parseCookies({ req });
    const accessToken = cookies['access_token'];

    if (!accessToken) {
      return res.status(401).send('Unauthorized');
    }

    const client = new Mastodon({
      access_token: accessToken,
      api_url: 'https://mastodon.social/api/v1/',
    });

    const response = await client.get('/accounts/verify_credentials');

    const user = {
      id: response.data.id,
      name: response.data.display_name,
      username: response.data.username,
      avatar: response.data.avatar,
    };

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export default handler;