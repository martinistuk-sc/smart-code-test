import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class DownloadService {
	constructor(private http: HttpClient) {}

	public download(id: string) {
		const fullPath: string =
			"https://api.pixsell.hr/products/" +
			id +
			"/download/full/link?kind=PRINT&has_author_signature=false&source=PIXSELL";

		this.http.post(fullPath, );
	}
}
