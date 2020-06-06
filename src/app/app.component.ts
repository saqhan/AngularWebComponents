import { Component } from '@angular/core';
import {StoreAppService} from "./store-app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storybook-app';

  constructor(
    private storeService: StoreAppService,
    private router: Router
    ) {
  }

  getMenu() {
    return this.storeService.getMenu();
  }

  getLogoUrl(){
    return this.storeService.getLogoUrl();
  }

  getSubscribeText(){
    return this.storeService.getSubscribeText();
  }
  getFooterItems(){
    return this.storeService.getFooterItems();
  }
  getFooterInfo(){
    return this.storeService.getFooterInfo();
  }

  /**
* Сообщения главного юзера
* */
  public getMainUser() {
    return this.storeService.getMainUser();
  }
  /**
  * получаем сообщения для чата
  * */
  public getMessages() {
    return this.storeService.getMainUser();
  }


  public clickOnMenuFromSaqhanView({detail}) {
    console.log('clickOnMenuFromSaqhanView', detail);



    if (detail.id === 'home-menu'){
      this.router.navigate(['first-page']);
    } else if (detail.id === 'second-page') {
      this.router.navigate(['second-page']);
    } else if (detail.id === 'list-items') {
      this.router.navigate(['list-items']);
    }
  }

}
