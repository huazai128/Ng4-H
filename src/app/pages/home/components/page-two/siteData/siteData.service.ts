import { Injectable } from "@angular/core";

@Injectable()
export class SiteDataService{

  constructor(){}

  private siteData = [
    {
      background:"#1c84c6",
      name:"月",
      numb:"40 886,20",
      total:"总收入",
      percen:"98%",
      icon:"fa-bolt",
      title:"收入"
    },
    {
      background:"#23c6c8",
      name:"全年",
      numb:"275,820",
      total:"新订单",
      percen:"20%",
      icon:"fa-level-up",
      title:"订单"
    },
    {
      background:"#1ab394",
      name:"今天",
      numb:"106,120",
      total:"新访客",
      percen:"44%",
      icon:"fa-level-up",
      title:"访客",
    },
    {
      background:"#ed5565",
      name:"最近一个月",
      numb:"80,120",
      total:"12月",
      percen:"38%",
      icon:"fa-level-down",
      title:"活跃用户"
    }
  ]

  getSite(){
    return this.siteData;
  }
}
