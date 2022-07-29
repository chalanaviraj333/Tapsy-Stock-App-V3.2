import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddVerifiedProductPage } from './add-verified-product.page';

describe('AddVerifiedProductPage', () => {
  let component: AddVerifiedProductPage;
  let fixture: ComponentFixture<AddVerifiedProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVerifiedProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddVerifiedProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
