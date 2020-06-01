import { Component, OnInit } from '@angular/core';
import {StoreAppService} from "../store-app.service";

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  constructor(private storeBlog: StoreAppService) {}



  getBreadCrumbs(){
    return this.storeBlog.getBreadCrumbs();
  }

  getNewsStore(){
    return this.storeBlog.getNewsStore();
  }


  ngOnInit(): void {
  }

}
