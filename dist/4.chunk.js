webpackJsonp([4],{

/***/ "../../../../../src/app/pages/forms/basic/basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_form_modal__ = __webpack_require__("../../../../../src/app/pages/forms/basic/component/form.modal.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BasicComponent = (function () {
    function BasicComponent(_fb, modalService) {
        var _this = this;
        this._fb = _fb;
        this.modalService = modalService;
        this.isVisible = false;
        // 显示弹窗
        this.showModalTop = function () {
            _this.isVisible = true;
        };
        this.handleOk = function (e) {
            console.log('点击了确定');
            _this.isVisible = false;
        };
        this.handleCancel = function (e) {
            console.log(e);
            _this.isVisible = false;
        };
        this.validateForm = this._fb.group({
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            password: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            remember: [false]
        });
        this.editForm = this._fb.group({
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            password: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
        });
    }
    BasicComponent.prototype.ngOnInit = function () {
    };
    BasicComponent.prototype._submitForm = function () {
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
        }
    };
    BasicComponent.prototype.editFrom = function () {
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
        }
    };
    // 自定义component弹窗
    BasicComponent.prototype.showModalComponent = function () {
        var subscription = this.modalService.open({
            title: "表单",
            content: __WEBPACK_IMPORTED_MODULE_3__component_form_modal__["a" /* FormModal */],
            onOk: function () { },
            footer: false
        });
        subscription.subscribe(function (result) {
            console.log("asdsada");
        });
    };
    return BasicComponent;
}());
BasicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-basic",
        template: __webpack_require__("../../../../../src/app/pages/forms/basic/basic.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/forms/basic/basic.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["c" /* NzModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["c" /* NzModalService */]) === "function" && _b || Object])
], BasicComponent);

