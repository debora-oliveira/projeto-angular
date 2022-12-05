import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesListComponent } from './atividades-list.component';

describe('AtividadesListComponent', () => {
  let component: AtividadesListComponent;
  let fixture: ComponentFixture<AtividadesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtividadesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
