import { Component,ViewChild,ElementRef,ViewEncapsulation } from "@angular/core";
import { ImageCropperComponent,CropperSettings,Bounds } from "ng2-img-cropper";


@Component({
  selector:"page-avatar",
  templateUrl:"./avatar.html",
  styleUrls:["./avatar.scss"],
  encapsulation: ViewEncapsulation.None
})

export class AvatarComponent{

  @ViewChild("cropper") cropper:ImageCropperComponent;

  public showDetail:boolean;
  public showUpload:boolean;
  public data:any;
  public cropperSettings:CropperSettings;

  constructor(){
    this.showDetail = false;
    this.showUpload = false;
    this.data = new Image();
  }
  ngOnInit(){
    this.setupCropper();
  }

  // 配置
  private setupCropper(){
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 200;
    this.cropperSettings.height = 200;
    this.cropperSettings.croppedWidth = 200;
    this.cropperSettings.croppedHeight = 200;
    this.cropperSettings.canvasWidth = 200;
    this.cropperSettings.canvasHeight = 200;
    this.cropperSettings.rounded = true;
    this.data = {};
  }
  //
  fileChangeListener($event){
    const image:any = new Image();
    const file:File = $event.target.files[0];
    const reader:FileReader = new FileReader();
    reader.onloadend = ($ev:any) => {
      image.src = $ev.target.result;
      this.cropper.setImage(image);
    }
    reader.readAsDataURL(file);
  }

  // 上传
  public uploadFile(){
    this.showUpload = true;
    console.log(this.data.image);
  }

  // 取消
  toggleDetail() {
    if (this.showDetail) {
      this.showDetail = false;
    } else {
      this.showDetail = true;
    }
  }

  toggleUpload() {
    if (this.showUpload) {
      this.showUpload = false;
    } else {
      this.showUpload = true;
    }
  }
}
