import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MyDragComponent } from './my-drag.component';
describe('MyDragComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MyDragComponent],
            imports: [
                NoopAnimationsModule,
                DragDropModule,
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MyDragComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should compile', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=my-drag.component.spec.js.map