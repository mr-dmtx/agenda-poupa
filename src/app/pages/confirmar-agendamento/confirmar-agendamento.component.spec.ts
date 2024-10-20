import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarAgendamentoComponent } from './confirmar-agendamento.component';

describe('ConfirmarAgendamentoComponent', () => {
  let component: ConfirmarAgendamentoComponent;
  let fixture: ComponentFixture<ConfirmarAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmarAgendamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
