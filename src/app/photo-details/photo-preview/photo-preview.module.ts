import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotoPreviewComponent } from "./photo-preview.component";

@NgModule({
	declarations: [PhotoPreviewComponent],
	imports: [CommonModule],
	exports: [PhotoPreviewComponent],
})
export class PhotoPreviewModule {}
