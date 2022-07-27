import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddVerifiedRemotePage } from './add-verified-remote.page';

describe('AddVerifiedRemotePage', () => {
  let component: AddVerifiedRemotePage;
  let fixture: ComponentFixture<AddVerifiedRemotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVerifiedRemotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddVerifiedRemotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
