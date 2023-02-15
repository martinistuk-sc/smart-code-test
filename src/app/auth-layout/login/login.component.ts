import { Component, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Subscription } from "rxjs";

import { AuthService } from "src/app/services/auth/auth.service";
import { LoginData } from "src/app/interfaces/login-data.interface";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnDestroy {
	constructor(
		private readonly authService: AuthService,
		private readonly router: Router,
		private readonly formBuilder: FormBuilder
	) {}

	public loginForm: FormGroup = this.formBuilder.group(
		{
			username: ["admin", [Validators.required]],
			password: ["staging.2023", [Validators.required]]
		},
		{
			updateOn: "change"
		}
	);

	private subscription: Subscription | undefined;

	public onLogin() {
		const loginFormData: LoginData = {
			username: this.loginForm.controls["username"].value,
			password: this.loginForm.controls["password"].value
		}
		this.subscription = this.authService.login(loginFormData).subscribe({
			next: () => { this.router.navigate([""]) },
			error: () => { window.alert("ERROR - Wrong username/password") }
		});
	}

	ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}
}