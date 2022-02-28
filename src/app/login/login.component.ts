import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, take, switchMap, delay } from 'rxjs/operators';
import { UserGithubService } from '../shared/user-github.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  githubAccount!: Object;
  username: string = 'yasminalvx';
  url_image: string = `https://github.com/${this.username}.png`
  city: string = 'João Pessoa - PB';

  constructor(private user: UserGithubService) { }

  ngOnInit(): void {

  }

  onChange(username: any) {
    this.username = username;
    this.updateUser();
  }

  onClick() {
    // this.updateUser();
  }

  updateUser() {
    this.user.loadByUsername(this.username)
    .subscribe(
      dados => {
        if(dados) {
          this.githubAccount = dados;
          this.updateGithubAccount(this.githubAccount);
        }
      },
      error => {
        console.log('Requisição inválida!');
        this.city = 'Inválido';
        this.username = 'Inexistente';
        this.url_image = `https://github.com/user.png`;
      },
      () => console.log('Requisição completa!')
    );
  }

  updateGithubAccount(user: any) {
    console.log(user);
    this.city = user.location;
    this.username = user.login;
    this.url_image = `https://github.com/${this.username}.png`;
  }


}
