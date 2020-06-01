import { Component, OnInit } from '@angular/core';
import {StoreAppService} from "../store-app.service";

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor(private storeBlog: StoreAppService) {}



  getBlogPost(){
    return this.storeBlog.getBlogPost();
  }

  getBanner(){
    return this.storeBlog.getBanner();
  }

  getAuthor(){
    return this.storeBlog.getAuthor();
  }

  ngOnInit(): void {
  }

}
