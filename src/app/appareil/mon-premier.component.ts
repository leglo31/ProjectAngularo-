import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.scss'],
})
export class MonPremierComponent implements OnInit {
  @Input() appareilName!: string;
  @Input() appareilStatus!: string;
  @Input() indexOffAppareil!: number;

  constructor(private appareilService: AppareilService) {}

  ngOnInit(): void {}

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }

  onStatusOn() {
    this.appareilService.statutOn(this.indexOffAppareil);
  }

  onStatusOff() {
    this.appareilService.statutOff(this.indexOffAppareil);
  }
}
