import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-day1-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
    
})

export class UserComponent implements OnInit {
    
    name:string="Sumit Raokhande";
    constructor() { }

    ngOnInit() { }

    getname():string{
        return this.name;
    }

}