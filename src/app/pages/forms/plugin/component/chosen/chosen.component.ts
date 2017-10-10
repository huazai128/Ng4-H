import { Component } from "@angular/core";

@Component({
  selector:"page-chosen",
  templateUrl:"./chosen.html",
  styles:[`
    .chosen-group{
      margin-bottom: 20px;
    }
  `]
})
export class ChosenComponent{

  public searchOptions = [
    { value: 'jack', label: '杰克' },
    { value: 'lucy', label: '露西' },
    { value: 'tom', label: '汤姆',disabled: true }
  ];
  selectedMultipleOption = [this.searchOptions[0]];

  constructor(){}

  ngOnInit() {
    /*模拟服务器异步加载*/
    setTimeout(_ => {
      this.searchOptions = [
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'tom', label: 'Tom' }
      ];
    }, 100);

    setTimeout(_ => {
      this.selectedMultipleOption = [];
    }, 2000);
  }
}
