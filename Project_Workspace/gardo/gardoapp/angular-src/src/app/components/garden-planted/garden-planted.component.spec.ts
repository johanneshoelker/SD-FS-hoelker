/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GardenPlantedComponent } from './garden-planted.component';

describe('GardenPlantedComponent', () => {
  let component: GardenPlantedComponent;
  let fixture: ComponentFixture<GardenPlantedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenPlantedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenPlantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
