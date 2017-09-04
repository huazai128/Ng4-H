import { Component,ViewEncapsulation } from "@angular/core";


@Component({
  selector:"vector-map",
  templateUrl:"./vectorMap.html",
  encapsulation:ViewEncapsulation.None
})

export class VectorMap{

  public mapData = {
    "US": 298,
    "SA": 200,
    "DE": 220,
    "FR": 540,
    "CN": 120,
    "AU": 760,
    "BR": 550,
    "IN": 200,
    "GB": 120,
  };

  public vectorMap = {
    map: 'world_mill_en',
    backgroundColor: "transparent",
    regionStyle: {
      initial: {
        fill: '#e4e4e4',
        "fill-opacity": 0.9,
        stroke: 'none',
        "stroke-width": 0,
        "stroke-opacity": 0
      }
    },

    series: {
      regions: [{
        values: this.mapData,
        scale: ["#1ab394", "#22d6b1"],
        normalizeFunction: 'polynomial'
      }]
    },
  }

  constructor(){}

  ngOnInit(){

  }
}
