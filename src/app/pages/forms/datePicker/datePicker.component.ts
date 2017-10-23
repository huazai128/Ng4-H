import { Component } from "@angular/core";
import * as moment from "moment";

@Component({
  selector:"page-date",
  templateUrl:"./datePicker.html",
  styleUrls:["./datePicker.scss"]
})

export class DatePickerComponent{

  public _date = null;
  public _date1 = null;
  public _startDate = null;
  public _endDate = null;

  constructor(){}

  public newArray = (len) => {
    const result = [];
    for (let i = 0; i < len; i++) {
      result.push(i);
    }
    return result;
  }
  public _startValueChange = () => {
    if (this._startDate > this._endDate) {
      this._endDate = null;
    }
  }
  public _endValueChange = () => {
    if (this._startDate > this._endDate) {
      this._startDate = null;
    }
  }
  public _disabledStartDate = (startValue) => {
    if (!startValue || !this._endDate) {
      return false;
    }
    return startValue.getTime() >= this._endDate.getTime();
  }
  public _disabledEndDate = (endValue) => {
    if (!endValue || !this._startDate) {
      return false;
    }
    return endValue.getTime() <= this._startDate.getTime();
  }
  get _isSameDay() {
    return this._startDate && this._endDate && moment(this._startDate).isSame(this._endDate, 'day')
  }
  get _endTime() {
    return {
      nzHideDisabledOptions: true,
      nzDisabledHours: () => {
        return this._isSameDay ? this.newArray(this._startDate.getHours()) : [];
      },
      nzDisabledMinutes: (h) => {
        if (this._isSameDay && h === this._startDate.getHours()) {
          return this.newArray(this._startDate.getMinutes());
        }
        return [];
      },
      nzDisabledSeconds: (h, m) => {
        if (this._isSameDay && h === this._startDate.getHours() && m === this._startDate.getMinutes()) {
          return this.newArray(this._startDate.getSeconds());
        }
        return [];
      }
    }
  }
}
