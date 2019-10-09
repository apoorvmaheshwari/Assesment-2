import { Component, OnInit } from '@angular/core';
import {Details} from '../details';
import{DataService} from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  id:number=0;
  name:string;
  dob:string;
  homeaddress:string;
  phone:number;
  degree: string;
  marks: number;
  stream: string;
  college:string;
  newDetails:Details;

  constructor(private svc:DataService) { }

  ngOnInit() {
  }
  createDetails() {
    console.log(this.svc.detail.length+1);
    this.newDetails = new Details(this.svc.detail.length+1, this.name, this.dob, this.homeaddress,this.phone,this.degree,this.marks,this.stream,this.college);
    console.log(this.newDetails);
    this.svc.create(this.newDetails);
    
    console.log(this.svc.detail);
    
    

  }

}
