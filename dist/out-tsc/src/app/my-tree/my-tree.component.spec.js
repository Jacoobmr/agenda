import { async, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatIconModule, MatTreeModule } from '@angular/material';
import { MyTreeComponent } from './my-tree.component';
describe('MyTreeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MyTreeComponent],
            imports: [
                MatButtonModule,
                MatIconModule,
                MatTreeModule,
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MyTreeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should compile', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=my-tree.component.spec.js.map