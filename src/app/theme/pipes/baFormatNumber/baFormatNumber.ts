import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name:"baFormatNumber"})
export class BaFormatNumber implements PipeTransform {
  transform(value: any): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
