import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app.routing";
import { AuthLayoutModule } from "./auth-layout/auth-layout.module";
import { SearchboxModule } from "./main-layout/searchbox/searchbox.module";
import { MainLayoutModule } from "./main-layout/main-layout.module";

@NgModule({
	declarations: [AppComponent],
	providers: [],
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		AuthLayoutModule,
		SearchboxModule,
		MainLayoutModule,
	],
})
export class AppModule {}