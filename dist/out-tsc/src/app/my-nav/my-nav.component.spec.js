import { LayoutModule } from '@angular/cdk/layout';
import { async, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, } from '@angular/material';
import { MyNavComponent } from './my-nav.component';
describe('MyNavComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MyNavComponent],
            imports: [
                NoopAnimationsModule,
                LayoutModule,
                MatButtonModule,
                MatIconModule,
                MatListModule,
                MatSidenavModule,
                MatToolbarModule,
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MyNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should compile', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=my-nav.component.spec.js.map