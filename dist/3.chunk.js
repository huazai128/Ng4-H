webpackJsonp([3],{

/***/ "../../../../../src/app/pages/home/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_one__ = __webpack_require__("../../../../../src/app/pages/home/components/page-one/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__page_one__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__page_one__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__page_one__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_two__ = __webpack_require__("../../../../../src/app/pages/home/components/page-two/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__page_two__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__page_two__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__page_two__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__page_two__["d"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-one/component/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__news__ = __webpack_require__("../../../../../src/app/pages/home/components/page-one/component/news/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__news__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__("../../../../../src/app/pages/home/components/page-one/component/project/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__project__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-one/component/news/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__news_component__ = __webpack_require__("../../../../../src/app/pages/home/components/page-one/component/news/news.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__news_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-one/component/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_one_service__ = __webpack_require__("../../../../../src/app/pages/home/components/page-one/page-one.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsComponent = (function () {
    function NewsComponent(_service) {
        this._service = _service;
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.news = this._service.getNews();
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-news",
        template: __webpack_require__("../../../../../src/app/pages/home/components/page-one/component/news/news.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__page_one_service__["a" /* PageOneService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__page_one_service__["a" /* PageOneService */]) === "function" && _a || Object])
], NewsComponent);

var _a;
//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-one/component/news/news.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ibox-content\">\n  <div>\n    <div class=\"feed-activity-list\">\n      <div class=\"feed-element clearfix\" *ngFor=\"let new of news\">\n        <a href class=\"pull-left\">\n          <img alt=\"image\" class=\"img-circle\" [src]=\"new.name | baProfilePicture:'jpg'\">\n        </a>\n        <div class=\"media-body\">\n          <small class=\"pull-right\">{{new.time}}</small>\n          <strong>{{new.user}}</strong> {{new.text}}\n          <br>\n          <small class=\"text-muted\">{{new.date}}</small>\n        </div>\n      </div>\n\n    </div>\n    <button class=\"btn btn-primary btn-block\"><i class=\"fa fa-arrow-down\"></i> 加载更多</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-one/component/project/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_component__ = __webpack_require__("../../../../../src/app/pages/home/components/page-one/component/project/project.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__project_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-one/component/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = (function () {
    function ProjectComponent() {
        this.opitons = {
            fill: '#1ab394',
            stroke: '#169c81',
            width: 64,
            height: 16
        };
        this.isChanges = true;
    }
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-project",
        template: __webpack_require__("../../../../../src/app/pages/home/components/page-one/component/project/project.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__("../../../../../src/app/pages/home/components/page-one/component/project/project.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProjectComponent);

//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-one/component/project/project.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ibox-content ibox-heading\">\n  <h3>还有约79842492229个Bug需要修复</h3>\n  <small><i class=\"fa fa-map-marker\"></i> 地点当然是在办公室</small>\n</div>\n<div class=\"ibox-content timeline\">\n  <div class=\"timeline-item\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 offset-sm-1 date\">\n        <i class=\"fa fa-briefcase\"></i>\n        6:00\n        <br/>\n        <small class=\"text-navy\">2 小时前</small>\n      </div>\n      <div class=\"col-sm-7 content no-top-border\">\n        <p class=\"m-b-xs\"><strong>服务器已彻底崩溃</strong></p>\n        <p>还未检查出错误</p>\n        <p><ba-peity stylePeity=\"line\" [options]=\"opitons\" isChanges=\"true\" >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,4,7,3,2,9,8,7,4,5,1,2,9,5,4,7,2,7,7,3,5,2</ba-peity></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"timeline-item\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 offset-sm-1 date\">\n        <i class=\"fa fa-file-text\"></i>\n        7:00\n        <br/>\n        <small class=\"text-navy\">3小时前</small>\n      </div>\n      <div class=\"col-sm-7 content\">\n        <p class=\"m-b-xs\"><strong>修复了0.5个bug</strong>\n        </p>\n        <p>重启服务</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"timeline-item\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 offset-sm-1 date\">\n        <i class=\"fa fa-coffee\"></i>\n        8:00\n        <br/>\n      </div>\n      <div class=\"col-sm-7 content\">\n        <p class=\"m-b-xs\"><strong>喝水、上厕所、做测试</strong>\n        </p>\n        <p>\n          喝了4杯水，上了3次厕所，控制台输出出2324个错误，神啊，带我走吧\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"timeline-item\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 offset-sm-1 date\">\n        <i class=\"fa fa-phone\"></i>\n        11:00\n        <br/>\n        <small class=\"text-navy\">21小时前</small>\n      </div>\n      <div class=\"col-sm-7 content\">\n        <p class=\"m-b-xs\"><strong>项目经理打电话来了</strong>\n        </p>\n        <p>\n          TMD，项目经理居然还没有起床！！！\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"timeline-item\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 offset-sm-1 date\">\n        <i class=\"fa fa-user-md\"></i>\n        09:00\n        <br/>\n        <small>21小时前</small>\n      </div>\n      <div class=\"col-sm-7 content\">\n        <p class=\"m-b-xs\"><strong>开会</strong>\n        </p>\n        <p>\n          开你妹的会，老子还有897894个bug没有修复\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"timeline-item\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 offset-sm-1 date\">\n        <i class=\"fa fa-comments\"></i>\n        12:50\n        <br/>\n        <small class=\"text-navy\">讨论</small>\n      </div>\n      <div class=\"col-sm-7 content\">\n        <p class=\"m-b-xs\"><strong>…………</strong>\n        </p>\n        <p>\n          又是操蛋的一天\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-one/component/project/project.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ibox-heading {\n  padding: 20px;\n  background-color: #f3f6fb;\n  border-bottom: none; }\n  .ibox-heading h3 {\n    font-size: 24px;\n    font-weight: 200;\n    color: #151313; }\n  .ibox-heading small {\n    color: #151313;\n    font-size: 80%; }\n\n.timeline {\n  padding: 20px 0;\n  margin-left: -20px; }\n  .timeline .text-navy {\n    color: #1ab394; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-one/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_one_component__ = __webpack_require__("../../../../../src/app/pages/home/components/page-one/page-one.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__page_one_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__("../../../../../src/app/pages/home/components/page-one/component/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["b"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-one/page-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_one_service__ = __webpack_require__("../../../../../src/app/pages/home/components/page-one/page-one.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageOneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageOneComponent = (function () {
    function PageOneComponent(_service) {
        this._service = _service;
        this.title = "HuaZai";
        this.title1 = "数据报告";
        this.pieStyles = {
            bar: "bar",
            line: "line"
        };
        // 公用配置
        this.configObj = {
            barConfig: {
                fill: ["#1ab394", "#d7a0a7"],
                width: 100
            },
            barConfig1: {
                type: 'bar',
                barWidth: 8,
                height: '150px',
                barColor: '#1ab394',
                negBarColor: '#c6c6c6'
            }
        };
    }
    PageOneComponent.prototype.ngOnInit = function () {
        this.dataset = [this._service.getData1(), this._service.getData2()];
        this.options = {
            series: {
                lines: {
                    show: false,
                    fill: true
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.4
                },
                points: {
                    radius: 0,
                    show: true
                },
                shadowSize: 1
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#d5d5d5",
                borderWidth: 1,
                color: '#d5d5d5'
            },
            colors: ["#1ab394", "#464f88"],
            xaxis: {},
            yaxis: {
                ticks: 4
            },
            tooltip: false
        };
        this.charts = this._service.getPieChart();
    };
    PageOneComponent.prototype.ngOnDestroy = function () {
        this.options = null;
        this.dataset = [];
    };
    return PageOneComponent;
}());
PageOneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-one",
        template: __webpack_require__("../../../../../src/app/pages/home/components/page-one/page-one.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/components/page-one/page-one.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        providers: [__WEBPACK_IMPORTED_MODULE_1__page_one_service__["a" /* PageOneService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__page_one_service__["a" /* PageOneService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__page_one_service__["a" /* PageOneService */]) === "function" && _a || Object])
], PageOneComponent);

var _a;
//# sourceMappingURL=page-one.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-one/page-one.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row page-one\">\n  <div class=\"col-md-12 col-sm-12\">\n    <ba-card [cardTitle]=\"title\" [selectType]=\"select\">\n      <ba-card-config></ba-card-config>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <h2>Hell0,HuaZai</h2>\n          <small>您有32条消息和6个待处理事项</small>\n          <ul class=\"list-group clear-list\">\n            <li class=\"list-group-item fist-item\">\n              <span class=\"pull-right\">09:00</span>\n              <span class=\"label label-success\">1</span> 请联系我\n            </li>\n            <li class=\"list-group-item\">\n              <span class=\"pull-right\">10:16</span>\n              <span class=\"label label-info\">2</span> 签订合同\n            </li>\n            <li class=\"list-group-item\">\n              <span class=\"pull-right\">08:22</span>\n              <span class=\"label label-primary\">3</span> 新分店开张\n            </li>\n            <li class=\"list-group-item\">\n              <span class=\"pull-right\">11:06</span>\n              <span class=\"label label-default\">4</span> 打电话给璟雯\n            </li>\n            <li class=\"list-group-item\">\n              <span class=\"pull-right\">12:00</span>\n              <span class=\"label label-primary\">5</span> 发邮件给国民岳父\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"flot-chart dashboard-chart\">\n            <ba-flot [options]=\"options\" [dataset]=\"dataset\"></ba-flot>\n          </div>\n          <div class=\"row text-left\">\n            <div class=\"col-sm-4\">\n              <div class=\"m-l-md\">\n                <span class=\"h4 font-bold m-t block\">&yen; 406,100</span>\n                <small class=\"text-color m-b block\">销售营销报告</small>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <span class=\"h4 font-bold m-t block\">&yen; 150,401</span>\n              <small class=\"text-color m-b block\">年销售收入</small>\n            </div>\n            <div class=\"col-sm-4\">\n              <span class=\"h4 font-bold m-t block\">&yen; 16,822</span>\n              <small class=\"text-color m-b block\">半年收入利润率</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-3\">\n          <div class=\"statistic-box\">\n            <h4>项目的进度</h4>\n            <p>您还有两项未完成的任务</p>\n            <div class=\"row text-center\">\n              <div class=\"col-lg-6\" *ngFor=\"let chart of charts\">\n                <ba-pie-chart [color]=\"chart.color\" [percent]=\"chart.percent\"></ba-pie-chart>\n                <h5>{{chart.name}}</h5>\n              </div>\n            </div>\n            <div class=\"m-t\">\n              <small>请尽快完成相关项目的开发、测试工作</small>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ba-card>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-4 ui-sortable\">\n\n    <ba-card [cardTitle]=\"title1\" [selectType]=\"select\">\n      <ba-card-config></ba-card-config>\n      <div class=\"ibox-content\">\n        <div>\n          <div class=\"pull-right text-right\">\n            <ba-peity [stylePeity]=\"pieStyles.bar\" [options]=\"configObj.barConfig\">5,3,9,6,5,9,7,3,5,2,4,7,3,2,7,9,6,4,5,7,3,2,1,0,9,5,6,8,3,2,1</ba-peity>\n            <br/>\n            <small class=\"font-bold\">&yen; 20 054.43</small>\n          </div>\n          <h4>广东省销售数据\n            <br/>\n            <small class=\"m-r\"><a>查看所有数据</a></small>\n          </h4>\n        </div>\n      </div>\n    </ba-card>\n\n    <ba-card cardTitle=\"最新动态\" [selectType]=\"select\" baBodyClass=\"no-padding\">\n      <ba-card-config></ba-card-config>\n      <div class=\"ibox-content\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\">\n            <p><a class=\"text-info\" href>#感谢有你#</a> 感谢你们一路的相伴，未来也请让我为你们撑腰，我们会更好</p>\n            <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 1分钟前</small>\n          </li>\n          <li class=\"list-group-item\">\n            <p><a class=\"text-info\" href>@颜文字君</a> 女生身高×1.09后，就是最适合你的男生身高；相反，男生是÷1.09就可以了..小伙伴们可以试着算下..【图是我的..(*/ω＼*)</p>\n            <div class=\"text-center\">\n              sparkline8\n            </div>\n            <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 2小时前</small>\n          </li>\n\n          <li class=\"list-group-item\">\n            <p><a class=\"text-info\" href>#发型师#</a> 刚才剪发，顾客在看这个视频，妈蛋，这舞姿太销魂了，笑得手颤抖。。。</p>\n            <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 1分钟前</small>\n          </li>\n          <li class=\"list-group-item\">\n            <p><a class=\"text-info\" href>#一年级#</a> ——#陈氏父子# cut：“他是我的陈爸爸”[心]“我叫陈思成，陈老师的陈” [心]“不再见就是，你也好，爸爸也好，妈妈也好，都永远不要说再见</p>\n            <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 2分钟前</small>\n          </li>\n        </ul>\n      </div>\n    </ba-card>\n  </div>\n\n  <div class=\"col-lg-4 ui-sortable\">\n    <ba-card cardTitle=\"最新消息\" selectType=\"ibox-tools\" baBodyClass=\"padding-size\" title=\"10条消息\">\n      <page-news></page-news>\n    </ba-card>\n  </div>\n\n  <div class=\"col-lg-4 ui-sortable\">\n    <ba-card cardTitle=\"项目进度\" selectType=\"ba-card-config\" baBodyClass=\"no-padding\">\n      <ba-card-config></ba-card-config>\n      <page-project></page-project>\n    </ba-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-one/page-one.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".label-primary,\n.badge-primary {\n  background-color: #1ab394;\n  color: #FFFFFF; }\n\n.label-success,\n.badge-success {\n  background-color: #1c84c6;\n  color: #FFFFFF; }\n\n.label-warning,\n.badge-warning {\n  background-color: #f8ac59;\n  color: #FFFFFF; }\n\n.label-warning-light,\n.badge-warning-light {\n  background-color: #f8ac59;\n  color: #ffffff; }\n\n.label-danger,\n.badge-danger {\n  background-color: #ed5565;\n  color: #FFFFFF; }\n\n.label-info,\n.badge-info {\n  background-color: #23c6c8;\n  color: #FFFFFF; }\n\n.label-inverse,\n.badge-inverse {\n  background-color: #262626;\n  color: #FFFFFF; }\n\n.label-white,\n.badge-white {\n  background-color: #FFFFFF;\n  color: #5E5E5E; }\n\n.label-white,\n.badge-disable {\n  background-color: #2A2E36;\n  color: #8B91A0; }\n\n.list-group {\n  margin-top: 15px; }\n  .list-group .list-group-item {\n    background-color: inherit;\n    display: block;\n    margin-bottom: -1px;\n    padding: 10px 0;\n    position: relative;\n    border: 0;\n    border-bottom: 1px solid #e7eaec; }\n    .list-group .list-group-item .label {\n      display: inline;\n      padding: .2em .6em .3em;\n      font-size: 75%;\n      font-weight: 700;\n      line-height: 1;\n      color: #fff;\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: baseline;\n      border-radius: .25em; }\n    .list-group .list-group-item:last-child {\n      border-bottom: 0; }\n\n.page-one h2 {\n  font-weight: 100; }\n\n.page-one .text-left {\n  padding-left: 30px; }\n  .page-one .text-left .text-color {\n    color: #c3c6c7; }\n  .page-one .text-left span {\n    display: block;\n    padding-top: 12px;\n    font-size: 1.3rem; }\n\n.page-one .statistic-box .h4 {\n  font-size: 16px; }\n\n.page-one .statistic-box .col-lg-6 h5 {\n  font-weight: normal;\n  font-size: 12px;\n  padding-top: 5px; }\n\n.ui-sortable .ibox-content h4 {\n  font-size: 16px; }\n  .ui-sortable .ibox-content h4 .m-r {\n    text-decoration: none;\n    color: #00abff; }\n\n.ui-sortable .ibox-content .list-group {\n  margin-top: 3px; }\n  .ui-sortable .ibox-content .list-group li.list-group-item {\n    padding: 10px 15px;\n    border-bottom: 1px solid #e5e5e5; }\n    .ui-sortable .ibox-content .list-group li.list-group-item > p {\n      margin-bottom: 4px; }\n    .ui-sortable .ibox-content .list-group li.list-group-item:last-child {\n      border-bottom: 0; }\n\n.ui-sortable .ibox-content .feed-activity-list {\n  margin-bottom: 15px; }\n  .ui-sortable .ibox-content .feed-activity-list .feed-element {\n    padding: 10px 0;\n    border-bottom: 1px solid #e5e5e5; }\n    .ui-sortable .ibox-content .feed-activity-list .feed-element .media-body {\n      margin-left: 50px; }\n      .ui-sortable .ibox-content .feed-activity-list .feed-element .media-body .text-muted {\n        display: inline-block;\n        padding-top: 6px; }\n    .ui-sortable .ibox-content .feed-activity-list .feed-element .img-circle {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-one/page-one.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageOneService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageOneService = (function () {
    function PageOneService() {
        this.data1 = [
            [0, 4], [1, 8], [2, 5], [3, 10], [4, 4], [5, 16], [6, 5], [7, 11], [8, 6], [9, 11], [10, 30], [11, 10], [12, 13], [13, 4], [14, 3], [15, 3], [16, 6]
        ];
        this.data2 = [
            [0, 1], [1, 0], [2, 2], [3, 0], [4, 1], [5, 3], [6, 1], [7, 5], [8, 2], [9, 3], [10, 2], [11, 1], [12, 0], [13, 2], [14, 8], [15, 0], [16, 0]
        ];
        this.charts = [
            {
                color: "#f8ac59",
                percent: 60,
                name: "OA测"
            },
            {
                color: "#1c84c6",
                percent: 80,
                name: "CRM"
            }
        ];
        this.news = [
            {
                name: 'a1',
                text: 'Vlad posted a new article.',
                time: '1 min ago',
                date: '2017-05-12',
                user: "华仔"
            },
            {
                name: 'a2',
                text: 'Kostya changed his contact information.',
                time: '2 hrs ago',
                date: '2017-05-12',
                user: "糖糖"
            },
            {
                name: 'a3',
                text: 'New orders received.',
                time: '5 hrs ago',
                date: '2017-05-12',
                user: '妹子'
            },
            {
                name: 'a4',
                text: 'Andrey replied to your comment.',
                time: '1 day ago',
                date: '2017-05-12',
                user: '妹子'
            },
            {
                name: 'a5',
                text: 'Today is Nasta\'s birthday.',
                time: '2 days ago',
                date: '2017-05-12',
                user: '妹子'
            },
            {
                name: 'a6',
                text: 'New comments on your post.',
                time: '3 days ago',
                date: '2017-05-12',
                user: '妹子'
            },
            {
                name: 'a7',
                text: 'Kostya invited you to join the event.',
                time: '1 week ago',
                date: '2017-05-12',
                user: '妹子'
            }
        ];
    }
    PageOneService.prototype.getData1 = function () {
        return this.data1;
    };
    PageOneService.prototype.getData2 = function () {
        return this.data2;
    };
    PageOneService.prototype.getPieChart = function () {
        return this.charts;
    };
    PageOneService.prototype.getNews = function () {
        return this.news;
    };
    return PageOneService;
}());
PageOneService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], PageOneService);

