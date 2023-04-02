export const getAuthUrl = (server: string) => (`https://${server}/oauth/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${process.env.REDIRECT_URI}&lang=zh-CN`);
