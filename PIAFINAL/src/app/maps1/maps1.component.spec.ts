
import { IonicModule } from '@ionic/angular';
import { Maps1Component } from './maps1.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
describe('Maps1Component', () => {
  let component: Maps1Component;
  let fixture: ComponentFixture<Maps1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Maps1Component ],
      imports: [IonicModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Maps1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