var _a, _b;
//# sourceMappingURL=basic.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forms/basic/basic.html":
/***/ (function(module, exports) {

module.exports = "<div nz-row [nzGutter]=\"16\" class=\"form-basic\">\n  <div nz-col [nzMd]=\"14\">\n    <ba-card cardTitle=\"基本表单\" selectType=\"ba-card-config\">\n      <ba-card-config></ba-card-config>\n      <div nz-row [nzGutter]=\"16\">\n        <div nz-col [nzMd]=\"12\" class=\"ba-border\">\n          <div class=\"ibox-form\">\n            <h3 class=\"m-t-none m-b\">登录</h3>\n            <p>欢迎登录本站(⊙o⊙)</p>\n            <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"_submitForm()\">\n              <div nz-form-item >\n                <div nz-form-label>\n                  <label for=\"email\"><strong>用户名</strong></label>\n                </div>\n                <div nz-form-control [nzValidateStatus]=\"validateForm.controls.email\">\n                  <nz-input formControlName=\"email\"\n                            [nzPlaceHolder]=\"'请输入您注册的E-mail'\"\n                            [nzSize]=\"'large'\"\n                            id=\"email\" >\n                    <ng-template #prefix>\n                      <i class=\"anticon anticon-user\"></i>\n                    </ng-template>\n                  </nz-input>\n                </div>\n              </div>\n              <div nz-form-item >\n                <div nz-form-label>\n                  <label for=\"password\"><strong>密码</strong></label>\n                </div>\n                <div nz-form-control [nzValidateStatus]=\"validateForm.controls.password\">\n                  <nz-input formControlName=\"password\"\n                            [nzPlaceHolder]=\"'请输入密码'\" [nzSize]=\"'large'\">\n                    <ng-template #prefix>\n                      <i class=\"anticon anticon-lock\"></i>\n                    </ng-template>\n                  </nz-input>\n                </div>\n              </div>\n              <div nz-form-item>\n                <div nz-form-control>\n                  <label class=\"pull-left\" nz-checkbox formControlName=\"remember\">\n                    <span>自动登录</span>\n                  </label>\n                  <button class=\"pull-right\" nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\">登录</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div nz-col [nzMd]=\"12\" class=\"ba-reg\">\n          <h4 style=\"padding-left: 15px;\">还不是会员？</h4>\n          <p style=\"padding-left: 15px;\">您可以注册一个新账户</p>\n          <p class=\"text-center\">\n            <a ><i class=\"fa fa-sign-in big-icon\"></i></a>\n          </p>\n        </div>\n      </div>\n    </ba-card>\n  </div>\n  <div nz-col [nzMd]=\"10\">\n    <ba-card cardTitle=\"横向表单\" selectType=\"ba-card-config\">\n      <ba-card-config></ba-card-config>\n      <div class=\"ibox-form\">\n        <p style=\"margin-bottom: 10px\">欢迎登录本站(⊙o⊙)</p>\n        <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"_submitForm()\">\n          <div nz-form-item nz-row>\n            <div nz-form-label nz-col [nzSm]=\"6\" [nzXs]=\"24\" >\n              <label for=\"email\"><strong>用户名</strong></label>\n            </div>\n            <div nz-form-control\n                 nz-col [nzSm]=\"18\" [nzXs]=\"24\"\n                 [nzValidateStatus]=\"validateForm.controls.email\">\n              <nz-input formControlName=\"email\"\n                        [nzPlaceHolder]=\"'请输入您注册的E-mail'\"\n                        [nzSize]=\"'large'\"\n                        id=\"email\" >\n                <ng-template #prefix>\n                  <i class=\"anticon anticon-user\"></i>\n                </ng-template>\n              </nz-input>\n            </div>\n          </div>\n          <div nz-form-item nz-row>\n            <div nz-form-label nz-col [nzSm]=\"6\" [nzXs]=\"24\">\n              <label for=\"password\"><strong>密码</strong></label>\n            </div>\n            <div nz-form-control\n                 nz-col [nzSm]=\"18\" [nzXs]=\"24\"\n                 [nzValidateStatus]=\"validateForm.controls.password\">\n              <nz-input formControlName=\"password\"\n                        [nzPlaceHolder]=\"'请输入密码'\" [nzSize]=\"'large'\">\n                <ng-template #prefix>\n                  <i class=\"anticon anticon-lock\"></i>\n                </ng-template>\n              </nz-input>\n            </div>\n          </div>\n          <div nz-form-item nz-row>\n            <div nz-form-control nz-col [nzOffset]=\"'6'\" [nzSm]=\"16\" [nzXs]=\"24\">\n              <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\">登录</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </ba-card>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"16\" class=\"form-basic\">\n  <div nz-col [nzMd]=\"16\" [nzXs]=\"24\">\n    <ba-card cardTitle=\"内联表单\" selectType=\"ba-card-config\">\n      <ba-card-config></ba-card-config>\n      <form nz-form [formGroup]=\"editForm\"\n            [nzLayout]=\"'inline'\"\n            (ngSubmit)=\"editFrom()\">\n        <div nz-form-item>\n          <div nz-form-control [nzValidateStatus]=\"editForm.controls.email\">\n            <nz-input formControlName=\"email\" [nzPlaceHolder]=\"'Email'\" [nzSize]=\"'large'\">\n              <ng-template #prefix>\n                <i class=\"anticon anticon-user\"></i>\n              </ng-template>\n            </nz-input>\n            <div nz-form-explain *ngIf=\"editForm.controls.email.dirty && editForm.controls.email.hasError('required')\">请输入您的Email</div>\n          </div>\n        </div>\n        <div nz-form-item>\n          <div nz-form-control [nzValidateStatus]=\"editForm.controls.password\">\n            <nz-input formControlName=\"password\" [nzType]=\"'password'\" [nzPlaceHolder]=\"'Password'\" [nzSize]=\"'large'\">\n              <ng-template #prefix>\n                <i class=\"anticon anticon-lock\"></i>\n              </ng-template>\n            </nz-input>\n            <div nz-form-explain *ngIf=\"editForm.controls.password.dirty&&editForm.controls.password.hasError('required')\">请输入您的密码</div>\n          </div>\n        </div>\n        <button nz-button\n                [nzType]=\"'primary'\"\n                [nzSize]=\"'large'\"\n                [disabled]=\"!editForm.valid\">登录</button>\n      </form>\n    </ba-card>\n  </div>\n  <div nz-col [nzMd]=\"8\" [nzXs]=\"24\">\n    <ba-card cardTitle=\"弹出表单\" selectType=\"ba-card-config\">\n      <ba-card-config></ba-card-config>\n      <div>\n        <p class=\"text-center\">\n          <button nz-button [nzType]=\"'primary'\" class=\"btn btn-success btn-auto\" (click)=\"showModalComponent()\">\n            <span>打开登录窗口</span>\n          </button>\n        </p>\n      </div>\n    </ba-card>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"16\" class=\"form-basic\">\n  <div nz-col [nzMd]=\"24\" [nzXs]=\"24\">\n    <all-form></all-form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/forms/basic/basic.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-basic .ba-border {\n  position: relative;\n  padding-right: 10px; }\n  .form-basic .ba-border::after {\n    position: absolute;\n    content: \"\";\n    top: 0;\n    right: 0;\n    width: 1px;\n    height: 100%;\n    background-color: #e6e6e6; }\n\n.form-basic .ibox-form h3 {\n  font-weight: 600;\n  color: #fff;\n  font-size: 18px; }\n\n.form-basic .ibox-form p {\n  color: inherit;\n  font-weight: normal;\n  margin: 5px 0;\n  font-size: 13px; }\n\n.form-basic .ibox-form form label {\n  font-weight: 600;\n  font-size: 13px;\n  color: #fff;\n  margin-bottom: 0; }\n\n.form-basic .ba-reg {\n  padding-left: 10px; }\n  .form-basic .ba-reg h4 {\n    font-size: 16px; }\n  .form-basic .ba-reg p {\n    margin: 6px 0;\n    font-size: 12px;\n    color: #e5e5e5; }\n    .form-basic .ba-reg p.text-center a {\n      font-size: 150px;\n      color: #e5e5e5;\n      text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/forms/basic/component/all.form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllFormComponent = (function () {
    function AllFormComponent(_fb) {
        this._fb = _fb;
        this._check = true;
        this.radioValue = 'A';
        this._value = "搜索";
        this.checkOptionsOne = [
            { label: 'Apple', value: 'Apple', checked: true },
            { label: 'Pear', value: 'Pear', disabled: true },
            { label: 'Orange', value: 'Orange' },
        ];
        this.size = 'default';
        this.options = [
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'disabled', label: 'Disabled', disabled: true },
        ];
        this.single = 'lucy';
        this.editForm = this._fb.group({
            common: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            info: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            password: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            prompt: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            disable: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            _checked: [true],
            radio_group: ["1"],
            allCheck: ["Apple"],
            allRadio: ["1"],
            slt: ["jack"],
            search: [''],
            url: [''],
            phoneNumberPrefix: ["+86"],
            phoneNumber: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
        });
    }
    AllFormComponent.prototype.editSave = function () {
        for (var i in this.editForm.controls) {
            this.editForm.controls[i].markAsDirty();
        }
    };
    AllFormComponent.prototype._console = function () {
        console.log(this.editForm.controls['_checked'].value);
    };
    AllFormComponent.prototype._log = function (value) {
        console.log(value);
    };
    return AllFormComponent;
}());
AllFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "all-form",
        template: __webpack_require__("../../../../../src/app/pages/forms/basic/component/all.form.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/forms/basic/component/all.form.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object])
], AllFormComponent);

