import { Injectable } from "@angular/core";

@Injectable()
export class WidgetsService{

  private widgetData = [
    {
      background:"transparent",
      icon:"fa-trophy fa-5x",
      name:"今日收入",
      num:"¥ 4,232"
    },
    {
      background:"#1ab394",
      icon:"fa-cloud fa-5x",
      name:"今日温度",
      num:"26'C"
    },
    {
      background:"#23c6c8",
      icon:"fa-envelope-o fa-5x",
      name:"新消息",
      num:"260"
    },
    {
      background:"#f8ac59",
      icon:"fa-music fa-5x",
      name:"新专辑",
      num:"12"
    }
  ]


  private d1 = [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]];
  private d2 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]];
  private flotData = [
    {
      cls:"6",
      money:"1540",
      source:"年收入",
      name:"项目年收入",
      bg:"#1ab394",
      data:[
        {
          label: "Data 1",
          data: this.d1,
          color: '#17a084'
        },
        {
          label: "Data 2",
          data: this.d2,
          color: '#127e68'
        }
      ],
      options:{
        xaxis: {
          tickDecimals: 0
        },
        series: {
          lines: {
            show: true,
            fill: true,
            fillColor: {
              colors: [{
                opacity: 1
              }, {
                opacity: 1
              }]
            },
          },
          points: {
            width: 0.1,
            show: false
          },
        },
        grid: {
          show: false,
          borderWidth: 0
        },
        legend: {
          show: false,
        }
      }
    },
    {
      cls:"3",
      money:"210660",
      source:"月收入",
      name:"项目年收入",
      bg:"#23c6c8",
      data:[
        {
          label: "Data 1",
          data: this.d1,
          color: '#19a0a1'
        }
      ],
      options:{
        xaxis: {
          tickDecimals: 0
        },
        series: {
          lines: {
            show: true,
            fill: true,
            fillColor: {
              colors: [{
                opacity: 1
              }, {
                opacity: 1
              }]
            },
          },
          points: {
            width: 0.1,
            show: false
          },
        },
        grid: {
          show: false,
          borderWidth: 0
        },
        legend: {
          show: false,
        }
      }
    },
    {
      cls:"3",
      money:"210660",
      source:"月收入",
      name:"项目年收入",
      bg:"transparent",
      data:[
        {
          label: "Data 1",
          data: this.d1,
          color: '#fbbe7b'
        },
        {
          label: "Data 2",
          data: this.d2,
          color: '#f8ac59'
        }
      ],
      options:{
        xaxis: {
          tickDecimals: 0
        },
        series: {
          lines: {
            show: true,
            fill: true,
            fillColor: {
              colors: [{
                opacity: 1
              }, {
                opacity: 1
              }]
            },
          },
          points: {
            width: 0.1,
            show: false
          },
        },
        grid: {
          show: false,
          borderWidth: 0
        },
        legend: {
          show: false,
        }
      }
    }
  ];

  private promptData = [
    {
      bg:"#1ab394",
      icon:"fa-user",
      num:"217"
    },
    {
      bg:"#1ab394",
      icon:"fa-thumbs-up",
      num:"400"
    },
    {
      bg:"#1ab394",
      icon:"fa-rss",
      num:"10"
    },
    {
      bg:"#23c6c8",
      icon:"fa-phone",
      num:"120"
    },
    {
      bg:"#23c6c8",
      icon:"fa-euro",
      num:"468"
    },
    {
      bg:"#f8ac59",
      icon:"fa-shield",
      num:"610"
    }
  ]

  constructor(){}

  getWidgetData(){
    return this.widgetData;
  }

  getFlotData(){
    return this.flotData;
  }

  getPromptData(){
    return this.promptData;
  }
}
