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

// 支持require的引入
interface WebpackRequire {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
}
interface NodeRequire extends WebpackRequire {}
declare var require: NodeRequire;


declare var Switchery:any;


