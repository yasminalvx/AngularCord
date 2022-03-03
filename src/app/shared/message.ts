export class Message {
  name: string = '';
  username: string = '';
  messageDate: string = '';
  urlImg: string = '';
  message: string = '';
  urlFig?: string;

  constructor(name: string, username: string, messageDate: string, urlImg: string, message: string, urlFig?: string) {
    this.name = name;
    this.username = username;
    this.messageDate = messageDate;
    this.urlImg = urlImg;
    this.message = message;
    this.urlFig = urlFig;
  }
}
