import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AticleDetailComponent } from './aticle-detail.component';

describe('AticleDetailComponent', () => {
  let component: AticleDetailComponent;
  let fixture: ComponentFixture<AticleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AticleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
