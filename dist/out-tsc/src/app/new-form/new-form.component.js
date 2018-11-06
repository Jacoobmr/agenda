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
import { FormBuilder, Validators } from '@angular/forms';
import { PersonService } from '../services/person.service';
var NewFormComponent = /** @class */ (function () {
    function NewFormComponent(fb, personService) {
        this.fb = fb;
        this.personService = personService;
        this.personForm = this.fb.group({
            name: [null, Validators.required],
            lastName: [null, Validators.required],
            email: [null, Validators.email, Validators.required],
            phone: [null, Validators.required],
            avatar: [null],
        });
    }
    NewFormComponent.prototype.onSubmit = function () {
        console.log(this.personForm.value);
        this.personService.addPerson(this.personForm.value).subscribe(function (response) {
            console.log('OK: ', response);
        }, function (error) {
            console.log('ERROR: ', error);
        });
    };
    NewFormComponent = __decorate([
        Component({
            selector: 'app-new-form',
            templateUrl: './new-form.component.html',
            styleUrls: ['./new-form.component.css'],
        }),
        __metadata("design:paramtypes", [FormBuilder, PersonService])
    ], NewFormComponent);
    return NewFormComponent;
}());
export { NewFormComponent };
//# sourceMappingURL=new-form.component.js.map