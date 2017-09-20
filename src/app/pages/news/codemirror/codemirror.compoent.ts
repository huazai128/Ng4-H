import { Component } from "@angular/core";

@Component({
  selector:"page-codemirror",
  templateUrl:"./codemirror.html",
  styleUrls:["./codemirror.scss"]
})

export class CodemirrorCompoent{

  public code:any;

  public config = {
    lineNumbers: true,
    matchBrackets: true,
    styleActiveLine: true,
    theme: "default"
  };

  public config1 = {
    lineNumbers: true,
    matchBrackets: true,
    styleActiveLine: true,
  };

  constructor(){}

  ngOnInit(){
    this.code = "<script>\n" +
      "    // Code goes here\n" +
      "\n" +
      "     // For demo purpose - animation css script\n" +
      "    function animationHover(element, animation) {\n" +
      "        element = $(element);\n" +
      "        element.hover(\n" +
      "            function () {\n" +
      "                element.addClass('animated ' + animation);\n" +
      "            },\n" +
      "            function () {\n" +
      "                //wait for animation to finish before removing classes\n" +
      "                window.setTimeout(function () {\n" +
      "                    element.removeClass('animated ' + animation);\n" +
      "                }, 2000);\n" +
      "            });\n" +
      "    }\n" +
      "</script>"
  }

  onFocus(){
    console.log("=====")
  }

  onBlur(){
    console.log()
  }
}