//# sourceMappingURL=page-one.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-two/flot-data/flot-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_two_service__ = __webpack_require__("../../../../../src/app/pages/home/components/page-two/page-two.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlotDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlotDataComponent = (function () {
    function FlotDataComponent(_service) {
        this._service = _service;
    }
    FlotDataComponent.prototype.ngOnInit = function () {
        this.flotData = this._service.getFlotData();
    };
    return FlotDataComponent;
}());
FlotDataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "flot-data",
        template: __webpack_require__("../../../../../src/app/pages/home/components/page-two/flot-data/flot-data.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/components/page-two/flot-data/flot-data.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__page_two_service__["a" /* PageTwoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__page_two_service__["a" /* PageTwoService */]) === "function" && _a || Object])
], FlotDataComponent);

var _a;
//# sourceMappingURL=flot-data.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-two/flot-data/flot-data.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"stat-list\">\n  <li *ngFor=\"let flot of flotData\">\n    <h2 class=\"no-margins\">{{flot.numb | baFormatNumber}}</h2>\n    <small>{{flot.name}}</small>\n    <div class=\"stat-percent pull-right\">{{flot.width}} <i class=\"fa {{ flot.icon}} text-navy\"></i>\n    </div>\n    <div class=\"progress progress-mini\">\n      <div [style.width]=\"flot.width\" class=\"progress-bar\"></div>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-two/flot-data/flot-data.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stat-list li {\n  padding: 8px 0; }\n  .stat-list li > h2 {\n    font-weight: 300;\n    font-size: 24px;\n    margin: 0;\n    padding: 0; }\n  .stat-list li > div .text-navy {\n    color: #1ab394; }\n  .stat-list li .progress {\n    margin: 8px 0; }\n    .stat-list li .progress .progress-bar {\n      height: 5px;\n      background-color: #1ab394; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-two/flot-data/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flot_data_component__ = __webpack_require__("../../../../../src/app/pages/home/components/page-two/flot-data/flot-data.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__flot_data_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-two/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_two_component__ = __webpack_require__("../../../../../src/app/pages/home/components/page-two/page-two.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__page_two_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__siteData__ = __webpack_require__("../../../../../src/app/pages/home/components/page-two/siteData/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__siteData__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flot_data__ = __webpack_require__("../../../../../src/app/pages/home/components/page-two/flot-data/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__flot_data__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vectorMap__ = __webpack_require__("../../../../../src/app/pages/home/components/page-two/vectorMap/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__vectorMap__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-two/page-two.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_two_service__ = __webpack_require__("../../../../../src/app/pages/home/components/page-two/page-two.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTwoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageTwoComponent = (function () {
    function PageTwoComponent(_service) {
        this._service = _service;
        this.dataset = [
            {
                label: "订单数",
                data: this._service.getData2(),
                color: "#1ab394",
                bars: {
                    show: true,
                    align: "center",
                    barWidth: 24 * 60 * 60 * 600,
                    lineWidth: 0
                }
            }, {
                label: "付款数",
                data: this._service.getData1(),
                yaxis: 2,
                color: "#464f88",
                lines: {
                    lineWidth: 1,
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 0.2
                            }, {
                                opacity: 0.2
                            }]
                    }
                },
                splines: {
                    show: false,
                    tension: 0.6,
                    lineWidth: 1,
                    fill: 0.1
                },
            }
        ];
        this.options = {
            xaxis: {
                mode: "time",
                tickSize: [3, "day"],
                tickLength: 0,
                axisLabel: "Date",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Arial',
                axisLabelPadding: 10,
                color: "#838383"
            },
            yaxes: [{
                    position: "left",
                    max: 1070,
                    color: "#838383",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Arial',
                    axisLabelPadding: 3
                }, {
                    position: "right",
                    clolor: "#838383",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: ' Arial',
                    axisLabelPadding: 67
                }
            ],
            legend: {
                noColumns: 1,
                labelBoxBorderColor: "#000000",
                position: "nw"
            },
            grid: {
                hoverable: false,
                borderWidth: 0,
                color: '#838383'
            }
        };
    }
    PageTwoComponent.prototype.ngOnInit = function () {
    };
    PageTwoComponent.prototype.ngOnDestroy = function () {
        this.options = null;
        this.dataset = [];
    };
    return PageTwoComponent;
}());
PageTwoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-two",
        template: __webpack_require__("../../../../../src/app/pages/home/components/page-two/page-two.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        providers: [__WEBPACK_IMPORTED_MODULE_1__page_two_service__["a" /* PageTwoService */]],
        styles: [__webpack_require__("../../../../../src/app/pages/home/components/page-two/page-two.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__page_two_service__["a" /* PageTwoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__page_two_service__["a" /* PageTwoService */]) === "function" && _a || Object])
], PageTwoComponent);

var _a;
//# sourceMappingURL=page-two.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-two/page-two.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12\">\n    <page-site></page-site>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <ba-card cardTitle=\"订单\" selectType=\"ibox-data\">\n      <div class=\"ibox-data\">\n        <div class=\"pull-right\">\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-xs btn-white active\">天</button>\n            <button type=\"button\" class=\"btn btn-xs btn-white\">月</button>\n            <button type=\"button\" class=\"btn btn-xs btn-white\">年</button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"ibox-content\">\n        <div class=\"row\">\n          <div class=\"col-lg-9\">\n            <ba-flot [options]=\"options\" [dataset]=\"dataset\"></ba-flot>\n          </div>\n          <div class=\"col-lg-3\">\n            <flot-data></flot-data>\n          </div>\n        </div>\n      </div>\n    </ba-card>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <ba-card cardTitle=\"消息\" selectType=\"ba-card-config\" baBodyClass=\"no-padding\">\n      <ba-card-config></ba-card-config>\n\n      <div class=\"ibox-content ibox-heading\">\n        <h3><i class=\"fa fa-envelope-o\"></i> 新消息</h3>\n        <small><i class=\"fa fa-tim\"></i> 您有22条未读消息</small>\n      </div>\n\n      <div class=\"ibox-content\">\n        <div class=\"feed-activity-list\">\n          <div class=\"feed-element\">\n            <div>\n              <small class=\"pull-right text-navy\">1月前</small>\n              <strong>井幽幽</strong>\n              <div>有人说：“一辈子很长，要跟一个有趣的人在一起”。我想关注我的人，应该是那种喜欢找乐子也乐意分享乐趣的人，你们一定挺优秀的。所以单身的应该在这条留言，互相勾搭一下。特别有钱人又帅可以直接私信我！</div>\n              <small class=\"text-muted\">4月11日 00:00</small>\n            </div>\n          </div>\n\n          <div class=\"feed-element\">\n            <div>\n              <small class=\"pull-right\">2月前</small>\n              <strong>马伯庸 </strong>\n              <div>又方便，又防水，手感又好，还可以用手机遥控。简直是拍戏利器，由其是跟老师们搭戏的时候…想想还有点小激动啊，嘿嘿。</div>\n              <small class=\"text-muted\">11月8日 20:08 </small>\n            </div>\n          </div>\n\n          <div class=\"feed-element\">\n            <div>\n              <small class=\"pull-right\">5月前</small>\n              <strong>芒果宓 </strong>\n              <div>一个完整的梦。</div>\n              <small class=\"text-muted\">11月8日 20:08 </small>\n            </div>\n          </div>\n\n          <div class=\"feed-element\">\n            <div>\n              <small class=\"pull-right\">5月前</small>\n              <strong>刺猬尼克索</strong>\n              <div>哈哈哈哈 你卖什么萌啊! 蠢死了</div>\n              <small class=\"text-muted\">11月8日 20:08 </small>\n            </div>\n          </div>\n\n          <div class=\"feed-element\">\n            <div>\n              <small class=\"pull-right\">5月前</small>\n              <strong>老刀99</strong>\n              <div>昨天评论里你见过最“温暖和感人”的诗句，整理其中经典100首，值得你收下学习。</div>\n              <small class=\"text-muted\">11月8日 20:08 </small>\n            </div>\n          </div>\n          <div class=\"feed-element\">\n            <div>\n              <small class=\"pull-right\">5月前</small>\n              <strong>娱乐小主 </strong>\n              <div>你是否想过记录自己的梦？你是否想过有自己的一个记梦本？小时候写日记，没得写了就写昨晚的梦，后来变成了习惯………翻了一晚上自己做过的梦，想哭，想笑…</div>\n              <small class=\"text-muted\">11月8日 20:08 </small>\n            </div>\n          </div>\n          <div class=\"feed-element\">\n            <div>\n              <small class=\"pull-right\">5月前</small>\n              <strong>DMG电影 </strong>\n              <div>《和外国男票乘地铁，被中国大妈骂不要脸》妹子实在委屈到不行，中国妹子找外国男友很令人不能接受吗？大家都来说说自己的看法</div>\n              <small class=\"text-muted\">11月8日 20:08 </small>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </ba-card>\n  </div>\n\n  <div class=\"col-md-8\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <ba-card cardTitle=\"用户项目列表\" selectType=\"ba-card-config\">\n          <ba-card-config></ba-card-config>\n          <div class=\"ibox-content ibox-table\">\n            <table class=\"table table-hover\">\n              <thead>\n              <tr>\n                <th>状态</th>\n                <th>日期</th>\n                <th>用户</th>\n                <th>值</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr>\n                <td><small>进行中...</small>\n                </td>\n                <td><i class=\"fa fa-clock-o\"></i> 11:20</td>\n                <td>青衣5858</td>\n                <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 24%</td>\n              </tr>\n              <tr>\n                <td><span class=\"label label-warning\">已取消</span>\n                </td>\n                <td><i class=\"fa fa-clock-o\"></i> 10:40</td>\n                <td>徐子崴</td>\n                <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 66%</td>\n              </tr>\n              <tr>\n                <td><small>进行中...</small>\n                </td>\n                <td><i class=\"fa fa-clock-o\"></i> 01:30</td>\n                <td>姜岚昕</td>\n                <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 54%</td>\n              </tr>\n              <tr>\n                <td><small>进行中...</small>\n                </td>\n                <td><i class=\"fa fa-clock-o\"></i> 02:20</td>\n                <td>武汉大兵哥</td>\n                <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 12%</td>\n              </tr>\n              <tr>\n                <td><small>进行中...</small>\n                </td>\n                <td><i class=\"fa fa-clock-o\"></i> 09:40</td>\n                <td>荆莹儿</td>\n                <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 22%</td>\n              </tr>\n              <tr>\n                <td><span class=\"label label-primary\">已完成</span>\n                </td>\n                <td><i class=\"fa fa-clock-o\"></i> 04:10</td>\n                <td>栾某某</td>\n                <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 66%</td>\n              </tr>\n              <tr>\n                <td><small>进行中...</small>\n                </td>\n                <td><i class=\"fa fa-clock-o\"></i> 12:08</td>\n                <td>范范范二妮</td>\n                <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 23%</td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </ba-card>\n      </div>\n      <div class=\"col-md-6\">\n        <ba-card cardTitle=\"任务列表\" selectType=\"ba-card-config\" baBodyClass=\"no-padding\">\n          <ba-card-config></ba-card-config>\n          <div class=\"ibox-table\">\n            <ul class=\"todo-list\">\n              <li>\n                <a href class=\"check-link\"><i class=\"fa fa-check-square\"></i> </a>\n                <span class=\"m-l-xs todo-completed\">开会</span>\n\n              </li>\n              <li>\n                <a href class=\"check-link\"><i class=\"fa fa-check-square\"></i> </a>\n                <span class=\"m-l-xs  todo-completed\">项目开发</span>\n\n              </li>\n              <li>\n                <a href class=\"check-link\"><i class=\"fa fa-square-o\"></i> </a>\n                <span class=\"m-l-xs\">修改bug</span>\n                <small class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> 1小时</small>\n              </li>\n              <li>\n                <a href class=\"check-link\"><i class=\"fa fa-square-o\"></i> </a>\n                <span class=\"m-l-xs\">修改bug</span>\n                <small class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> 1小时</small>\n              </li>\n              <li>\n                <a href class=\"check-link\"><i class=\"fa fa-square-o\"></i> </a>\n                <span class=\"m-l-xs\">修改bug</span>\n                <small class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> 1小时</small>\n              </li>\n              <li>\n                <a href class=\"check-link\"><i class=\"fa fa-square-o\"></i> </a>\n                <span class=\"m-l-xs\">修改bug</span>\n                <small class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> 1小时</small>\n              </li>\n              <li>\n                <a href class=\"check-link\"><i class=\"fa fa-square-o\"></i> </a>\n                <span class=\"m-l-xs\">修改bug</span>\n                <small class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> 1小时</small>\n              </li>\n            </ul>\n          </div>\n        </ba-card>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <ba-card cardTitle=\"用户项目列表\" selectType=\"ba-card-config\">\n          <ba-card-config></ba-card-config>\n          <vector-map></vector-map>\n        </ba-card>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-two/page-two.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ibox-heading {\n  padding: 20px;\n  background-color: #f3f6fb;\n  border-bottom: none;\n  color: inherit; }\n\n.ibox-heading h3 {\n  font-weight: 200;\n  font-size: 24px;\n  color: #000; }\n\n.ibox-heading small {\n  color: #000; }\n\n.feed-activity-list {\n  padding: 0 20px; }\n  .feed-activity-list .feed-element {\n    padding: 15px 0;\n    border-bottom: 1px solid  #f3f3f4; }\n    .feed-activity-list .feed-element:last-child {\n      border-bottom: 0; }\n    .feed-activity-list .feed-element strong {\n      display: block;\n      padding-bottom: 3px; }\n    .feed-activity-list .feed-element small.pull-right {\n      color: #017170; }\n    .feed-activity-list .feed-element > div > div {\n      font-size: 80%; }\n\n.ibox-table table {\n  margin-bottom: 0; }\n  .ibox-table table th {\n    border: 0; }\n\n.ibox-table table th, .ibox-table table td {\n  padding: 0.75rem 0; }\n\ntd span.label {\n  border-radius: 4px;\n  font-size: 90%;\n  padding: 0 3px; }\n\ntd.text-navy {\n  color: #1ab394; }\n\n.todo-list {\n  list-style: none outside none;\n  margin: 0;\n  padding: 15px;\n  font-size: 14px; }\n\n.todo-list.small-list {\n  font-size: 12px; }\n\n.todo-list.small-list > li {\n  background: #f3f3f4;\n  border-left: none;\n  border-right: none;\n  border-radius: 4px;\n  color: inherit;\n  margin-bottom: 2px;\n  padding: 6px 6px 6px 12px; }\n\n.todo-list.small-list .btn-xs,\n.todo-list.small-list .btn-group-xs > .btn {\n  border-radius: 5px;\n  font-size: 10px;\n  line-height: 1.5;\n  padding: 1px 2px 1px 5px; }\n\n.todo-list > li {\n  border-radius: 4px;\n  color: inherit;\n  margin-bottom: 2px;\n  padding: 10px; }\n\n.todo-list .handle {\n  cursor: move;\n  display: inline-block;\n  font-size: 16px;\n  margin: 0 5px; }\n\n.todo-list > li .label {\n  font-size: 9px;\n  margin-left: 10px; }\n\n.check-link {\n  font-size: 16px; }\n\n.todo-completed {\n  text-decoration: line-through; }\n\n.geo-statistic h1 {\n  font-size: 36px;\n  margin-bottom: 0; }\n\n.glyphicon.fa {\n  font-family: \"FontAwesome\"; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-two/page-two.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTwoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageTwoService = (function () {
    function PageTwoService() {
        this.data1 = [
            [this.gd(2012, 1, 1), 7], [this.gd(2012, 1, 2), 6], [this.gd(2012, 1, 3), 4], [this.gd(2012, 1, 4), 8],
            [this.gd(2012, 1, 5), 9], [this.gd(2012, 1, 6), 7], [this.gd(2012, 1, 7), 5], [this.gd(2012, 1, 8), 4],
            [this.gd(2012, 1, 9), 7], [this.gd(2012, 1, 10), 8], [this.gd(2012, 1, 11), 9], [this.gd(2012, 1, 12), 6],
            [this.gd(2012, 1, 13), 4], [this.gd(2012, 1, 14), 5], [this.gd(2012, 1, 15), 11], [this.gd(2012, 1, 16), 8],
            [this.gd(2012, 1, 17), 8], [this.gd(2012, 1, 18), 11], [this.gd(2012, 1, 19), 11], [this.gd(2012, 1, 20), 6],
            [this.gd(2012, 1, 21), 6], [this.gd(2012, 1, 22), 8], [this.gd(2012, 1, 23), 11], [this.gd(2012, 1, 24), 13],
            [this.gd(2012, 1, 25), 7], [this.gd(2012, 1, 26), 9], [this.gd(2012, 1, 27), 9], [this.gd(2012, 1, 28), 8],
            [this.gd(2012, 1, 29), 5], [this.gd(2012, 1, 30), 8], [this.gd(2012, 1, 31), 25]
        ];
        this.data2 = [
            [this.gd(2012, 1, 1), 800], [this.gd(2012, 1, 2), 500], [this.gd(2012, 1, 3), 600], [this.gd(2012, 1, 4), 700],
            [this.gd(2012, 1, 5), 500], [this.gd(2012, 1, 6), 456], [this.gd(2012, 1, 7), 800], [this.gd(2012, 1, 8), 589],
            [this.gd(2012, 1, 9), 467], [this.gd(2012, 1, 10), 876], [this.gd(2012, 1, 11), 689], [this.gd(2012, 1, 12), 700],
            [this.gd(2012, 1, 13), 500], [this.gd(2012, 1, 14), 600], [this.gd(2012, 1, 15), 700], [this.gd(2012, 1, 16), 786],
            [this.gd(2012, 1, 17), 345], [this.gd(2012, 1, 18), 888], [this.gd(2012, 1, 19), 888], [this.gd(2012, 1, 20), 888],
            [this.gd(2012, 1, 21), 987], [this.gd(2012, 1, 22), 444], [this.gd(2012, 1, 23), 999], [this.gd(2012, 1, 24), 567],
            [this.gd(2012, 1, 25), 786], [this.gd(2012, 1, 26), 666], [this.gd(2012, 1, 27), 888], [this.gd(2012, 1, 28), 900],
            [this.gd(2012, 1, 29), 178], [this.gd(2012, 1, 30), 555], [this.gd(2012, 1, 31), 993]
        ];
        this.flotData = [
            {
                numb: "2346",
                name: "订单总数",
                icon: "fa-level-up",
                width: "48%"
            },
            {
                numb: "4422",
                name: "最近一个月订单",
                icon: "fa-level-down",
                width: "48%"
            },
            {
                numb: "9180",
                name: "最近一个月销售额",
                icon: "fa-bolt",
                width: "22%"
            }
        ];
    }
    PageTwoService.prototype.getData1 = function () {
        return this.data1;
    };
    PageTwoService.prototype.getData2 = function () {
        return this.data2;
    };
    PageTwoService.prototype.gd = function (year, month, day) {
        return new Date(year, month - 1, day).getTime();
    };
    PageTwoService.prototype.getFlotData = function () {
        return this.flotData;
    };
    return PageTwoService;
}());
PageTwoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], PageTwoService);

