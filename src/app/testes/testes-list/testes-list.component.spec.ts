import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesListComponent } from './testes-list.component';

describe('TestesListComponent', () => {
  let component: TestesListComponent;
  let fixture: ComponentFixture<TestesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
