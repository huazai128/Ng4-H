webpackJsonp([6],{

/***/ "../../../../../src/app/pages/widgets/widgets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widgets_service__ = __webpack_require__("../../../../../src/app/pages/widgets/widgets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_animations__ = __webpack_require__("../../../../../src/app/theme/animations/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetsComponent = (function () {
    function WidgetsComponent(service) {
        this.service = service;
    }
    WidgetsComponent.prototype.ngOnInit = function () {
        this.data1 = this.service.getWidgetData();
        this.flotData = this.service.getFlotData();
        this.promptData = this.service.getPromptData();
    };
    return WidgetsComponent;
}());
WidgetsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-widgets",
        template: __webpack_require__("../../../../../src/app/pages/widgets/widgets.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/widgets/widgets.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        animations: [__WEBPACK_IMPORTED_MODULE_2__theme_animations__["a" /* animat */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__widgets_service__["a" /* WidgetsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__widgets_service__["a" /* WidgetsService */]) === "function" && _a || Object])
], WidgetsComponent);

var _a;
//# sourceMappingURL=widgets.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/widgets/widgets.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box-top\" [@enterLeave]=\"ins\">\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-3\" *ngFor=\"let item of data1\">\n      <div class=\"widget widget-pad\" [style.background-color]=\"item.background\">\n        <div class=\"row\">\n          <div class=\"col-sm-4 text-center\">\n            <i class=\"fa {{ item.icon }}\"></i>\n          </div>\n          <div class=\"col-sm-8 text-right\">\n            <span> {{item.name}} </span>\n            <h2 class=\"font-bold\">{{item.num}}</h2>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row pad-bottom\">\n    <ng-template [ngIf]=\"flotData && flotData.length\">\n      <div *ngFor=\"let flot of flotData\" class=\"col-lg-{{flot.cls}}\">\n        <div class=\"widget navy-bg\" [style.background]=\"flot.bg\">\n          <div class=\"p-m\">\n            <h1 class=\"m-xs\">￥{{flot.money | baFormatNumber }}</h1>\n            <h3 class=\"font-bold no-margins\">{{ flot.source }}</h3>\n            <small>{{ flot.name }}</small>\n          </div>\n\n          <ba-flot [dataset]=\"flot.data\" [options]=\"flot.options\" height=\"100px\"></ba-flot>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n\n  <div class=\"row pad-bottom\">\n    <div class=\"col-md-2\" *ngFor=\"let item of promptData\">\n      <div class=\"widget widget-pad\" [style.background]=\"item.bg\">\n        <div class=\"row vertical-align\">\n          <div class=\"col-sm-3\">\n            <i class=\"fa fa-3x {{ item.icon || '' }}\"></i>\n          </div>\n          <div class=\"col-sm-9 text-right\">\n            <h2 class=\"font-bold\">{{ item.num }}</h2>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/widgets/widgets.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widgets_component__ = __webpack_require__("../../../../../src/app/pages/widgets/widgets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widgets_routing__ = __webpack_require__("../../../../../src/app/pages/widgets/widgets.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__widgets_service__ = __webpack_require__("../../../../../src/app/pages/widgets/widgets.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WidgetsModule = (function () {
    function WidgetsModule() {
    }
    return WidgetsModule;
}());
WidgetsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_4__widgets_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__widgets_component__["a" /* WidgetsComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__widgets_service__["a" /* WidgetsService */]
        ]
    })
], WidgetsModule);

