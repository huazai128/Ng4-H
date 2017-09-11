import { Injectable } from "@angular/core";

@Injectable()
export class CheckEmailService{

  private imgs =[
    {
      name:"Document_2014.doc",
      url:"",
    },
    {
      name:"Italy street.jpg",
      url:"p1",
    },
    {
      name:"My feel.png",
      url:"p2",
    }
  ]

  constructor(){}

  public getImgs(){
    return this.imgs;
  }
}
