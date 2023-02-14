import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./main-layout.component";
import { PreviewPhotoModule } from "./preview-photo/preview-photo.module";

@NgModule({
	declarations: [MainLayoutComponent],
	imports: [CommonModule, RouterModule, PreviewPhotoModule],
	exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
