const CLIENT_ID = 'b77a50cf0d2a3029972c';
const CLIENT_SECRET = 'f29284e62d8c8bdd0fba0b304b7c5c243eec0d88';
const HEADER_ACCEPT_JSON = 'application/json';
const HEADER_ACCEPT_GITHUB_V3 = 'application/vnd.github.v3+json';

const defaultConfig = {
  accessToken: null,
};

class API {
  constructor(config = defaultConfig) {
    this._config = config;
  }

  changeAccessToken = (accessToken) => {
    this._config.accessToken = accessToken;
  }

  getAccessToken = async ({ code }) => {
    const url = 'http://localhost:3100/login';
    const body = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
    };

    const config = {
      method: 'POST',
      headers: {
        Accept: HEADER_ACCEPT_JSON,
        'Content-Type': HEADER_ACCEPT_JSON,
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(body),
    };

    try {
      const result = await fetch(url, config);
      const response = await result.json();
      return response;
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

export default new API();
