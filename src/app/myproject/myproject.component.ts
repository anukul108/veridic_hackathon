import {Component,OnInit} from "@angular/core";
import { TestservicesService } from "../testservices.service";

@Component({
    selector : 'app-myproject',
    templateUrl: './myproject.component.html',
    styleUrls: ['./myproject.component.scss']
})

export class myprojectComponent implements OnInit{
    constructor(public service:TestservicesService){}
    products : any;
    loader : boolean = true;
    error : string = "";
    ngOnInit(){
        this.service.data().subscribe((data)=>{
            this.products = data;
            this.loader = false;
            console.log(this.products);
        }, (error) => {
            this.error = error;
        })
    }

}