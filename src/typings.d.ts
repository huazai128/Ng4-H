/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare module '*';

//
// interface JQuery {
//   plot():any;
// }
interface JQueryStatic{
  plot(dome,options1, options2):any
}




