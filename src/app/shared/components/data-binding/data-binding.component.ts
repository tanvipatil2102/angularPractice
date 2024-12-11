import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isFormNotValid = false
    }, 5000)
  }

  @ViewChild("pn") pn! : ElementRef;

  info : string = "By using property binding we can easily access the data from ts file to the html file.";
  productName :string = "Samsung"
  id : number = 1234;
  userName : string = "Jhon";

  countries = [
    {
      cName : "India",
      pop : 1450935791,
      area : 2973190,
      den : 488
    },
    {
      cName : "Afghanistan",
      pop : 42647492,
      area : 652860,
      den : 65
    },
    {
      cName : "Albania",
      pop : 2791765	,
      area : 27400	,
      den : 102
    },
    {
      cName : "China",
      pop : 1419321278,
      area : 9388211,
      den : 151
    }
  ]

  fname : string = "Jhon";
  lname : string = "Doe";

  onKeyUpHandler(eve : Event){
    let val : string = (eve.target as HTMLInputElement).value;
    console.log(val)
  }

  // onClickBtn(val : string){
  //   console.log(val);
  // }

  // onClickBtn(){
  //   console.log(this.pn.nativeElement.value);
  // }

  onClickBtn(input : HTMLInputElement){
    console.log(input.value);
  }

  products = ["Samsung", "Redmi", "Realme", "Motorolla"];

  isFormNotValid: boolean = true;

  productAddStatus : string = "Product is not added yet";
  productCount : number = 0;

  onClickHandler(){
    if(this.productCount < 6){
      this.productCount++
      this.productAddStatus = `${this.productCount} Products are added !!`
    }
  }

  onRemoveHandler(){
    if(this.productCount > 0){
      this.productCount--
      if(this.productCount === 0){
        this.productAddStatus = "Product is not added yet"
      }else{
        this.productAddStatus = `${this.productCount} Products are added !!`
      }
    }
  }

}
