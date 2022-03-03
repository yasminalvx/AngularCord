import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() name!: string;
  @Input() messageDate!: string;
  @Input() message!: string;
  @Input() url_img!: string;
  @Input() username!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
