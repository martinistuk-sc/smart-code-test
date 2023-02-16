import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { map, Observable, of } from "rxjs";

import { LoginData } from "src/app/interfaces/login-data.interface";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(private http: HttpClient, private router: Router) {}

	public isAuthenticated: boolean = false;
	public token: string | null = null;

	public init(): void {
		const check = localStorage.getItem("userToken");
		if (check) {
			this.isAuthenticated = true;
			this.token = JSON.parse(check);
			this.router.navigate([""]);
		}
	}

	public login(loginData: LoginData): Observable<boolean | null> {
		return this.http.post<any>(
			"https://staging-221103.api.piwe.smartcode.eu/login",
			loginData,
			{ observe: "response" }
		)
		.pipe(
			map((response) => {
				if (response.status === 200) {
					this.isAuthenticated = true;
					this.token = response.body.token;
					localStorage.setItem("userToken", JSON.stringify(this.token));
					return true;
				}
				return null;
			})
		);
	}

	public logout(): Observable<boolean> {
		this.isAuthenticated = false;
		this.token = null;
		localStorage.removeItem("userToken");
		return of(true)
	}
}