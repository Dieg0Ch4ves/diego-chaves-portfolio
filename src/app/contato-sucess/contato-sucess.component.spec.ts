import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoSucessComponent } from './contato-sucess.component';

describe('ContatoSucessComponent', () => {
  let component: ContatoSucessComponent;
  let fixture: ComponentFixture<ContatoSucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoSucessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
