import cookie from 'js-cookie';
type key = "token";


export const getCookie = (key: key, req: any) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
}

const getCookieFromBrowser = (key: key) => {
  return cookie.get(key);
}

const getCookieFromServer = (key: key, req: any) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(';')
    .find((cookie: string) => cookie.trim().startsWith(`${key}=`));
  return rawCookie ? rawCookie.split('=')[1] : undefined;
}