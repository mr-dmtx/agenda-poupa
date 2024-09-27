import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarCnhComponent } from './agendar-cnh.component';

describe('AgendarCnhComponent', () => {
  let component: AgendarCnhComponent;
  let fixture: ComponentFixture<AgendarCnhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendarCnhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendarCnhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
