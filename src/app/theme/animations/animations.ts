import { animate,trigger,state,style,transition,keyframes } from "@angular/animations";

export const animat = [
  trigger('enterLeave', [
    state("ins",style({transform:"translateX(0)"})),
    transition("void => *",[
      animate(500,keyframes([
        style({opacity:0,transform:"translateX(100%)",offset:0}),
        style({opacity:1,transform:"translateX(-25px)",offset:0.3}),
        style({opacity:1,transform:"translateX(0)",offset:1}),
      ]))
    ]),
    transition("* => void",[
      animate(500,keyframes([
        style({opacity: 1,transform:"translateX(0)",offset: 0}),
        style({opacity: 1,transform:"translateX(25px)",offset: 0.7}),
        style({opacity: 1,transform:"translateX(-100%)",offset: 1}),
      ]))
    ])
  ])
]
