import { Component, OnInit } from '@angular/core';
import { Details } from '../details';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  name: string = "";
  dob: string = "";
  homeaddress: string = "";
  phone: number = 0;
  degree: string = "";
  marks: number = 0;
  stream: string = "";
  college: string = "";
  detail: Details[]=[];
  index: number = 0;

  constructor(public svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.detail = this.svc.detail;
    //console.log(this.route.snapshot.paramMap.get('id'));
    //this.index = parseInt(this.route.snapshot.paramMap.get('id'));
    //console.log(this.index);
    //this.svc.detail.forEach(element => {
      //if (element.id == this.index) {

        //this.detail = element;
      //}
    //});
    //console.log(this.detail);
    //this.name = this.detail.name;
    //this.dob = this.detail.dob;
    //this.homeaddress = this.detail.homeaddress;
    //this.phone = this.detail.phone;

  }

}
