import { Component,ElementRef,Input } from "@angular/core";

import 'easy-pie-chart/dist/jquery.easypiechart.js';

@Component({
  selector:"ba-pie-chart",
  template:`
    <div class="chart" data-percent="50">
      <span class="percent"></span>
    </div>
  `
})
export class BaPieChart{

  @Input() color:string = "#ef1e25";

  @Input() percent:number = 50;

  private _init = false;

  constructor(private _el:ElementRef){}

  ngAfterViewInit(){
    if(!this._init){
      this._loadPieChart();
      this._updatePieCharts();
      return false;
    }
  }

  private _loadPieChart(){
    jQuery(this._el.nativeElement.children[0]).easyPieChart({
      easing:"easeOutBounce",
      onStep:(from,to,percent) => {
        jQuery(this._el.nativeElement.children[0]).find(".percent").text(Math.round(percent))
      },
      barColor:this.color,
      trackColor: 'rgba(0,0,0,0)',
      size: 84,
      scaleLength: 5,
      animation: 2000,
      lineWidth: 4,
      lineCap: 'round',
    })
  }

  private _updatePieCharts(){
    jQuery(this._el.nativeElement.children[0]).data('easyPieChart').update(this.percent);
  }
}
