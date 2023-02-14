import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SearchboxComponent } from "./searchbox.component";

@NgModule({
	declarations: [SearchboxComponent],
	imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
	exports: [SearchboxComponent],
})
export class SearchboxModule {}
