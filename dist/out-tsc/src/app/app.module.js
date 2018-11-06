var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule, MatTreeModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { MyTableComponent } from './my-table/my-table.component';
import { MyDashComponent } from './my-dash/my-dash.component';
import { AppRoutingModule } from './app-routing.module';
import { MyTreeComponent } from './my-tree/my-tree.component';
import { MyDragComponent } from './my-drag/my-drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NewFormComponent } from './new-form/new-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                MyNavComponent,
                MyTableComponent,
                MyDashComponent,
                MyTreeComponent,
                MyDragComponent,
                NewFormComponent
            ],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                LayoutModule,
                MatToolbarModule,
                MatButtonModule,
                MatSidenavModule,
                MatIconModule,
                MatListModule,
                MatTableModule,
                MatPaginatorModule,
                MatSortModule,
                MatGridListModule,
                MatCardModule,
                MatMenuModule,
                AppRoutingModule,
                MatTreeModule,
                DragDropModule,
                MatInputModule,
                MatSelectModule,
                MatRadioModule,
                ReactiveFormsModule,
                HttpClientModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map