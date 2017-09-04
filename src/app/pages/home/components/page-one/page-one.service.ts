import { Injectable } from "@angular/core";

@Injectable()
export class PageOneService{
  public data1 = [
    [0, 4], [1, 8], [2, 5], [3, 10], [4, 4], [5, 16], [6, 5], [7, 11], [8, 6], [9, 11], [10, 30], [11, 10], [12, 13], [13, 4], [14, 3], [15, 3], [16, 6]
  ];
  public data2 = [
    [0, 1], [1, 0], [2, 2], [3, 0], [4, 1], [5, 3], [6, 1], [7, 5], [8, 2], [9, 3], [10, 2], [11, 1], [12, 0], [13, 2], [14, 8], [15, 0], [16, 0]
  ];


  public charts = [
    {
      color: "#f8ac59",
      percent:  60,
      name:"OA测"
    },
    {
      color: "#1c84c6",
      percent: 80,
      name:"CRM"
    }
  ]

  public news = [
    {
      name: 'a1',
      text: 'Vlad posted a new article.',
      time: '1 min ago',
      date: '2017-05-12',
      user: "华仔"
    },
    {
      name: 'a2',
      text: 'Kostya changed his contact information.',
      time: '2 hrs ago',
      date: '2017-05-12',
      user: "糖糖"
    },
    {
      name: 'a3',
      text: 'New orders received.',
      time: '5 hrs ago',
      date: '2017-05-12',
      user: '妹子'
    },
    {
      name: 'a4',
      text: 'Andrey replied to your comment.',
      time: '1 day ago',
      date: '2017-05-12',
      user: '妹子'
    },
    {
      name: 'a5',
      text: 'Today is Nasta\'s birthday.',
      time: '2 days ago',
      date: '2017-05-12',
      user: '妹子'
    },
    {
      name: 'a6',
      text: 'New comments on your post.',
      time: '3 days ago',
      date: '2017-05-12',
      user: '妹子'
    },
    {
      name: 'a7',
      text: 'Kostya invited you to join the event.',
      time: '1 week ago',
      date: '2017-05-12',
      user: '妹子'
    }
  ];

  constructor(){}

  getData1(){
    return this.data1;
  }
  getData2(){
    return this.data2;
  }

  getPieChart():any{
    return this.charts
  }
  getNews(){
    return this.news;
  }

}
