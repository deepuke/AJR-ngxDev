import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
@Component({
  selector: 'app-ajr-model-child1',
  templateUrl: './ajr-model-child1.component.html',
  styleUrls: ['./ajr-model-child1.component.css']
})
export class AjrModelChild1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(ModalDirective) public modal: ModalDirective;
  public messages: string[];

  public showModal() {
    this.messages = [];
    this.modal.show();
  }
  public handler(type: string, $event: ModalDirective) {
    this.messages.push(`event ${type} is fired${$event.dismissReason ? ', dismissed by ' + $event.dismissReason : ''}`);
  }

}
