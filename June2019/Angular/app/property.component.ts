import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls:['./property.component.css']
})

export class PropertyComponent implements OnInit {
    constructor() { }

    Name:string="Hefshine PVT LTD";

    ishidden:boolean=false;
    mytext:string="txtid1";
    mytext2:string="txtid2";

    imgurl:string='../assets/Desert.jpg';

    btnenable:boolean=false;

    ngOnInit() { }
}