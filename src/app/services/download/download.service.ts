import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, map } from "rxjs";

import { AuthService } from "../auth/auth.service";

@Injectable({
	providedIn: "root",
})
export class DownloadService {
	constructor(private authService: AuthService, private http: HttpClient) {}

	public download(id: string): Observable<string> {
		const fullPath: string =
			"https://staging-221103.api.piwe.smartcode.eu/products/" +
			id +
			"/download/full/link?kind=PRINT&has_author_signature=false&source=PIXSELL";

		const headers = {
			Authorization: "Bearer " + this.authService.token,
		};

		return this.http
			.post<{ link: string }>(fullPath, null, { headers })
			.pipe(map((data) => data.link));
	}
}