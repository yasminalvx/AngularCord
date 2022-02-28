import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserGithubService {

  private readonly API = `https://api.github.com/users`;

  constructor(private http: HttpClient) { }

  loadByUsername(username: string) {
    return this.http.get(`${this.API}/${username}`).pipe(take(1));
  }
}
