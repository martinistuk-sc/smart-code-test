import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app.routing.module";
import { SearchboxModule } from "./searchbox/searchbox.module";
import { PreviewLayoutModule } from "./preview-layout/preview-layout.module";

@NgModule({
	declarations: [AppComponent],
	providers: [],
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		SearchboxModule,
		PreviewLayoutModule,
	],
})
export class AppModule {}
