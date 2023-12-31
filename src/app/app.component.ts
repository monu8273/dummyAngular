import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  serverElements = [];
  newServerName = '';
  newServerContent = '';


  onAddServer(){
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    })
  }

  onAddBlueprint(){
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    })
  }

}
