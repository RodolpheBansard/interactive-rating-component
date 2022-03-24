import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interactive-rating-component';

  public rating = 0;
  public isRated = false;
  public numberOfRating = 5;
  public counter = Array;

  public rateService(value: number){
    if(value === this.rating){
      this.rating = 0;
    }
    else{
      this.rating = value
    }
  }

  public rate(){
    this.isRated = true;
  }
}
