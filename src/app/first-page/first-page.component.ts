import { Component, Input, OnInit } from '@angular/core';
import { StoreAppService } from '../store-app.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
})
export class FirstPageComponent implements OnInit {
  constructor(private storeBlog: StoreAppService) {}

  getBlog() {
    return this.storeBlog.getBlog();
  }

  getBlogPost() {
    return this.storeBlog.getBlogPost();
  }
  getPopularNews() {
    return this.storeBlog.getPopularNews();
  }
  getEvents() {
    return this.storeBlog.getEvents();
  }

  getMainUser() {
    return this.storeBlog.getMainUser();
  }
  getMessages() {
    return this.storeBlog.getMainUser();
  }

  public amount: number;

  ngOnInit(): void {
    this.amount = this.storeBlog.sum(
      this.a,
      this.b
    );
  }

  @Input() a!: number;
  @Input() b!: number;

  result = 0;

  public onClickButton() {
    const result = this.storeBlog.sum(5,5);
    this.result = result;
  }
}
