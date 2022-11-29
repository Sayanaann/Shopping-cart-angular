import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  title=""
  price=""
  description=""
  category=""
  image=""
  count=""


  readvalues=()=>
  {

  let data : any ={"title":this.title,"price":this.price,"description":this.description,"category":this.category,"image":this.image,"count":this.count}
console.log(data)
  }

}





