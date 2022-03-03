import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  supabase: SupabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);

  constructor() { }

  async addMessage(message: Message) {
    const { data, error } = await this.supabase
      .from<Message>('messages')
      .insert(message)
    return {data, error};
  }

  async getMessages() {
    return this.supabase
      .from('messages')
      .select('*')
      .order('id', { ascending: false });
  }
}
