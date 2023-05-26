import { HttpService, HttpConfig } from '../../../services/http.service';

export class AuthService extends HttpService {
  async login(data: object) {
    const config: HttpConfig = {
      url: '/auth/login',
      method: 'POST',
      data
    };

    return this.post(config);
  }

  async register(data: object) {
    const config: HttpConfig = {
      url: '/user',
      method: 'POST',
      data
    };

    return this.post(config);
  }

  async resetPassword(data: object) {
    const config: HttpConfig = {
      url: '/auth/forgot-password',
      method: 'POST',
      data
    };

    return this.post(config);
  }

  async getCurrentUser() {
    const config: HttpConfig = {
      url: '/user/current',
      method: 'GET',
      headers: {
        Authorization: this.getAuthToken()
      }
    };

    return this.get(config);
  }

  async checkAuth() {
    const config: HttpConfig = {
      url: '/auth',
      method: 'GET',
      headers: {
        Authorization: this.getAuthToken()
      }
    };

    return this.get(config);
  }
}

export const defaultAuthService = new AuthService();