var _a;
//# sourceMappingURL=all.form.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forms/basic/component/all.form.html":
/***/ (function(module, exports) {

module.exports = "<ba-card cardTitle=\"所有表单元素\" selectType=\"ba-card-config\">\n  <ba-card-config ></ba-card-config>\n\n  <form nz-form [formGroup]=\"editForm\" class=\"all-form\" (ngSubmit)=\"editSave()\">\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label>普通</label>\n      </div>\n      <div nz-col\n           [nzMd]=\"20\"\n           nz-form-control\n           [nzValidateStatus]=\"editForm.controls.common\">\n        <nz-input formControlName=\"common\" [nzSize]=\"'large'\"></nz-input>\n      </div>\n    </div>\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label>带说明信息</label>\n      </div>\n      <div nz-col\n           [nzMd]=\"20\"\n           nz-form-control\n           [nzValidateStatus]=\"editForm.controls.info\">\n        <nz-input formControlName=\"info\" [nzSize]=\"'large'\"></nz-input>\n      </div>\n      <div nz-row nz-form-extra >\n        <p nz-col [nzOffset]=\"'2'\">帮助文本，可能会超过一行，以块级元素显示</p>\n      </div>\n    </div>\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label>密码</label>\n      </div>\n      <div nz-col\n           [nzMd]=\"20\"\n           nz-form-control\n           [nzValidateStatus]=\"editForm.controls.password\">\n        <nz-input formControlName=\"password\" [nzSize]=\"'large'\"></nz-input>\n      </div>\n\n    </div>\n\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label>提示</label>\n      </div>\n      <div nz-col\n           [nzMd]=\"20\"\n           nz-form-control\n           [nzValidateStatus]=\"editForm.controls.prompt\">\n        <nz-input formControlName=\"prompt\" [nzPlaceHolder]=\"'提示信息'\" [nzSize]=\"'large'\"></nz-input>\n      </div>\n    </div>\n\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label>禁用</label>\n      </div>\n      <div nz-col\n           [nzMd]=\"20\"\n           nz-form-control\n           [nzValidateStatus]=\"editForm.controls.disable\">\n        <nz-input [nzDisabled]=\"'true'\"\n                  formControlName=\"disable\"\n                  [nzPlaceHolder]=\"'禁用'\"\n                  [nzSize]=\"'large'\"></nz-input>\n      </div>\n    </div>\n\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label>静态控制</label>\n      </div>\n      <div nz-col\n           [nzMd]=\"20\"\n           nz-form-control>\n        <p>i@zi-han.net</p>\n      </div>\n    </div>\n\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label>复选框&单选框</label>\n      </div>\n      <div nz-col [nzMd]=\"20\">\n        <p>\n          <label nz-checkbox formControlName=\"_checked\">\n            <span>选项1</span>\n          </label>\n        </p>\n        <div nz-form-control>\n          <nz-radio-group formControlName=\"radio_group\">\n            <label nz-radio [nzValue]=\"1\">\n              <span>item 1</span>\n            </label>\n            <label nz-radio [nzValue]=\"2\">\n              <span>item 2</span>\n            </label>\n            <label nz-radio [nzValue]=\"3\">\n              <span>item 3</span>\n            </label>\n          </nz-radio-group>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label>内联复选框</label>\n      </div>\n      <div nz-col nz-form-control [nzMd]=\"20\"  [nzValidateStatus]=\"editForm.controls.radio_group\">\n        <nz-radio-group formControlName=\"radio_group\">\n          <label nz-radio [nzValue]=\"1\">\n            <span>item 1</span>\n          </label>\n          <label nz-radio [nzValue]=\"2\">\n            <span>item 2</span>\n          </label>\n          <label nz-radio [nzValue]=\"3\">\n            <span>item 3</span>\n          </label>\n        </nz-radio-group>\n      </div>\n    </div>\n\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label>复选框&单选框</label>\n      </div>\n      <div nz-col  [nzMd]=\"20\">\n        <div nz-form-control [nzValidateStatus]=\"editForm.controls.allCheck\">\n          <nz-checkbox-group  formControlName=\"allCheck\" [(ngModel)]=\"checkOptionsOne\" (ngModelChange)=\"_log(checkOptionsOne)\"></nz-checkbox-group>\n        </div>\n        <div nz-form-control [nzValidateStatus]=\"editForm.controls.allRadio\">\n          <nz-radio-group formControlName=\"allRadio\">\n            <label nz-radio [nzValue]=\"1\">\n              <span>item 1</span>\n            </label>\n            <label nz-radio [nzValue]=\"2\">\n              <span>item 2</span>\n            </label>\n            <label nz-radio [nzValue]=\"3\">\n              <span>item 3</span>\n            </label>\n          </nz-radio-group>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label>复选框&单选框</label>\n      </div>\n      <div nz-col [nzMd]=\"20\" nz-form-control [nzValidateStatus]=\"editForm.controls.slt\">\n        <nz-select  formControlName=\"slt\" style=\"width: 200px;\" [(ngModel)]=\"single\" [nzSize]=\"size\">\n          <nz-option\n            *ngFor=\"let option of options\"\n            [nzLabel]=\"option.label\"\n            [nzValue]=\"option.value\"\n            [nzDisabled]=\"option.disabled\">\n          </nz-option>\n        </nz-select>\n      </div>\n    </div>\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label>验证通过</label>\n      </div>\n      <div nz-form-control [nzValidateStatus]=\"'error'\" nz-col [nzMd]=\"20\">\n        <nz-input formControlName=\"slt\"  [nzSize]=\"'large'\" name=\"errorValid\">\n        </nz-input>\n      </div>\n    </div>\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label>Warning</label>\n      </div>\n      <div nz-form-control [nzValidateStatus]=\"'warning'\" nz-col [nzMd]=\"20\">\n        <nz-input formControlName=\"slt\"  [nzSize]=\"'large'\" name=\"warningValid\">\n        </nz-input>\n      </div>\n    </div>\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label>Validating</label>\n      </div>\n      <div nz-col [nzMd]=\"20\" nz-form-control [nzValidateStatus]=\"'validating'\" nzHasFeedback>\n        <nz-input formControlName=\"slt\" [nzSize]=\"'large'\" name=\"validating\">\n        </nz-input>\n      </div>\n    </div>\n\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label>搜索</label>\n      </div>\n      <div nz-col [nzMd]=\"20\" nz-form-control [nzValidateStatus]=\"'editForm.controls.search'\" nzHasFeedback>\n        <nz-input formControlName=\"search\" [nzType]=\"'search'\" [nzPlaceHolder]=\"'input search text'\"></nz-input>\n      </div>\n    </div>\n\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label for=\"\" >文本框组</label>\n      </div>\n\n      <div nz-form-control nz-col [nzMd]=\"20\" [nzValidateStatus]=\"'editForm.controls.url'\">\n        <nz-input formControlName=\"url\">\n          <ng-template #addOnBefore>http://</ng-template>\n          <ng-template #addOnAfter>.com</ng-template>\n        </nz-input>\n      </div>\n    </div>\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label for=\"\" >文本框组</label>\n      </div>\n      <div nz-form-control nz-col [nzMd]=\"20\" [nzValidateStatus]=\"'editForm.controls.url'\">\n        <nz-input formControlName=\"url\" [nzPlaceHolder]=\"'用户名'\">\n          <ng-template #addOnBefore>@</ng-template>\n        </nz-input>\n      </div>\n    </div>\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label for=\"\" >文本框组</label>\n      </div>\n      <div nz-form-control nz-col [nzMd]=\"20\" [nzValidateStatus]=\"'editForm.controls.url'\">\n        <nz-input formControlName=\"url\" [nzPlaceHolder]=\"'金额'\">\n          <ng-template #addOnBefore>￥</ng-template>\n          <ng-template #addOnAfter>.00</ng-template>\n        </nz-input>\n      </div>\n    </div>\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label for=\"\" nz-form-item-required>手机号</label>\n      </div>\n      <div nz-form-control nz-col [nzMd]=\"20\" nzHasFeedback>\n        <nz-input-group [nzSize]=\"'large'\" [nzCompact]=\"true\">\n          <nz-select formControlName=\"phoneNumberPrefix\" style=\"width: 25%;\">\n            <nz-option [nzLabel]=\"'+86'\" [nzValue]=\"'+86'\"></nz-option>\n            <nz-option [nzLabel]=\"'+87'\" [nzValue]=\"'+87'\"></nz-option>\n          </nz-select>\n          <input formControlName=\"phoneNumber\" id=\"'phoneNumber'\" nz-input style=\"width: 75%;\">\n        </nz-input-group>\n      </div>\n    </div>\n\n    <div class=\"hr-line-dashed\"></div>\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzMd]=\"4\">\n        <label nz-form-item-required>日期</label>\n      </div>\n      <div>\n        <div nz-form-control>\n          <div nz-col [nzMd]=\"6\">\n            <div nz-form-item nz-row>\n              <div>\n                <div nz-form-control [nzValidateStatus]=\"'error'\">\n                  <nz-datepicker [nzSize]=\"'large'\" [nzPlaceHolder]=\"'Select date'\"></nz-datepicker>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div nz-col [nzMd]=\"1\">\n            <p nz-form-split>-</p>\n          </div>\n\n          <div nz-col [nzMd]=\"6\">\n            <div nz-form-item nz-row>\n              <div>\n                <div nz-form-control>\n                  <nz-datepicker [nzSize]=\"'large'\" [nzPlaceHolder]=\"'Select date'\"></nz-datepicker>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div nz-form-control nz-col [nzMd]=\"20\">\n\n      </div>\n    </div>\n  </form>\n</ba-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/forms/basic/component/all.form.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hr-line-dashed {\n  width: 100%;\n  height: 1px;\n  margin-bottom: 25px;\n  border-bottom: 1px dashed #e5e5e5; }\n\n.all-form label, .all-form p {\n  color: #fff; }\n\n.all-form label {\n  font-weight: 600;\n  color: #1ab394; }\n\n.ant-form-item {\n  margin-bottom: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/forms/basic/component/form.modal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormModal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormModal = (function () {
    function FormModal(_fb, modalSubject) {
        this._fb = _fb;
        this.modalSubject = modalSubject;
        this.validateForm = this._fb.group({
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            password: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            remember: [true],
        });
        this.modalSubject.on('onDestory', function () {
            console.log('destroy');
        });
    }
    FormModal.prototype._submitForm = function () {
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
        }
        if (this.validateForm.valid) {
            this.modalSubject.next("登录");
        }
    };
    return FormModal;
}());
FormModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "form-modal",
        template: __webpack_require__("../../../../../src/app/pages/forms/basic/component/modal.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: ["    \n    .ba-modal-form{\n      h3,p,label,h4{\n        color: #000 !important;\n      }\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["b" /* NzModalSubject */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["b" /* NzModalSubject */]) === "function" && _b || Object])
], FormModal);

var _a, _b;
//# sourceMappingURL=form.modal.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forms/basic/component/modal.html":
/***/ (function(module, exports) {

module.exports = "<div nz-row [nzGutter]=\"16\" class=\"ba-modal-form\">\n  <div nz-col [nzMd]=\"12\" class=\"ba-border\">\n    <div class=\"ibox-form\">\n      <h3 class=\"m-t-none m-b\">登录</h3>\n      <p>欢迎登录本站(⊙o⊙)</p>\n      <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"_submitForm()\">\n        <div nz-form-item >\n          <div nz-form-label>\n            <label for=\"email\"><strong>用户名</strong></label>\n          </div>\n          <div nz-form-control [nzValidateStatus]=\"validateForm.controls.email\">\n            <nz-input formControlName=\"email\"\n                      [nzPlaceHolder]=\"'请输入您注册的E-mail'\"\n                      [nzSize]=\"'large'\"\n                      id=\"email\" >\n              <ng-template #prefix>\n                <i class=\"anticon anticon-user\"></i>\n              </ng-template>\n            </nz-input>\n          </div>\n        </div>\n        <div nz-form-item >\n          <div nz-form-label>\n            <label for=\"password\"><strong>密码</strong></label>\n          </div>\n          <div nz-form-control [nzValidateStatus]=\"validateForm.controls.password\">\n            <nz-input formControlName=\"password\"\n                      [nzPlaceHolder]=\"'请输入密码'\" [nzSize]=\"'large'\">\n              <ng-template #prefix>\n                <i class=\"anticon anticon-lock\"></i>\n              </ng-template>\n            </nz-input>\n          </div>\n        </div>\n        <div nz-form-item>\n          <div nz-form-control>\n            <label class=\"pull-left\" nz-checkbox formControlName=\"remember\">\n              <span>自动登录</span>\n            </label>\n            <button class=\"pull-right\" nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\">登录</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div nz-col [nzMd]=\"12\" class=\"ba-reg\">\n    <h4 style=\"padding-left: 15px;\">还不是会员？</h4>\n    <p style=\"padding-left: 15px;\">您可以注册一个新账户</p>\n    <p class=\"text-center\">\n      <a ><i class=\"fa fa-sign-in big-icon\"></i></a>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/forms/forms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basic_basic_component__ = __webpack_require__("../../../../../src/app/pages/forms/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__basic_component_form_modal__ = __webpack_require__("../../../../../src/app/pages/forms/basic/component/form.modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__basic_component_all_form_component__ = __webpack_require__("../../../../../src/app/pages/forms/basic/component/all.form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__plugin_plugin_component__ = __webpack_require__("../../../../../src/app/pages/forms/plugin/plugin.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: "basic", component: __WEBPACK_IMPORTED_MODULE_6__basic_basic_component__["a" /* BasicComponent */] },
    { path: "plugin", component: __WEBPACK_IMPORTED_MODULE_9__plugin_plugin_component__["a" /* PluginComponent */] }
];
var FormModule = (function () {
    function FormModule() {
    }
    return FormModule;
}());
FormModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["a" /* NgZorroAntdModule */],
            __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__["a" /* NgaModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__basic_basic_component__["a" /* BasicComponent */],
            __WEBPACK_IMPORTED_MODULE_7__basic_component_form_modal__["a" /* FormModal */],
            __WEBPACK_IMPORTED_MODULE_8__basic_component_all_form_component__["a" /* AllFormComponent */],
            __WEBPACK_IMPORTED_MODULE_9__plugin_plugin_component__["a" /* PluginComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__basic_component_form_modal__["a" /* FormModal */]
        ]
    })
], FormModule);

