import { Injectable } from '@angular/core';

@Injectable()
export class BasicTablesService {

  smartTablePageSize = 10;

  smartTableData = [
    {
      id: 1,
      AlertLevel: 'HIGH',
      RuleName: 'Name Rule',
      ReconName: 'Exchange-Finance Recon',
      RecordMismatch: '720',
      RecordMissing: '28'
    },
    {
      id: 2,
      AlertLevel: 'Low',
      RuleName: 'SSN Rule',
      ReconName: 'Exchange-Finance Recon',
      RecordMismatch: '327',
      RecordMissing: '84'
    },
    {
      id: 3,
      AlertLevel: 'HIGH',
      RuleName: 'DOB Rule',
      ReconName: 'Exchange-Finance Recon',
      RecordMismatch: '214',
      RecordMissing: '112'
    },
    {
      id: 4,
      AlertLevel: 'Medium',
      RuleName: 'Premium Rule',
      ReconName: 'Exchange-Finance Recon',
      RecordMismatch: '124',
      RecordMissing: '19'
    },
    {
      id: 5,
      AlertLevel: 'HIGH',
      RuleName: 'Email Rule',
      ReconName: 'Exchange-Finance Recon',
      RecordMismatch: '469',
      RecordMissing: '281'
    },
   {
     id: 6,
     AlertLevel: 'HIGH',
     RuleName: 'Mobile Rule',
     ReconName: 'Exchange-Finance Recon',
     RecordMismatch: '816',
     RecordMissing: '282'
   },
  ];

  editableTableData: Array<any>;

  peopleTableData = [
    {
      id: 1,
      firstName: 'Mark',
      lastName: 'Otto',
      username: '@mdo',
      email: 'mdo@gmail.com',
      age: '28',
      status: 'info'
    },
    {
      id: 2,
      firstName: 'Jacob',
      lastName: 'Thornton',
      username: '@fat',
      email: 'fat@yandex.ru',
      age: '45',
      status: 'primary'
    },
    {
      id: 3,
      firstName: 'Larry',
      lastName: 'Bird',
      username: '@twitter',
      email: 'twitter@outlook.com',
      age: '18',
      status: 'success'
    },
    {
      id: 4,
      firstName: 'John',
      lastName: 'Snow',
      username: '@snow',
      email: 'snow@gmail.com',
      age: '20',
      status: 'danger'
    },
    {
      id: 5,
      firstName: 'Jack',
      lastName: 'Sparrow',
      username: '@jack',
      email: 'jack@yandex.ru',
      age: '30',
      status: 'warning'
    }
  ];

  metricsTableData = [
    {
      image: 'app/browsers/chrome.svg',
      browser: 'Google Chrome',
      visits: '10,392',
      isVisitsUp: true,
      purchases: '4,214',
      isPurchasesUp: true,
      percent: '45%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/firefox.svg',
      browser: 'Mozilla Firefox',
      visits: '7,873',
      isVisitsUp: true,
      purchases: '3,031',
      isPurchasesUp: false,
      percent: '28%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/ie.svg',
      browser: 'Internet Explorer',
      visits: '5,890',
      isVisitsUp: false,
      purchases: '2,102',
      isPurchasesUp: false,
      percent: '17%',
      isPercentUp: false
    },
    {
      image: 'app/browsers/safari.svg',
      browser: 'Safari',
      visits: '4,001',
      isVisitsUp: false,
      purchases: '1,001',
      isPurchasesUp: false,
      percent: '14%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/opera.svg',
      browser: 'Opera',
      visits: '1,833',
      isVisitsUp: true,
      purchases: '83',
      isPurchasesUp: true,
      percent: '5%',
      isPercentUp: false
    }
  ];

  users = [
    {
      "id": 1,
      "name": "Esther Vang",
      "status": 4,
      "group": 3
    },
    {
      "id": 2,
      "name": "Leah Freeman",
      "status": 3,
      "group": 1
    },
    {
      "id": 3,
      "name": "Mathews Simpson",
      "status": 3,
      "group": 2
    },
    {
      "id": 4,
      "name": "Buckley Hopkins",
      "group": 4
    },
    {
      "id": 5,
      "name": "Buckley Schwartz",
      "status": 1,
      "group": 1
    },
    {
      "id": 6,
      "name": "Mathews Hopkins",
      "status": 4,
      "group": 2
    },
    {
      "id": 7,
      "name": "Leah Vang",
      "status": 4,
      "group": 1
    },
    {
      "id": 8,
      "name": "Vang Schwartz",
      "status": 4,
      "group": 2
    },
    {
      "id": 9,
      "name": "Hopkin Esther",
      "status": 1,
      "group": 2
    },
    {
      "id": 10,
      "name": "Mathews Schwartz",
      "status": 1,
      "group": 3
    }
  ];

  statuses = [
    { value: 1, text: 'Good' },
    { value: 2, text: 'Awesome' },
    { value: 3, text: 'Excellent' },
  ];

  groups = [
    { id: 1, text: 'user' },
    { id: 2, text: 'customer' },
    { id: 3, text: 'vip' },
    { id: 4, text: 'admin' }
  ];

  constructor() {
    this.editableTableData = this.smartTableData.slice(0, 36);
  }
}
