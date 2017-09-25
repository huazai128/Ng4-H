import { Component } from "@angular/core";

@Component({
  selector:"page-plugin",
  templateUrl:"./plugin.html",
  styleUrls:["./plugin.scss"]
})

export class PluginComponent{

  _formatOne = percent => `${percent} Days`;
  _formatTwo = percent => `Done`;

  public ionOps = [
    {
      min: 0,
      max: 5000,
      type: 'double',
      prefix: "&yen;",
      maxPostfix: "+",
      prettify: false,
      hasGrid: true
    },
    {
      type: "double",
      grid: true,
      min: 0,
      max: 1000,
      from: 200,
      to: 800,
      prefix: "$"
    },
    {
      type: "double",
      grid: true,
      min: -12.8,
      max: 12.8,
      from: -3.2,
      to: 3.2,
      step: 0.1
    },
    {
      values: [
        "一月", "二月", "三月",
        "四月", "五月", "六月",
        "七月", "八月", "九月",
        "十月", "十一月", "十二月"
      ],
      hasGrid: true
    },
    {
      type: "double",
      min: 0,
      max: 100,
      from: 30,
      to: 70,
      keyboard: true // true by default
    }
  ]

  constructor(){}
}
