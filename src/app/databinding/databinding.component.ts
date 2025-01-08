import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  name:string='Iphone 15 plus';
  price:number=70000;
  discountedPrice:number=12.5;
  stock:number=10;
  image1:string='https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg';
  review:string='';
  firstName:string="shailaja";

  readValue(event:any){
    this.review=event.target.value;
  }
  readPrice(event:any){
    this.price=event.target.value;
  }
}
