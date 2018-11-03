import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MyDragComponent } from './my-drag.component';

describe('MyDragComponent', () => {
  let component: MyDragComponent;
  let fixture: ComponentFixture<MyDragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDragComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
