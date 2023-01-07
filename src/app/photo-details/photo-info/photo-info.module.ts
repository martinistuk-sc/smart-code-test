import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoInfoComponent } from "./photo-info.component";

@NgModule({
	declarations: [PhotoInfoComponent],
	imports: [CommonModule],
	exports: [PhotoInfoComponent],
})
export class PhotoInfoModule {}