//# sourceMappingURL=forms.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forms/plugin/plugin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PluginComponent = (function () {
    function PluginComponent() {
        this.swithcValue = false;
        this._formatOne = function (percent) { return percent + " Days"; };
        this._formatTwo = function (percent) { return "Done"; };
        this.ionOps = [
            {
                min: 0,
                max: 5000,
                type: 'double',
                prefix: "&yen;",
                maxPostfix: "+",
                prettify: false,
                hasGrid: true
            },
            {
                type: "double",
                grid: true,
                min: 0,
                max: 1000,
                from: 200,
                to: 800,
                prefix: "$"
            },
            {
                type: "double",
                grid: true,
                min: -12.8,
                max: 12.8,
                from: -3.2,
                to: 3.2,
                step: 0.1
            },
            {
                values: [
                    "一月", "二月", "三月",
                    "四月", "五月", "六月",
                    "七月", "八月", "九月",
                    "十月", "十一月", "十二月"
                ],
                hasGrid: true
            },
            {
                type: "double",
                min: 0,
                max: 100,
                from: 30,
                to: 70,
                keyboard: true // true by default
            }
        ];
    }
    PluginComponent.prototype.getChange = function () {
    };
    return PluginComponent;
}());
PluginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-plugin",
        template: __webpack_require__("../../../../../src/app/pages/forms/plugin/plugin.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/forms/plugin/plugin.scss")]
    }),
    __metadata("design:paramtypes", [])
], PluginComponent);

