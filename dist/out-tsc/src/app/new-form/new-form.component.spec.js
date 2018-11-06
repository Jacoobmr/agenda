import { async, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatRadioModule, MatSelectModule, } from '@angular/material';
import { NewFormComponent } from './new-form.component';
describe('NewFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NewFormComponent],
            imports: [
                NoopAnimationsModule,
                ReactiveFormsModule,
                MatButtonModule,
                MatCardModule,
                MatInputModule,
                MatRadioModule,
                MatSelectModule,
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NewFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should compile', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=new-form.component.spec.js.map