//# sourceMappingURL=widgets.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/widgets/widgets.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widgets_component__ = __webpack_require__("../../../../../src/app/pages/widgets/widgets.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_1__widgets_component__["a" /* WidgetsComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=widgets.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/widgets/widgets.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-top {\n  margin-top: 20px; }\n  .box-top > .row {\n    margin-bottom: 30px; }\n\n.navy-bg {\n  background-color: #1ab394; }\n\n.widget {\n  border-radius: 6px; }\n  .widget .p-m {\n    padding: 15px; }\n    .widget .p-m h1 {\n      font-weight: 100;\n      font-size: 28px; }\n    .widget .p-m h3 {\n      font-size: 16px;\n      margin-bottom: 0;\n      padding-bottom: 0; }\n    .widget .p-m span {\n      font-size: 12px; }\n\n.widget-pad {\n  padding: 15px; }\n  .widget-pad span {\n    display: inline-block;\n    padding-bottom: 6px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/widgets/widgets.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetsService = (function () {
    function WidgetsService() {
        this.widgetData = [
            {
                background: "transparent",
                icon: "fa-trophy fa-5x",
                name: "今日收入",
                num: "¥ 4,232"
            },
            {
                background: "#1ab394",
                icon: "fa-cloud fa-5x",
                name: "今日温度",
                num: "26'C"
            },
            {
                background: "#23c6c8",
                icon: "fa-envelope-o fa-5x",
                name: "新消息",
                num: "260"
            },
            {
                background: "#f8ac59",
                icon: "fa-music fa-5x",
                name: "新专辑",
                num: "12"
            }
        ];
        this.d1 = [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]];
        this.d2 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]];
        this.flotData = [
            {
                cls: "6",
                money: "1540",
                source: "年收入",
                name: "项目年收入",
                bg: "#1ab394",
                data: [
                    {
                        label: "Data 1",
                        data: this.d1,
                        color: '#17a084'
                    },
                    {
                        label: "Data 2",
                        data: this.d2,
                        color: '#127e68'
                    }
                ],
                options: {
                    xaxis: {
                        tickDecimals: 0
                    },
                    series: {
                        lines: {
                            show: true,
                            fill: true,
                            fillColor: {
                                colors: [{
                                        opacity: 1
                                    }, {
                                        opacity: 1
                                    }]
                            },
                        },
                        points: {
                            width: 0.1,
                            show: false
                        },
                    },
                    grid: {
                        show: false,
                        borderWidth: 0
                    },
                    legend: {
                        show: false,
                    }
                }
            },
            {
                cls: "3",
                money: "210660",
                source: "月收入",
                name: "项目年收入",
                bg: "#23c6c8",
                data: [
                    {
                        label: "Data 1",
                        data: this.d1,
                        color: '#19a0a1'
                    }
                ],
                options: {
                    xaxis: {
                        tickDecimals: 0
                    },
                    series: {
                        lines: {
                            show: true,
                            fill: true,
                            fillColor: {
                                colors: [{
                                        opacity: 1
                                    }, {
                                        opacity: 1
                                    }]
                            },
                        },
                        points: {
                            width: 0.1,
                            show: false
                        },
                    },
                    grid: {
                        show: false,
                        borderWidth: 0
                    },
                    legend: {
                        show: false,
                    }
                }
            },
            {
                cls: "3",
                money: "210660",
                source: "月收入",
                name: "项目年收入",
                bg: "transparent",
                data: [
                    {
                        label: "Data 1",
                        data: this.d1,
                        color: '#fbbe7b'
                    },
                    {
                        label: "Data 2",
                        data: this.d2,
                        color: '#f8ac59'
                    }
                ],
                options: {
                    xaxis: {
                        tickDecimals: 0
                    },
                    series: {
                        lines: {
                            show: true,
                            fill: true,
                            fillColor: {
                                colors: [{
                                        opacity: 1
                                    }, {
                                        opacity: 1
                                    }]
                            },
                        },
                        points: {
                            width: 0.1,
                            show: false
                        },
                    },
                    grid: {
                        show: false,
                        borderWidth: 0
                    },
                    legend: {
                        show: false,
                    }
                }
            }
        ];
        this.promptData = [
            {
                bg: "#1ab394",
                icon: "fa-user",
                num: "217"
            },
            {
                bg: "#1ab394",
                icon: "fa-thumbs-up",
                num: "400"
            },
            {
                bg: "#1ab394",
                icon: "fa-rss",
                num: "10"
            },
            {
                bg: "#23c6c8",
                icon: "fa-phone",
                num: "120"
            },
            {
                bg: "#23c6c8",
                icon: "fa-euro",
                num: "468"
            },
            {
                bg: "#f8ac59",
                icon: "fa-shield",
                num: "610"
            }
        ];
    }
    WidgetsService.prototype.getWidgetData = function () {
        return this.widgetData;
    };
    WidgetsService.prototype.getFlotData = function () {
        return this.flotData;
    };
    WidgetsService.prototype.getPromptData = function () {
        return this.promptData;
    };
    return WidgetsService;
}());
WidgetsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], WidgetsService);

//# sourceMappingURL=widgets.service.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map