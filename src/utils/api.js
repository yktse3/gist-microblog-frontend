import { async } from "rxjs/internal/scheduler/async";

const HEADER_JSON = 'application/json';

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

  makeRequest = async (method, path, queryString, body) => {
    let url = `http://localhost:3100/${path}`;
    const urlParameters = queryString
      ? Object.entries(queryString).map(e => e.join('=')).join('&')
      : '';
    if (urlParameters) {
      url += `?${urlParameters}`;
    }

    const config = {
      method,
      headers: {
        Accept: HEADER_JSON,
        'Content-Type': HEADER_JSON,
      },
    };

    if (method !== 'GET' && body) {
      config.body = JSON.stringify(body);
    }

    try {
      const result = await fetch(url, config);
      const response = await result.json();
      return {
        statusCode: result.status,
        body: response,
      };
    } catch (e) {
      throw e;
    }
  }

  getAccessToken = async ({ code }) => {
    try {
      const response = await this.makeRequest('POST', 'login', {}, { code });
      return response;
    } catch (e) {
      throw e;
    }
  };

  getGists = async (page) => {
    try {
      const response = await this.makeRequest(
        'GET',
        'articles',
        {
          accessToken: sessionStorage.getItem('accessToken'),
          page,
        },
      );
      return response;
    } catch (e) {
      throw e;
    }
  }

  createGist = async (title, content) => {
    try {
      const response = await this.makeRequest(
        'POST',
        'articles',
        {},
        {
          accessToken: sessionStorage.getItem('accessToken'),
          title,
          content,
        },
      );
      return response;
    } catch (e) {
      throw e;
    }
  }

  getComments = async (uri) => {
    try {
      const response = await this.makeRequest(
        'GET',
        'comments',
        {
          uri,
        },
      );
      return response;
    } catch (e) {
      throw e;
    }
  }

  createComment = async (articleID, comment) => {
    try {
      const response = await this.makeRequest(
        'POST',
        'comments',
        {},
        {
          accessToken: sessionStorage.getItem('accessToken'),
          id: articleID,
          content: comment,
        },
      );
      return response;
    } catch (e) {
      throw e;
    }
  }
}

export default new API();
