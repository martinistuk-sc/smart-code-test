import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PreviewPhotoComponent } from "./preview-photo.component";

import { PhotoDetailsModule } from "./photo-details/photo-details.module";
import { BasketModule } from "./basket/basket.module";

@NgModule({
	declarations: [PreviewPhotoComponent],
	imports: [CommonModule, PhotoDetailsModule, BasketModule],
	exports: [PreviewPhotoComponent],
})
export class PreviewPhotoModule {}