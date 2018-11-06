import { async, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { MyTableComponent } from './my-table.component';
describe('MyTableComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MyTableComponent],
            imports: [
                NoopAnimationsModule,
                MatPaginatorModule,
                MatSortModule,
                MatTableModule,
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MyTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should compile', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=my-table.component.spec.js.map