import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../services/auth-service/auth.service";

@Component({
	selector: "app-main-layout",
	templateUrl: "./main-layout.component.html",
	styleUrls: ["./main-layout.component.scss"],
})
export class MainLayoutComponent {
	constructor(private authService: AuthService, private router: Router) {}

	public logout(): void {
		this.authService.logout().subscribe(
			() => this.router.navigate(["auth", "login"])
		);
	}
}