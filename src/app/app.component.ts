import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular100';

  user = {
    name:'anh vu',
    age:'27'
  }

  handler(){
    console.log('clicked')
  }
}
