import { Component } from '@angular/core';
import { StoreAppService } from './store-app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'storybook-app';

  constructor(private storeService: StoreAppService, private router: Router) {}

  getMenu() {
    return this.storeService.getMenu();
  }

  getLogoUrl() {
    return this.storeService.getLogoUrl();
  }

  getSubscribeText() {
    return this.storeService.getSubscribeText();
  }
  getFooterItems() {
    return this.storeService.getFooterItems();
  }
  getFooterInfo() {
    return this.storeService.getFooterInfo();
  }

  getFooterCopyright() {
    return this.storeService.getFooterCopyright();
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

  public clickOnMenuFromSaqhanView({ detail }) {
    console.log('clickOnMenuFromSaqhanView', detail);

    switch (detail.id) {
      case 'home-menu':
        return this.router.navigate(['first-page']);
      case 'second-page':
        return this.router.navigate(['second-page']);
      case 'list-items':
        return this.router.navigate(['list-items']);
      default:
        this.router.navigate(['first-page']);
    }

    // if (detail.id === 'home-menu'){
    //   this.router.navigate(['first-page']);
    // } else if (detail.id === 'second-page') {
    //   this.router.navigate(['second-page']);
    // } else if (detail.id === 'list-items') {
    //   this.router.navigate(['list-items']);
    // }
  }

  public clickToLogo({ detail }) {
    console.log('clickOnMenuFromSaqhanView', detail);

    if (detail.place === 'logo') {
      this.router.navigate(['first-page']);
    }
  }
}
