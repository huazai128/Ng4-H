import { animate,trigger,state,style,transition,keyframes } from "@angular/animations";

export const animat = [
  trigger('enterLeave', [

    // Enter from right
    state('fromRight', style({opacity: 0, transform: 'translateX(50%)'})),
    transition('viod => *', [
      style({opacity: 1, transform: 'translateX(0%)'}),
      animate('800ms ease-in-out')
    ]),
    transition('* => void', [
      style({opacity: 0, transform: 'translateX(50%)'}),
      animate('300ms ease-in-out')
    ]),

    // Enter from left
    state('fromLeft', style({opacity: 1, transform: 'translateX(0)'})),
    transition('* => fromLeft', [
      style({opacity: 0, transform: 'translateX(-5%)'}),
      animate('400ms ease-in-out')
    ]),
    state('fromLeftOut', style({opacity: 0, transform: 'translateX(5%)'})),
    transition('fromLeft => fromLeftOut', [
      style({opacity: 1, transform: 'translateX(0)'}),
      animate('300ms ease-in-out')
    ]),

    // Rotate
    state('scale', style({opacity: 1, transform: 'scale(1)'})),
    transition('* => scale', [
      style({opacity: 0, transform: 'scale(0)'}),
      animate('400ms ease-in-out')
    ]),
    state('scaleOut', style({opacity: 0, transform: 'scale(0)'})),
    transition('scale => scaleOut', [
      style({opacity: 1, transform: 'scale(1)'}),
      animate('400ms ease-in-out')
    ]),

    // Scale
    state('rotate', style({opacity: 1, transform: 'rotate(0deg)'})),
    transition('* => rotate', [
      style({opacity: 0, transform: 'rotate(5deg)'}),
      animate('400ms ease-in-out')
    ]),
    state('rotateOut', style({opacity: 0, transform: 'rotate(-5deg)'})),
    transition('rotate => rotateOut', [
      style({opacity: 1, transform: 'rotate(0deg)'}),
      animate('400ms ease-in-out')
    ]),

    // ins
    state("ins",style({transform:"translateX(0)"})),
    transition("void => *",[
      animate(300,keyframes([
        style({opacity:0,transform:"translateX(-100%)",offset:0}),
        style({opacity:1,transform:"translateX(25)",offset:0.3}),
        style({opacity:1,transform:"translateX(0)",offset:1}),
      ]))
    ]),
    transition("* => void",[
      animate(300,keyframes([
        style({opacity: 1,transform:"translateX(0)",offset: 0}),
        style({opacity: 1,transform:"translateX(-25px)",offset: 0.7}),
        style({opacity: 1,transform:"translateX(100%)",offset: 1}),
      ]))
    ])
  ])
]
