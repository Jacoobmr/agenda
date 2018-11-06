var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PersonService } from '../services/person.service';
import { DataSource } from '@angular/cdk/table';
var MyTableComponent = /** @class */ (function () {
    function MyTableComponent(personService) {
        this.personService = personService;
        this.dataSource = new PersonDataSource(this.personService);
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['name', 'lastName'];
        this.personService.getConfig().subscribe(function (config) {
            console.log(config);
        });
        this.personService.getPersons().subscribe(function (persons) {
            console.log(persons);
        });
    }
    MyTableComponent.prototype.ngOnInit = function () {
        // this.dataSource = new MyTableDataSource(this.paginator, this.sort);
    };
    MyTableComponent = __decorate([
        Component({
            selector: 'app-my-table',
            templateUrl: './my-table.component.html',
            styleUrls: ['./my-table.component.css'],
        }),
        __metadata("design:paramtypes", [PersonService])
    ], MyTableComponent);
    return MyTableComponent;
}());
export { MyTableComponent };
var PersonDataSource = /** @class */ (function (_super) {
    __extends(PersonDataSource, _super);
    function PersonDataSource(personService) {
        var _this = _super.call(this) || this;
        _this.personService = personService;
        return _this;
    }
    PersonDataSource.prototype.connect = function () {
        return this.personService.getPersons();
    };
    PersonDataSource.prototype.disconnect = function () {
    };
    return PersonDataSource;
}(DataSource));
export { PersonDataSource };
//# sourceMappingURL=my-table.component.js.map