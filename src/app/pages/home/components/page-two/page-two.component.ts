import { Component,ViewEncapsulation } from "@angular/core";
import { PageTwoService } from "./page-two.service";

@Component({
  selector:"page-two",
  templateUrl:"./page-two.html",
  encapsulation:ViewEncapsulation.None,
  providers:[PageTwoService],
  styleUrls:["./page-two.scss"]
})

export class PageTwoComponent{

  public dataset:any;

  public options:any;

  constructor(private _service:PageTwoService){
    this.dataset = [
      {
        label: "订单数",
        data: this._service.getData2(),
        color: "#1ab394",
        bars: {
          show: true,
          align: "center",
          barWidth: 24 * 60 * 60 * 600,
          lineWidth: 0
        }

      }, {
        label: "付款数",
        data: this._service.getData1(),
        yaxis: 2,
        color: "#464f88",
        lines: {
          lineWidth: 1,
          show: true,
          fill: true,
          fillColor: {
            colors: [{
              opacity: 0.2
            }, {
              opacity: 0.2
            }]
          }
        },
        splines: {
          show: false,
          tension: 0.6,
          lineWidth: 1,
          fill: 0.1
        },
      }
    ];

    this.options = {
      xaxis: {
        mode: "time",
        tickSize: [3, "day"],
        tickLength: 0,
        axisLabel: "Date",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Arial',
        axisLabelPadding: 10,
        color: "#838383"
      },
      yaxes: [{
        position: "left",
        max: 1070,
        color: "#838383",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Arial',
        axisLabelPadding: 3
      }, {
        position: "right",
        clolor: "#838383",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: ' Arial',
        axisLabelPadding: 67
      }
      ],
      legend: {
        noColumns: 1,
        labelBoxBorderColor: "#000000",
        position: "nw"
      },
      grid: {
        hoverable: false,
        borderWidth: 0,
        color: '#838383'
      }
    };
  }

  ngOnInit(){


  }

  ngOnDestroy(){
    this.options = null;
    this.dataset = [];
  }


}
