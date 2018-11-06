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
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { of as observableOf } from 'rxjs';
import { FlatTreeControl } from '@angular/cdk/tree';
import { files } from './example-data';
var MyTreeComponent = /** @class */ (function () {
    function MyTreeComponent() {
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.dataSource.data = files;
    }
    /** Transform the data to something the tree can read. */
    MyTreeComponent.prototype.transformer = function (node, level) {
        return {
            name: node.name,
            type: node.type,
            level: level,
            expandable: !!node.children
        };
    };
    /** Get the level of the node */
    MyTreeComponent.prototype.getLevel = function (node) {
        return node.level;
    };
    /** Get whether the node is expanded or not. */
    MyTreeComponent.prototype.isExpandable = function (node) {
        return node.expandable;
    };
    /** Get whether the node has children or not. */
    MyTreeComponent.prototype.hasChild = function (index, node) {
        return node.expandable;
    };
    /** Get the children for the node. */
    MyTreeComponent.prototype.getChildren = function (node) {
        return observableOf(node.children);
    };
    MyTreeComponent = __decorate([
        Component({
            selector: 'app-my-tree',
            templateUrl: './my-tree.component.html',
            styleUrls: ['./my-tree.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], MyTreeComponent);
    return MyTreeComponent;
}());
export { MyTreeComponent };
//# sourceMappingURL=my-tree.component.js.map