import { Component,ViewEncapsulation } from "@angular/core";
import { PageOneService } from "./page-one.service";

@Component({
  selector:"page-one",
  templateUrl:'./page-one.html',
  styleUrls:["./page-one.scss"],
  encapsulation:ViewEncapsulation.None,
  providers:[PageOneService]
})

export class PageOneComponent{

  public title:string ="HuaZai";

  public dataset:any;

  public options:any;

  public charts:any;

  public title1 = "数据报告";

  public pieStyles = {
    bar:"bar",
    line:"line"
  }

  // 公用配置
  public configObj:any = {
    barConfig:{
      fill: ["#1ab394", "#d7a0a7"],
      width:100
    }
  }

  constructor(private _service:PageOneService){}

  ngOnInit(){
    this.dataset = [this._service.getData1(),this._service.getData2()];
    this.options = {
      series: {
        lines: {
          show: false,
          fill: true
        },
        splines: {
          show: true,
          tension: 0.4,
          lineWidth: 1,
          fill: 0.4
        },
        points: {
          radius: 0,
          show: true
        },
        shadowSize: 1
      },
      grid: {
        hoverable: true,
        clickable: true,
        tickColor: "#d5d5d5",
        borderWidth: 1,
        color: '#d5d5d5'
      },
      colors: ["#1ab394", "#464f88"],
      xaxis: {},
      yaxis: {
        ticks: 4
      },
      tooltip: false
    }

    this.charts = this._service.getPieChart();
  }

  ngOnDestroy(){
    this.options = null;
    this.dataset = [];
  }
}
