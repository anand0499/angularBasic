import { Component } from "@angular/core";


@Component({
    selector:"app-form",
    templateUrl:'./form.component.html'
})


export class FormComponent{

    username=''
    userNameCreated=false

    constructor(){

    }

    ngOnInit(){

    }

    func(){
        this.userNameCreated=true;
    }
}