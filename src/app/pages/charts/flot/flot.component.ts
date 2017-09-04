import { Component,ViewEncapsulation } from "@angular/core";

@Component({
  selector:"page-flot",
  templateUrl:'./flot.html',
  styleUrls:["./flot.scss"],
  encapsulation:ViewEncapsulation.None
})

export class FlotComponent{
  public barOptions = {
    series: {
      bars: {
        show: true,
        barWidth: 0.6,
        fill: true,
        fillColor: {
          colors: [{
            opacity: 0.8
          }, {
            opacity: 0.8
          }]
        }
      }
    },
    xaxis: {
      tickDecimals: 0
    },
    colors: ["#1ab394"],
    grid: {
      color: "#999999",
      hoverable: true,
      clickable: true,
      tickColor: "#D4D4D4",
      borderWidth:0
    },
    legend: {
      show: false
    },
    tooltip: true,
    tooltipOpts: {
      content: "x: %x, y: %y"
    }
  };
  public barData = [
    {
      label: "bar",
      data: [
        [1, 34],
        [2, 25],
        [3, 19],
        [4, 34],
        [5, 32],
        [6, 44]
      ]
    }
  ];

  public zheOptions = {
    series: {
      lines: {
        show: true,
        lineWidth: 2,
        fill: true,
        fillColor: {
          colors: [{
            opacity: 0.0
          }, {
            opacity: 0.0
          }]
        }
      }
    },
    xaxis: {
      tickDecimals: 0
    },
    colors: ["#1ab394"],
    grid: {
      color: "#999999",
      hoverable: true,
      clickable: true,
      tickColor: "#D4D4D4",
      borderWidth:0
    },
    legend: {
      show: false
    },
    tooltip: true,
    tooltipOpts: {
      content: "x: %x, y: %y"
    }
  };
  public zheData = [{
    label: "bar",
    data: [
      [1, 34],
      [2, 25],
      [3, 19],
      [4, 34],
      [5, 32],
      [6, 44]
    ]
  }];

  constructor(){}

}
