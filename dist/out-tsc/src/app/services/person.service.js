var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var PersonService = /** @class */ (function () {
    function PersonService(http) {
        this.http = http;
        this.configUrl = 'assets/config.json';
        this.apiUrl = 'https://agenda-api-cjmr.now.sh/api/persons';
    }
    PersonService.prototype.getConfig = function () {
        return this.http.get('this.configUrl');
    };
    PersonService.prototype.getPersons = function () {
        return this.http.get(this.apiUrl);
    };
    PersonService.prototype.addPerson = function (person) {
        return this.http.post(this.apiUrl, person);
    };
    PersonService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], PersonService);
    return PersonService;
}());
export { PersonService };
//# sourceMappingURL=person.service.js.map