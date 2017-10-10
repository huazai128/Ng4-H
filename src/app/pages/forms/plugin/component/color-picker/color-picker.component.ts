import { Component } from "@angular/core";
import {ColorPickerService, Rgba} from 'angular4-color-picker';

export class Cmyk {
  constructor(public c: number, public m: number, public y: number, public k: number) { }
}

@Component({
  selector:"page-color-picker",
  templateUrl:"./color-picker.html",
  styleUrls:["./style.scss"],
  providers:[ColorPickerService]
})

export class ColorPickerComponent{

  constructor(private cpService: ColorPickerService) {
    this.arrayColors['color'] = '#2883e9';
    this.arrayColors['color2'] = '#e920e9';
  }

  public color: string = '#2889e9';
  public color2: string = "hsla(300,82%,52%)";
  private arrayColors: any = {};
  private selectedColor: string = 'color';

  private toggle: boolean;
  private toggle2: boolean;
  private lastColor = '#ff0';
  private cmyk: Cmyk = new Cmyk(0, 0, 0, 0);

  onChangeColor(color: string): Cmyk {
    return this.rgbaToCmyk(this.cpService.hsvaToRgba(this.cpService.stringToHsva(color)));
  }

  rgbaToCmyk(rgba: Rgba): Cmyk {
    let cmyk: Cmyk = new Cmyk(0, 0, 0, 0), k: number;
    k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
    if (k == 1) return new Cmyk(0, 0, 0, 1);
    cmyk.c = (1 - rgba.r - k) / (1 - k);
    cmyk.m = (1 - rgba.g - k) / (1 - k);
    cmyk.y = (1 - rgba.b - k) / (1 - k);
    cmyk.k = k;
    return cmyk;
  }

  onChangeColorHex8(color: string): string {
    return this.cpService.outputFormat(this.cpService.stringToHsva(color, true), 'rgba', true);
  }
}

