import { Injectable } from "@angular/core";

@Injectable()
export class TimelineService{

  private datas = [
    {
      bg:"#1ab394",
      icon:"fa fa-briefcase",
      title:"会议",
      content:"上一年的销售业绩发布会。总结产品营销和销售趋势及销售的现状。",
      date:"今天",
      time:"2月3日",
      type:"1"
    },
    {
      bg:"#1c84c6",
      icon:"fa fa-file-text",
      title:"给张三发送文档",
      content:"发送上年度《销售业绩报告》",
      date:"今天",
      time:"2月3日",
      type:"2"
    },
    {
      bg:"#23c6c8",
      icon:"fa fa-coffee",
      title:"喝咖啡休息",
      content:"喝咖啡啦，啦啦啦~~",
      date:"昨天",
      time:"2月2日",
      type:"3"
    },
    {
      bg:"#f8ac59",
      icon:"fa fa-phone",
      title:"给李四打电话",
      content:"给李四打电话分配本月工作任务",
      date:"昨天",
      time:"2月2日",
      type:"0"
    },
    {
      bg:"#23c6c8",
      icon:"fa fa-user-md",
      title:"公司年会",
      content:"发年终奖啦，啦啦啦~~",
      date:"前天",
      time:"2月1日",
      type:"0"
    },
  ]


  getDatas(){
    return this.datas;
  }

}
