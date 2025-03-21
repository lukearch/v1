import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSelectorComponent } from './dropdown-selector.component';

describe('DropdownSelectorComponent', () => {
  let component: DropdownSelectorComponent;
  let fixture: ComponentFixture<DropdownSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownSelectorComponent]
    });
    fixture = TestBed.createComponent(DropdownSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
