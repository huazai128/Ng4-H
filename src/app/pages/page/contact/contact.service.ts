import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ContactService{

  private contacts = [
    {
      imgUrl:"a1",
      name:"奔波儿灞",
      address:"甘肃·兰州",
      company:"Baidu, Inc",
      email:"xxx@baidu.com",
      weibo:"http://weibo.com/xxx",
      phone:"(123) 456-7890",
      pos:"CTO"
    },
    {
      imgUrl:"a2",
      name:"奔波儿灞",
      address:"甘肃·兰州",
      company:"Baidu, Inc",
      email:"xxx@baidu.com",
      weibo:"http://weibo.com/xxx",
      phone:"(123) 456-7890",
      pos:"营销总监"
    },
    {
      imgUrl:"a3",
      name:"奔波儿灞",
      address:"甘肃·兰州",
      company:"Baidu, Inc",
      email:"xxx@baidu.com",
      weibo:"http://weibo.com/xxx",
      phone:"(123) 456-7890",
      pos:"Marketing manager"
    },
    {
      imgUrl:"a4",
      name:"奔波儿灞",
      address:"上海市闵行区绿地科技岛广场A座2606室",
      company:"Baidu, Inc",
      email:"xxx@baidu.com",
      weibo:"http://weibo.com/xxx",
      phone:"(123) 456-7890",
      pos:"攻城师"
    },
    {
      imgUrl:"a5",
      name:"奔波儿灞",
      address:"上海市闵行区绿地科技岛广场A座2606室",
      company:"Baidu, Inc",
      email:"xxx@baidu.com",
      weibo:"http://weibo.com/xxx",
      phone:"(123) 456-7890",
      pos:"攻城师"
    },
    {
      imgUrl:"a6",
      name:"奔波儿灞",
      address:"甘肃·兰州",
      company:"Baidu, Inc",
      email:"xxx@baidu.com",
      weibo:"http://weibo.com/xxx",
      phone:"(123) 456-7890",
      pos:"CTO"
    },
    {
      imgUrl:"a7",
      name:"奔波儿灞",
      address:"甘肃·兰州",
      company:"Baidu, Inc",
      email:"xxx@baidu.com",
      weibo:"http://weibo.com/xxx",
      phone:"(123) 456-7890",
      pos:"营销总监"
    },
    {
      imgUrl:"a8",
      name:"奔波儿灞",
      address:"甘肃·兰州",
      company:"Baidu, Inc",
      email:"xxx@baidu.com",
      weibo:"http://weibo.com/xxx",
      phone:"(123) 456-7890",
      pos:"Marketing manager"
    },
    {
      imgUrl:"a9",
      name:"奔波儿灞",
      address:"上海市闵行区绿地科技岛广场A座2606室",
      company:"Baidu, Inc",
      email:"xxx@baidu.com",
      weibo:"http://weibo.com/xxx",
      phone:"(123) 456-7890",
      pos:"攻城师"
    },
    {
      imgUrl:"a5",
      name:"奔波儿灞",
      address:"上海市闵行区绿地科技岛广场A座2606室",
      company:"Baidu, Inc",
      email:"xxx@baidu.com",
      weibo:"http://weibo.com/xxx",
      phone:"(123) 456-7890",
      pos:"攻城师"
    },
    {
      imgUrl:"a8",
      name:"奔波儿灞",
      address:"甘肃·兰州",
      company:"Baidu, Inc",
      email:"xxx@baidu.com",
      weibo:"http://weibo.com/xxx",
      phone:"(123) 456-7890",
      pos:"Marketing manager"
    },
    {
      imgUrl:"a9",
      name:"奔波儿灞",
      address:"上海市闵行区绿地科技岛广场A座2606室",
      company:"Baidu, Inc",
      email:"xxx@baidu.com",
      weibo:"http://weibo.com/xxx",
      phone:"(123) 456-7890",
      pos:"攻城师"
    },
  ]

  constructor(){}

  getDatas(){
    return this.contacts;
  }

}