//# sourceMappingURL=plugin.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forms/plugin/plugin.html":
/***/ (function(module, exports) {

module.exports = "<div nz-row [nzGutter]=\"16\">\n  <div nz-col [nzMd]=\"12\">\n\n    <div nz-row [nzGutter]=\"16\">\n      <div nz-col [nzMd]=\"24\">\n        <ba-card cardTitle=\"进度条\" selectType=\"ba-card-config\">\n          <ba-card-config></ba-card-config>\n          <div class=\"progress-box\">\n            <div nz-row>\n              <div nz-col [nzMd]=\"12\" class=\"text-center\">\n                <nz-progress [ngModel]=\"75\" [nzType]=\"'circle'\" [nzFormat]=\"_formatOne\"></nz-progress>\n              </div>\n              <div nz-col [nzMd]=\"12\" class=\"text-center\">\n                <nz-progress [ngModel]=\"100\" [nzType]=\"'circle'\" [nzFormat]=\"_formatTwo\"></nz-progress>\n              </div>\n            </div>\n          </div>\n        </ba-card>\n      </div>\n\n      <div nz-col [nzMd]=\"24\">\n        <ba-card cardTitle=\"切换开关\" selectType=\"ba-card-config\">\n          <ba-card-config></ba-card-config>\n          <div class=\"switch-box\">\n            <ba-switch [(ngModel)]=\"swithcValue\" (ngModelChange)=\"getChange($event)\"></ba-switch>\n          </div>\n        </ba-card>\n      </div>\n    </div>\n  </div>\n  <div nz-col [nzMd]=\"12\">\n    <ba-card cardTitle=\"滑块\" selectType=\"ba-card-config\">\n      <ba-card-config></ba-card-config>\n      <div class=\"ion-box\">\n        <h3>滑块</h3>\n        <h4>在指定范围内选择</h4>\n        <p><strong>示例</strong>： 设置值为0-5000，后缀“+”来表示最大值，人民币符号作为前缀，使用刻度</p>\n        <ng-template [ngIf]=\"ionOps && ionOps.length\">\n          <div class=\"ion-box-item\" *ngFor=\"let item of ionOps\">\n            <ba-ion-range [options]=\"item\"></ba-ion-range>\n          </div>\n        </ng-template>\n      </div>\n    </ba-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/forms/plugin/plugin.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress-box h4 {\n  font-size: 16px;\n  margin-bottom: 10px; }\n\n.ion-box h3 {\n  font-size: 18px; }\n\n.ion-box h4 {\n  font-size: 14px;\n  font-weight: normal;\n  padding: 8px 0; }\n\n.ion-box p {\n  font-size: 13px; }\n\n.ion-box .ion-box-item {\n  margin: 15px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

});
//# sourceMappingURL=4.chunk.js.map