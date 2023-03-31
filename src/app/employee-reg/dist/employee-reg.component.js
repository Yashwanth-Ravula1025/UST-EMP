"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var User_1 = require("../User");
var EmployeeRegComponent = /** @class */ (function () {
    function EmployeeRegComponent(service) {
        this.service = service;
        this.user = new User_1.User("", "", 0, "");
    }
    EmployeeRegComponent.prototype.ngOnInit = function () {
    };
    EmployeeRegComponent.prototype.registerNow = function () {
        var _this = this;
        var resp = this.service.doRegistration(this.user);
        resp.subscribe((function (data) { return _this.message = data; }));
    };
    EmployeeRegComponent = __decorate([
        core_1.Component({
            selector: 'app-employee-reg',
            templateUrl: './employee-reg.component.html',
            styleUrls: ['./employee-reg.component.css']
        })
    ], EmployeeRegComponent);
    return EmployeeRegComponent;
}());
exports.EmployeeRegComponent = EmployeeRegComponent;

//# sourceMappingURL=employee-reg.component.js.map
