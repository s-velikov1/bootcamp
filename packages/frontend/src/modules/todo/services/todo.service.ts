import { HttpService, HttpConfig } from '../../../services/http.service';

export class TodoService extends HttpService {
  async getAllTodos() {
    const config: HttpConfig = {
      url: '/todos'
    };

    const res = await this.get(config);

    return res;
  }

  async getById(todoId: string) {
    const config: HttpConfig = {
      url: `/todos/${todoId}`,
      method: 'GET',
      headers: {
        Authorization: this.getAuthToken()
      }
    };

    const res = await this.get(config);

    return res;
  }

  async createTodo(data: any) {
    const config: HttpConfig = {
      url: '/todos',
      method: 'POST',
      data,
      headers: {
        Authorization: this.getAuthToken()
      }
    };

    const res = await this.post(config);

    return res;
  }

  async updateTodo(todoId: string, data: any) {
    const config: HttpConfig = {
      url: `/todos/${todoId}`,
      method: 'PUT',
      data,
      headers: {
        Authorization: this.getAuthToken()
      }
    };

    const res = await this.put(config);

    return res;
  }

  async deleteTodo(todoId: string) {
    const config: HttpConfig = {
      url: `/todos/${todoId}`,
      method: 'DELETE',
      headers: {
        Authorization: this.getAuthToken()
      }
    };

    const res = await this.delete(config);

    return res;
  }
}

export const defaultTodoService = new TodoService();
