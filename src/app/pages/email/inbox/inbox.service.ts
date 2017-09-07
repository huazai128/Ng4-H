import { Injectable } from "@angular/core";

@Injectable()
export class InboxService {

  private emailDatas:any[] = [
    {
      id: 1,
      name:"支付宝",
      description:"支付宝提醒",
      state: 1,
      time:'昨天 10:20',
      style:"验证邮件",
      num: 1,
    },
    {
      id: 1,
      name:"支付宝",
      description:"支付宝提醒",
      state: 1,
      time:'昨天 10:20',
    },
    {
      id: 1,
      name:"支付宝",
      description:"支付宝提醒",
      state: 0,
      time:'昨天 10:20',
      style:"AD",
      num: 0
    },
    {
      id: 1,
      name:"支付宝",
      description:"支付宝提醒",
      state: 0,
      time:'昨天 10:20',
    },
    {
      id: 1,
      name:"支付宝",
      description:"支付宝提醒",
      state: 1,
      time:'昨天 10:20',
    },
    {
      id: 1,
      name:"支付宝",
      description:"支付宝提醒",
      state: 1,
      time:'昨天 10:20',
    },
    {
      id: 1,
      name:"支付宝",
      description:"支付宝提醒",
      state: 0,
      time:'昨天 10:20',
    },
    {
      id: 1,
      name:"支付宝",
      description:"支付宝提醒",
      state: 1,
      time:'昨天 10:20',
    },
    {
      id: 1,
      name:"支付宝",
      description:"支付宝提醒",
      state: 0,
      time:'昨天 10:20',
    }

  ]

  constructor() {}

  public getEmails(){
    return this.emailDatas;
  }

}
