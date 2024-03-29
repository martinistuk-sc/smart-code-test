import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AuthLayoutComponent } from "./auth-layout.component";
import { LoginModule } from "./login/login.module";

@NgModule({
	declarations: [AuthLayoutComponent],
	imports: [CommonModule, RouterModule, LoginModule],
	exports: [AuthLayoutComponent],
})
export class AuthLayoutModule {}
