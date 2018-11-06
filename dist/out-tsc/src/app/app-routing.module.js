var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyTableComponent } from './my-table/my-table.component';
import { MyDashComponent } from './my-dash/my-dash.component';
import { MyTreeComponent } from './my-tree/my-tree.component';
import { MyDragComponent } from './my-drag/my-drag.component';
import { NewFormComponent } from './new-form/new-form.component';
var routes = [
    { path: '', component: MyDashComponent },
    { path: 'lista', component: MyTableComponent },
    { path: 'nuevo', component: NewFormComponent },
    { path: 'arbol', component: MyTreeComponent },
    { path: 'dd', component: MyDragComponent },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map