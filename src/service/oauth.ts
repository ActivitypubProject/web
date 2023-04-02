import axios from "axios"

//TODO: 获取code
export const getAuthCode = async () => {
  const response = await axios.get('https://mastodon.social/oauth/authorize', {
    params: {
      client_id: process.env.CLIENT_ID,
      response_type: 'code',
      redirect_uri: process.env.REDIRECT_URI,
      lang: 'zh-CN',
    }
  });
  return response;
}