//# sourceMappingURL=page-two.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-two/siteData/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__siteData_component__ = __webpack_require__("../../../../../src/app/pages/home/components/page-two/siteData/siteData.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__siteData_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-two/siteData/siteData.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__siteData_service__ = __webpack_require__("../../../../../src/app/pages/home/components/page-two/siteData/siteData.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiteDataComponent = (function () {
    function SiteDataComponent(_service) {
        this._service = _service;
    }
    SiteDataComponent.prototype.ngOnInit = function () {
        this.datas = this._service.getSite();
    };
    return SiteDataComponent;
}());
SiteDataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-site",
        template: __webpack_require__("../../../../../src/app/pages/home/components/page-two/siteData/siteData.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        providers: [__WEBPACK_IMPORTED_MODULE_1__siteData_service__["a" /* SiteDataService */]],
        styles: [__webpack_require__("../../../../../src/app/pages/home/components/page-two/siteData/siteData.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__siteData_service__["a" /* SiteDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__siteData_service__["a" /* SiteDataService */]) === "function" && _a || Object])
], SiteDataComponent);

var _a;
//# sourceMappingURL=siteData.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-two/siteData/siteData.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row site-boxs\">\n  <div *ngFor=\"let item of datas\" class=\"col-xlg-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 clearfix\">\n    <ba-card [cardTitle]=\"item.title\" selectType=\"ibox-tools\" [colorStr]=\"item.background\" [title]=\"item.name\">\n      <div class=\"ibox-content\">\n        <h1 class=\"no-margins\">{{item.numb}}</h1>\n        <div class=\"font-bold\" [style.color]=\"item.background\">{{item.percen}} <i class=\"fa {{item.icon}}\"></i>\n        </div>\n        <small>{{item.total}}</small>\n      </div>\n    </ba-card>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-two/siteData/siteData.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".site-boxs h1 {\n  font-weight: 100;\n  font-size: 30px;\n  margin: 0; }\n\n.site-boxs small {\n  font-size: 90%; }\n\n.site-boxs div.font-bold {\n  float: right;\n  font-weight: 600;\n  font-size: inherit; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-two/siteData/siteData.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteDataService = (function () {
    function SiteDataService() {
        this.siteData = [
            {
                background: "#1c84c6",
                name: "月",
                numb: "40 886,20",
                total: "总收入",
                percen: "98%",
                icon: "fa-bolt",
                title: "收入"
            },
            {
                background: "#23c6c8",
                name: "全年",
                numb: "275,820",
                total: "新订单",
                percen: "20%",
                icon: "fa-level-up",
                title: "订单"
            },
            {
                background: "#1ab394",
                name: "今天",
                numb: "106,120",
                total: "新访客",
                percen: "44%",
                icon: "fa-level-up",
                title: "访客",
            },
            {
                background: "#ed5565",
                name: "最近一个月",
                numb: "80,120",
                total: "12月",
                percen: "38%",
                icon: "fa-level-down",
                title: "活跃用户"
            }
        ];
    }
    SiteDataService.prototype.getSite = function () {
        return this.siteData;
    };
    return SiteDataService;
}());
SiteDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SiteDataService);

