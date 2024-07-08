import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponentTsComponent } from './main-page.component.ts.component';

describe('MainPageComponentTsComponent', () => {
  let component: MainPageComponentTsComponent;
  let fixture: ComponentFixture<MainPageComponentTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageComponentTsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
