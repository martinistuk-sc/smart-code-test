import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotoDetailsComponent } from "./photo-details.component";

import { PhotoPreviewModule } from "./photo-preview/photo-preview.module";
import { PhotoInfoModule } from "./photo-info/photo-info.module";

@NgModule({
    declarations: [PhotoDetailsComponent],
    exports: [PhotoDetailsComponent],
    imports: [CommonModule, PhotoPreviewModule, PhotoInfoModule]
})
export class PhotoDetailsModule {}
