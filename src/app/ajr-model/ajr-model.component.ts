import { Component, OnInit, ViewChild } from '@angular/core';
import { AjrModelChild1Component } from '../ajr-model-child1/ajr-model-child1.component';

@Component({
  selector: 'app-ajr-model',
  templateUrl: './ajr-model.component.html',
  styleUrls: ['./ajr-model.component.css']
})
export class AjrModelComponent implements OnInit {

  @ViewChild(AjrModelChild1Component) modelChild : AjrModelChild1Component;
  constructor() { }

  ngOnInit() {
  }

  showChild(){
    this.modelChild.showModal()
  }
}
