import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector:"app-one",
    templateUrl:'./componentone.component.html',

})

export class ComponentOne implements OnInit{
    ngOnInit(): void {
        // throw new Error("Method not implemented.");
    }
    @Input() Item: any
    evenNUmbers : any=[] ;
    oddNumbers : any=[] ;
    data:any
    // updateArray():any{
    //     for(let data of this.Item){
    //         if(this.data%2==0)
    //             this.evenNUmbers.push(this.data)
    //         else 
    //             this.oddNumbers.push(this.data)        
    //     }  
    //     console.log(this.evenNUmbers,this.data)
    // }
}