//# sourceMappingURL=siteData.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-two/vectorMap/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vectorMap__ = __webpack_require__("../../../../../src/app/pages/home/components/page-two/vectorMap/vectorMap.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vectorMap__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-two/vectorMap/vectorMap.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <table class=\"table ibox-table\">\n      <thead>\n      <tr>\n        <th style=\"width: 1%\" class=\"text-center\">序号</th>\n        <th>交易</th>\n        <th class=\"text-center\">日期</th>\n        <th class=\"text-center\">销售额</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td class=\"text-center\">1</td>\n        <td>防盗门\n\n        </td>\n        <td class=\"text-center small\">2014.9.15</td>\n        <td class=\"text-center\"><span class=\"label label-primary\">¥483.00</span>\n        </td>\n\n      </tr>\n      <tr>\n        <td class=\"text-center\">2</td>\n        <td>衣柜\n        </td>\n        <td class=\"text-center small\">2014.9.15</td>\n        <td class=\"text-center\"><span class=\"label label-primary\">¥327.00</span>\n        </td>\n\n      </tr>\n      <tr>\n        <td class=\"text-center\">3</td>\n        <td>防盗门\n        </td>\n        <td class=\"text-center small\">2014.9.15</td>\n        <td class=\"text-center\"><span class=\"label label-warning\">¥125.00</span>\n        </td>\n\n      </tr>\n      <tr>\n        <td class=\"text-center\">4</td>\n        <td>橱柜</td>\n        <td class=\"text-center small\">2014.9.15</td>\n        <td class=\"text-center\"><span class=\"label label-primary\">¥344.00</span>\n        </td>\n      </tr>\n      <tr>\n        <td class=\"text-center\">5</td>\n        <td>手机</td>\n        <td class=\"text-center small\">2014.9.15</td>\n        <td class=\"text-center\"><span class=\"label label-primary\">¥235.00</span>\n        </td>\n      </tr>\n      <tr>\n        <td class=\"text-center\">6</td>\n        <td>显示器</td>\n        <td class=\"text-center small\">2014.9.15</td>\n        <td class=\"text-center\"><span class=\"label label-primary\">¥100.00</span>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col-md-6\">\n    <!--<ba-vector-charts [options]=\"vectorMap\"></ba-vector-charts>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/components/page-two/vectorMap/vectorMap.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VectorMap; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VectorMap = (function () {
    function VectorMap() {
        this.mapData = {
            "US": 298,
            "SA": 200,
            "DE": 220,
            "FR": 540,
            "CN": 120,
            "AU": 760,
            "BR": 550,
            "IN": 200,
            "GB": 120,
        };
        this.vectorMap = {
            map: 'world_mill_en',
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: '#e4e4e4',
                    "fill-opacity": 0.9,
                    stroke: 'none',
                    "stroke-width": 0,
                    "stroke-opacity": 0
                }
            },
            series: {
                regions: [{
                        values: this.mapData,
                        scale: ["#1ab394", "#22d6b1"],
                        normalizeFunction: 'polynomial'
                    }]
            },
        };
    }
    VectorMap.prototype.ngOnInit = function () {
    };
    return VectorMap;
}());
VectorMap = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "vector-map",
        template: __webpack_require__("../../../../../src/app/pages/home/components/page-two/vectorMap/vectorMap.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], VectorMap);

//# sourceMappingURL=vectorMap.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "home-one",
        template: "\n    <router-outlet></router-outlet>\n  "
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2modules_flot__ = __webpack_require__("../../../../ng2modules-flot/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2modules_flot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2modules_flot__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_routing__ = __webpack_require__("../../../../../src/app/pages/home/home.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("../../../../../src/app/pages/home/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2modules_flot__["FlotModule"],
            __WEBPACK_IMPORTED_MODULE_5__home_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["a" /* PageOneComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["b" /* NewsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["c" /* ProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["d" /* PageTwoComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["e" /* SiteDataComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["f" /* FlotDataComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["g" /* VectorMap */]
        ],
        providers: [],
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("../../../../../src/app/pages/home/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var routes = [
    { path: "",
        component: __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */],
        children: [
            { path: "", redirectTo: "one", pathMatch: "full" },
            { path: 'one', component: __WEBPACK_IMPORTED_MODULE_2__components__["a" /* PageOneComponent */] },
            { path: 'two', component: __WEBPACK_IMPORTED_MODULE_2__components__["d" /* PageTwoComponent */] },
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=home.routing.js.map

/***/ }),

/***/ "../../../../ng2modules-flot/flot.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var FlotComponent = FlotComponent_1 = (function () {
    function FlotComponent(el) {
        this.el = el;
        this.width = '100%';
        this.height = 220;
    }
    FlotComponent.prototype.ngOnChanges = function (changes) {
        if (changes['refresh'] && !changes['refresh'].isFirstChange() && FlotComponent_1.initialized) {
            $.plot(this.plotArea, this.dataset, this.options);
        }
    };
    FlotComponent.prototype.ngAfterViewInit = function () {
        if (!FlotComponent_1.initialized) {
            this.plotArea = $(this.el.nativeElement).find('div').empty();
            this.plotArea.css({
                width: this.width,
                height: this.height
            });
            $.plot(this.plotArea, this.dataset, this.options);
            FlotComponent_1.initialized = true;
        }
    };
    return FlotComponent;
}());
FlotComponent.initialized = false;
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FlotComponent.prototype, "refresh", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FlotComponent.prototype, "dataset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FlotComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FlotComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FlotComponent.prototype, "height", void 0);
FlotComponent = FlotComponent_1 = __decorate([
    core_1.Component({
        selector: 'flot',
        template: "<div>Loading...</div>",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FlotComponent);
exports.FlotComponent = FlotComponent;
var FlotComponent_1;
//# sourceMappingURL=flot.component.js.map

/***/ }),

/***/ "../../../../ng2modules-flot/flot.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var flot_component_1 = __webpack_require__("../../../../ng2modules-flot/flot.component.js");
var FlotModule = (function () {
    function FlotModule() {
    }
    return FlotModule;
}());
FlotModule = __decorate([
    core_1.NgModule({
        imports: [],
        exports: [flot_component_1.FlotComponent],
        declarations: [flot_component_1.FlotComponent]
    }),
    __metadata("design:paramtypes", [])
], FlotModule);
exports.FlotModule = FlotModule;
//# sourceMappingURL=flot.module.js.map

/***/ }),

/***/ "../../../../ng2modules-flot/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("../../../../ng2modules-flot/flot.module.js"));
//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map