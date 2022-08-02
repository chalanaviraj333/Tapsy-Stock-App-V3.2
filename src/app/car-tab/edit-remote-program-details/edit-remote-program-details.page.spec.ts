import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditRemoteProgramDetailsPage } from './edit-remote-program-details.page';

describe('EditRemoteProgramDetailsPage', () => {
  let component: EditRemoteProgramDetailsPage;
  let fixture: ComponentFixture<EditRemoteProgramDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRemoteProgramDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditRemoteProgramDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
