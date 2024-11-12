import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../../list-todos/list-todos.component";
import {TODO_JPA_API_URL} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) {
  }


  retrieveAllTodos(name: string) {
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${name}/todos`);
  }

  retrieveTodo(username: string, id: number) {
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  deleteTodo(username: string, id: number) {
    return this.http.delete<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: Todo) {
    return this.http.put<Todo>(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`,
      todo);
  }

  createTodo(username: string, todo: Todo) {
    return this.http.post<Todo>(
      `${TODO_JPA_API_URL}/users/${username}/todos`,
      todo);
  }

}
