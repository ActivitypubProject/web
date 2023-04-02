
import { NextApiRequest, NextApiResponse } from "next/types";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;
  const { data } = await axios.post("https://mastodon.social/oauth/token", {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    grant_type: "authorization_code",
    code: query.code,
    redirect_uri: process.env.REDIRECT_URI,
  })

  const token = data.access_token;
  res.setHeader('Set-Cookie', `token=${token}; Path=/`);
  res.redirect("/");
}

export default handler;