import { Component } from "@angular/core";

@Component({
    selector:"app-server",
    templateUrl:"./server.component.html",
    styleUrls:["./server.component.css"]
})
export class ServerComponent{
    id:number=10;
    getStatus:string="Offine";

    getStatusFunction(){
        return this.getStatus;
    }
}