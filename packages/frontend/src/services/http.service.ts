import axios, { AxiosRequestConfig, Axios } from 'axios';
import { ROUTER_KEYS } from '../modules/common/consts/app-keys.const';

export type HttpConfig = AxiosRequestConfig & { url: string };

export class HttpService {
  public baseUrl: string;

  public fetchingService: Axios;

  constructor(baseUrl = process.env.REACT_APP_SERVER_URL, fetchingService = axios) {
    this.baseUrl = baseUrl || '';
    this.fetchingService = fetchingService;
  }

  getAuthToken() {
    const token = localStorage.getItem(ROUTER_KEYS.LOGIN_TOKEN_NAME);

    return `Bearer ${token}`;
  }

  private getFullApiUrl(url: string): string {
    return `${this.baseUrl}/api${url}`;
  }

  private extractUrlAndDataFromConfig(config: HttpConfig) {
    const { data, url, ...configWithoutDataAndUrl } = config;
    return configWithoutDataAndUrl;
  }

  get(config: HttpConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers
      };
    }
    return this.fetchingService.get(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  post(config: HttpConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers
      };
    }
    return this.fetchingService.post(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  put(config: HttpConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers
      };
    }
    return this.fetchingService.put(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  delete(config: HttpConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers
      };
    }
    return this.fetchingService.delete(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }
}
