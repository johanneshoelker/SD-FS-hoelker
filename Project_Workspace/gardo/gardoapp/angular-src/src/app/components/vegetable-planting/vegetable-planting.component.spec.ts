/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VegetablePlantingComponent } from './vegetable-planting.component';

describe('VegetablePlantingComponent', () => {
  let component: VegetablePlantingComponent;
  let fixture: ComponentFixture<VegetablePlantingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetablePlantingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetablePlantingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
