import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isAuth = false;
  appareilStatus = 'éteint';

  lastUpdate: any = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  appareils: any[] = [];

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 2000);
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  toutAllumer() {
    this.appareilService.switchOnAll();
  }

  toutEteindre() {
    this.appareilService.switchOffAll();
  }
}
