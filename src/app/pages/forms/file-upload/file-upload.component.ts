import { Component } from "@angular/core";
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector:"page-file-upload",
  templateUrl:"./file-upload.html",
  styleUrls:["./file-upload.scss"]
})

export class FileUploadComponent{

  public uploader:FileUploader = new FileUploader({url: "http://localhost:8080"});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
