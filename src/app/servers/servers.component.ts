import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector:`[app-servers]`,
  // selector:`.app-servers`,
  // template:`<app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    btnClickable:boolean=false;
    counter:number=0;
    constructor(){
      setTimeout(() => {
        this.btnClickable=true;
      }, 5000);
    }

    ngOnInit(){

    }

    onCreateServer(){
      console.log("Anand")
    }

    increaseCounter(){
      this.counter= this.counter+1;
    }

    decreaseCounter():any{
      if(this.counter===0){
        return this.counter;
      }
      this.counter= this.counter-1;
    }

    inputvalue=''
    onChange(data:any):any{
      this.inputvalue=(<HTMLInputElement>data.target).value;
      console.log(this.inputvalue );
    }
}
