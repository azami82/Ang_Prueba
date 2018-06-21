import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push("Message prueba"+message);
    
  }

  clear() {
    this.messages = [];
  }
}
