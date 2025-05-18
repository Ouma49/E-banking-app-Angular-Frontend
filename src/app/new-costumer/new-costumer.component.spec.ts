import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCostumerComponent } from './new-costumer.component';

describe('NewCostumerComponent', () => {
  let component: NewCostumerComponent;
  let fixture: ComponentFixture<NewCostumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCostumerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
