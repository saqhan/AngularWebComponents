import { Component, Input, OnInit } from '@angular/core';
import { StoreAppService } from '../store-app.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
})
export class FirstPageComponent implements OnInit {
  constructor(private storeBlog: StoreAppService) {}

  @Input() a!: number;
  @Input() b!: number;

  result = 0;

  public amount: number;

  ngOnInit(): void {
    this.amount = this.storeBlog.sum(
      this.a,
      this.b
    );
  }

  /*
  * Получаем главную новость и ленту новостей
  */
  public getBlog() {
    return this.storeBlog.getBlog();
  }
  /*
  * Выводим блог новых новостей
  */
  public getBlogPost() {
    return this.storeBlog.getBlogPost();
  }
  /*
  * Получаем популярные новости
  */

  /**
   * Получаем Events
   */
  public getEvents() {
    return this.storeBlog.getEvents();
  }
  /**
  * Получаем Popular News
  */
  public getPopularNews() {
    return this.storeBlog.getPopularNews();
  }
  /**
   * Получаем Banner
   */
  public getBannerPopular() {
    return this.storeBlog.getBannerPopular();
  }

  getSubscribeText(){
    return this.storeBlog.getSubscribeText()
  }
  getSubscribeBlockText(){
    return this.storeBlog.getSubscribeBlockText()
  }

  /*
  *
  */
  public onClickButton() {
    const result = this.storeBlog.sum(5,5);
    this.result = result;
  }
}
