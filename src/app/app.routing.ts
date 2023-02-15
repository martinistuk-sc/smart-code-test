import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";
import { AuthGuard } from "./guards/auth-guard/auth.guard";
import { LoginComponent } from "./auth-layout/login/login.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { SearchboxComponent } from "./main-layout/searchbox/searchbox.component";
import { PreviewPhotoComponent } from "./main-layout/preview-photo/preview-photo.component";

const routes: Routes = [
	{
		path: "",
		component: MainLayoutComponent,
		canActivate: [AuthGuard],
		children: [
			{ path: "", component: SearchboxComponent },
			{ path: "preview/:id", component: PreviewPhotoComponent },
		]
	},
	{
		path: "auth",
		component: AuthLayoutComponent,
		// canActivate: [],
		children: [
			// { path: "register", component: },
			{ path: "login", component: LoginComponent },
		]
	},
	{ path: "**", redirectTo: "" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}