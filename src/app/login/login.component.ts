import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError, take, switchMap, delay } from 'rxjs/operators';
import { AuthService } from '../shared/auth.service';
import { LocalStorageService } from '../shared/local-storage.service';
import { UserGithubService } from '../shared/user-github.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  githubAccount!: Object;
  name: string = '';
  username: string = '';
  url_image: string = `https://github.com/user.png`
  city: string = '';

  constructor(
    private user: UserGithubService,
    private localStorage: LocalStorageService,
    private auth: AuthService
    ) { }

  ngOnInit(): void {
    this.localStorage.clear();
  }

  onClick() {
    if (this.updateUser()) {
      this.auth.userExists = true;
      // console.log(`click: ${this.auth.userExists}`);
      this.localStorage.clear();
      this.localStorage.set('user_activated', this.githubAccount);
    }
  }

  onChange(username: any) {
    this.username = username;
    this.updateUser();
  }

  updateUser() {
    let userExists = true;
    this.user.loadByUsername(this.username)
    .subscribe(
      dados => {
        if(dados) {
          this.githubAccount = dados;
          this.updateGithubAccount(this.githubAccount);
        }
      },
      error => {
        userExists = false;
        console.log('Requisição inválida!');
        this.city = 'Inválido';
        this.username = 'Inexistente';
        this.url_image = `https://github.com/user.png`;
      },
      () => console.log('Requisição completa!')
    );
      return userExists;
  }

  updateGithubAccount(user: any) {
    this.name = user.name;
    this.city = user.location;
    this.username = user.login;
    this.url_image = `https://github.com/${this.username}.png`;
  }
}
