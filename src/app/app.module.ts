import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { AuthLayoutModule } from "./auth-layout/auth-layout.module";
import { SearchboxModule } from "./main-layout/searchbox/searchbox.module";
import { MainLayoutModule } from "./main-layout/main-layout.module";
import { AuthService } from "./services/auth-service/auth.service";

@NgModule({
	declarations: [AppComponent],
	providers: [
		{
			provide: APP_INITIALIZER,
			multi: true,
			useFactory: (authService: AuthService) => {
				return () => authService.init();
			},
			deps: [AuthService]
		}
	],
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