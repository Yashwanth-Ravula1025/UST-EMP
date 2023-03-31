"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var EmployeeRegService = /** @class */ (function () {
    function EmployeeRegService(http) {
        this.http = http;
    }
    EmployeeRegService.prototype.doRegistration = function (user) {
        return this.http.post("http://localhost:9090/register", user, { responseType: 'text' });
    };
    EmployeeRegService.prototype.getUsers = function () {
        return this.http.get("http://localhost:9090/getAllUsers");
    };
    EmployeeRegService.prototype.getUserByEmail = function (email) {
        return this.http.get("http://localhost:9090//findUser/" + email);
    };
    EmployeeRegService.prototype.deleteUser = function (id) {
        return this.http["delete"]("http://localhost:9090/cancel/" + id);
    };
    EmployeeRegService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], EmployeeRegService);
    return EmployeeRegService;
}());
exports.EmployeeRegService = EmployeeRegService;

//# sourceMappingURL=employee-reg.service.js.map
