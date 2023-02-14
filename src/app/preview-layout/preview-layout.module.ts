import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PreviewLayoutComponent } from "./preview-layout.component";
import { BasketModule } from "./basket/basket.module";
import { PhotoDetailsModule } from "./photo-details/photo-details.module";

@NgModule({
	declarations: [PreviewLayoutComponent],
	imports: [CommonModule, PhotoDetailsModule, BasketModule],
	exports: [PreviewLayoutComponent],
})
export class PreviewLayoutModule {}
