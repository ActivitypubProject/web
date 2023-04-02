import { getAuthUrl } from "@/utils/Auth";
import { NextApiRequest, NextApiResponse } from "next/types";

const authHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const authUrl = getAuthUrl("mastodon.social");
  res.redirect(authUrl);
}

export default authHandler;