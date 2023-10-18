import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointerGlowComponent } from './pointer-glow.component';

describe('PointerGlowComponent', () => {
  let component: PointerGlowComponent;
  let fixture: ComponentFixture<PointerGlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointerGlowComponent]
    });
    fixture = TestBed.createComponent(PointerGlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
