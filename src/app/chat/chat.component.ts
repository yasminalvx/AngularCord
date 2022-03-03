import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from '../shared/local-storage.service';
import { SupabaseService } from '../shared/supabase.service';
import { UserGithubService } from '../shared/user-github.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messageList: Array<Object> = [];

  constructor(
    private localStorage: LocalStorageService,
    private supabase: SupabaseService) { }

  ngOnInit(): void {
    this.supabase.getMessages()
    .then(({ data }) => {
      console.log(data);
      this.updateMessageList(data);
    });


  }

  onLogout() {
    this.localStorage.clear();
  }

  updateMessageList(messages: any) {
    for(let message of messages) {
      this.messageList.push(message);
    }
  }

  getName(message: any) {
    return message.name;
  }

  getMessageDate(message: any) {
    return message.messageDate;
  }

  getMessage(message: any) {
    return message.message;
  }

  getUrlImg(message: any) {
    return message.urlImg;
  }

}
