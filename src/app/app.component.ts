import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'calculadora';
  screen="";

  n1:any;
  n2:any;
  n3:any;
  n4="";
  n5="";

  ngOnInit(): void{

  }

  //Calculadora

  enterValue(value:string){
    if((this.n2 == "+") || (this.n2 == "*" || (this.n2 == "/"))){
      this.n4 = this.n4 + value;
      this.screen = this.screen + value;
      this.n3 = this.n4;
    }else{
      this.screen = this.screen + value;
      this.n1 = this.screen;
    }
  }

  condition(value: string){
    
    this.screen = this.screen + value;
    this.n2 = value;
  }

  condition1(value: string){
    
    this.screen = this.screen + value;
    this.n2 = value;
  }
  
  clear(){
    this.screen = "";
    this.n1 = "";
    this.n2 = "";
    this.n3 = "";
    this.n4 = "";
  }

  Del(){
    this.screen = this.screen.slice(0,-1)
  }


  result(){
    if (this.n2 == '+') {
      this.screen = `${this.screen} = ${(parseInt(this.n1) + parseInt(this.n3)).toString()} `;
      this.screen = (parseInt(this.screen) + parseInt(this.n3)).toString();
    }

    if (this.n2 == '-') {
      this.screen = `${this.screen} = ${(parseInt(this.n1) - parseInt(this.n3)).toString()} `;
      this.screen = (parseInt(this.screen) - parseInt(this.n3)).toString();
    }

    if (this.n2 == '*') {
      this.screen = `${this.screen} = ${(parseInt(this.n1) * parseInt(this.n3)).toString()} `;
      this.screen = (parseInt(this.screen) * parseInt(this.n3)).toString();
    }

    if (this.n2 == '/') {
      this.screen = `${this.screen} = ${(parseInt(this.n1) / parseInt(this.n3)).toString()} `;
      this.screen = (parseInt(this.screen) / parseInt(this.n3)).toString();
    }


  
  }

}
