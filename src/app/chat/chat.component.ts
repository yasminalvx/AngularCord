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
  githubAccount!: any;

  constructor(
    private localStorage: LocalStorageService,
    private supabase: SupabaseService) { }

  ngOnInit(): void {
    this.supabase.getMessages()
    .then(({ data }) => {
      // console.log(data);
      this.updateMessageList(data);
    });

    // this.supabase.realTimeMessage();

    // this.realTimeMessage();
  }

  // realTimeMessage() {
  //   this.supabase.realTimeMessage()
  //   .from('messages')
  //   .on('INSERT', (responseLive) => {
  //     console.log("mensagem nova")
  //     // console.log(responseLive);
  //     this.addMessage(responseLive);


  //   })
  //   .subscribe();
  // }

  addMessage(message: any) {
    console.log(message.name);
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

  getUsername(message: any) {
    return message.username;
  }
}
