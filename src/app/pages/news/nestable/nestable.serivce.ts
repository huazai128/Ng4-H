import { Injectable } from "@angular/core";

@Injectable()
export class NestableSerivce{

  private nestables = [
    {
      id:"1",
      name:"群组",
      bg:"#23c6c8",
      icon:"fa fa-users",
      children:[
        {
          id:"2",
          name:"设置",
          icon:"fa fa-cog",
          title:"12:00",
          bg:"#23c6c8",
        },
        {
          id:"3",
          name:"筛选",
          icon:"fa fa-bolt",
          title:"12:00",
          bg:"#23c6c8",
        },
        {
          id:"4",
          name:"电脑",
          icon:"fa fa-laptop",
          title:"12:00",
          bg:"#23c6c8",
        }
      ]
    },
    {
      id:"5",
      name:"群组",
      bg:"#f8ac59",
      icon:"fa fa-users",
      children:[
        {
          id:"6",
          name:"列表用户",
          icon:"fa fa-users",
          title:"12:00",
          bg:"#f8ac59",
        },
        {
          id:"7",
          name:"炸弹",
          icon:"fa fa-bomb",
          title:"12:00",
          bg:"#f8ac59",
        },
        {
          id:"8",
          name:"子元素",
          icon:"fa fa-child",
          title:"12:00",
          bg:"#f8ac59",
        }
      ]
    },
    {
      id:"9",
      name:"群组",
      bg:"#f8ac59",
      icon:"fa fa-child"
    }
  ]

  private nestableData = [
    {
      id:"1",
      name:"群组",
      children:[
        {
          id:"2",
          name:"设置",
        },
        {
          id:"3",
          name:"筛选",
        },
        {
          id:"4",
          name:"电脑",

        }
      ]
    },
    {
      id:"5",
      name:"群组",
      children:[
        {
          id:"6",
          name:"列表用户",
        },
        {
          id:"7",
          name:"炸弹",
        },
        {
          id:"8",
          name:"子元素",

        }
      ]
    },
    {
      id:"9",
      name:"群组",
    }
  ]





  constructor(){}

  getDatas(){
    return this.nestables;
  }

  getDatas1(){
    return this.nestableData;
  }
}
