import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'hmgu62-mukormos-idopontfoglalo';

  page = 'gallery';


  constructor(){
    console.log(this.title);
  }


}
