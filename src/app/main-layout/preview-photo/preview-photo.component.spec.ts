import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPhotoComponent } from './preview-photo.component';

describe('PreviewPhotoComponent', () => {
  let component: PreviewPhotoComponent;
  let fixture: ComponentFixture<PreviewPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
