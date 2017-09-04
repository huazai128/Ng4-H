import { Pipe,PipeTransform } from "@angular/core";
import { layoutPaths } from "../../../theme";

@Pipe({name:"baProfilePicture"})
export class BaProfileImgPipe implements PipeTransform{
  transform(input:string,ext = "png"):string{
    // console.log(ext);
    return layoutPaths.images.root + input + "." + ext;
  }
}
