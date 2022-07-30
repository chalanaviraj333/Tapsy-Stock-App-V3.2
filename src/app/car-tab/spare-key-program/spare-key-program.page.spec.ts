import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpareKeyProgramPage } from './spare-key-program.page';

describe('SpareKeyProgramPage', () => {
  let component: SpareKeyProgramPage;
  let fixture: ComponentFixture<SpareKeyProgramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpareKeyProgramPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpareKeyProgramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
