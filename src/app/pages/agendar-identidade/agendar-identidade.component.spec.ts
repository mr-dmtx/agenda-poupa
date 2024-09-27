import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarIdentidadeComponent } from './agendar-identidade.component';

describe('AgendarIdentidadeComponent', () => {
  let component: AgendarIdentidadeComponent;
  let fixture: ComponentFixture<AgendarIdentidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendarIdentidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendarIdentidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
