export class AppareilService {
  appareils = [
    {
      name: 'pc',
      status: 'éteint',
    },
    {
      name: 'Souris',
      status: 'allumé',
    },
    {
      name: 'Ecran',
      status: 'éteint',
    },
  ];

  switchOnAll() {
    this.appareils.forEach((element) => {
      element.status = 'allumé';
    });
  }

  switchOffAll() {
    this.appareils.forEach((element) => {
      element.status = 'éteint';
    });
  }

  statutOn(index: number) {
    this.appareils[index].status = 'allumé';
  }

  statutOff(index: number) {
    this.appareils[index].status = 'éteint';
  }
}
