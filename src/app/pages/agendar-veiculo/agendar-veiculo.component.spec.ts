import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarVeiculoComponent } from './agendar-veiculo.component';

describe('AgendarVeiculoComponent', () => {
  let component: AgendarVeiculoComponent;
  let fixture: ComponentFixture<AgendarVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendarVeiculoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendarVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
