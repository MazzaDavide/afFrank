import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayervideoComponent } from './playervideo.component';

describe('PlayervideoComponent', () => {
  let component: PlayervideoComponent;
  let fixture: ComponentFixture<PlayervideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayervideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayervideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
