import { Message } from './../message';
import { Component, OnInit } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { LocalStorageService } from '../local-storage.service';
import { environment } from 'src/environments/environment';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-send-image',
  templateUrl: './send-image.component.html',
  styleUrls: ['./send-image.component.css']
})
export class SendImageComponent implements OnInit {

  githubAccount!: any;

  constructor(
    private localStorage: LocalStorageService,
    private supabase: SupabaseService
  ) { }

  ngOnInit(): void {
    this.githubAccount = this.localStorage.get('user_activated');
    // console.log(this.githubAccount);
  }

  onClick(message: any) {
    let date = new Date();
    let messageData = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    // console.log(messageData);

    let message_obj = new Message(
      this.githubAccount.name,
      this.githubAccount.login,
      messageData,
      this.githubAccount.avatar_url,
      message,
      ''
    )
    if(message != '') {
      this.supabase.addMessage(message_obj);
    }
  }
}
