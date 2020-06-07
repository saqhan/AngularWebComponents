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

  getSecondTitle(){
    return this.storeBlog.getSecondTitle();
  }

  getQuoteText(){
    return this.storeBlog.getQuoteText();
  }


  getSubscribeText(){
    return this.storeBlog.getSubscribeText();
  }
  getSubscribeBlockText(){
    return this.storeBlog.getSubscribeBlockText();
  }


  ngOnInit(): void {
  }

}
