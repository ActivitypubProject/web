declare module 'mastodon-api' {
  interface MastodonOptions {
    access_token?: string;
    api_url?: string;
  }

  interface MastodonResponse {
    data: any;
    resp: any;
  }

  class Mastodon {
    constructor(options: MastodonOptions);
    get(path: string, params?: any): Promise<MastodonResponse>;
    post(path: string, params?: any): Promise<MastodonResponse>;
    put(path: string, params?: any): Promise<MastodonResponse>;
    delete(path: string, params?: any): Promise<MastodonResponse>;
  }

  export default Mastodon;
}