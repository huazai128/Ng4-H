import { Component,Input,ViewChild,ElementRef } from "@angular/core";

import * as echarts from "echarts";

@Component({
  selector:"ba-echarts",
  template:`<div #charts class="charts-box {{baCharts || ''}}"></div>`,
  styles:[`
    :host{
      display:block;
    }
    .charts-box{
      height: 340px;
    }
    .ba-charts{
      height: 660px;
    }
  `]
})
export class BaEcharts{

  @Input() options:any;

  @Input() width = "100%";

  @Input() height = "240px";

  @Input() theme:string;

  @Input("baChartsClass") baCharts:string;

  @ViewChild("charts") public _charts:ElementRef;

  constructor(){}

  ngAfterViewInit(){

    let ops = {
      width: this.width,
      height: this.height
    }

    let charts = echarts.init(this._charts.nativeElement);
    charts.setOption(Object.assign(this.options,ops));
  }
}
