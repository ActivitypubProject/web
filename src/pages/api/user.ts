import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import cookie from 'cookie';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = req.headers.cookie;
  const parsedCookies = cookie.parse(cookies as string);
  const token = parsedCookies['token'];
  const { data } = await axios.get('https://mastodon.social/api/v1/accounts/verify_credentials', {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  res.send(data);
}

export default handler;