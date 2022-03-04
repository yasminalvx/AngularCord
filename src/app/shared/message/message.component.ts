import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  githubAccount!: any;

  @Input() name!: string;
  @Input() messageDate!: string;
  @Input() message!: string;
  @Input() url_img!: string;
  @Input() username!: string;

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.githubAccount = this.githubAccount = this.localStorage.get('user_activated');

  }

  isUser(): boolean {
    if(this.githubAccount.login == this.username) {
      return true;
    }
    return false;
  }


}
