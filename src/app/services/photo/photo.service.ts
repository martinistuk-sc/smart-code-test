import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, map } from "rxjs";

import { Content } from "src/app/interfaces/content.interface";
import { SearchResponse } from "src/app/interfaces/search-response.interface";
import { PhotoDetails } from "src/app/interfaces/photo-details.interface";

@Injectable({
	providedIn: "root",
})
export class PhotoService {
	constructor(private http: HttpClient) {}

	public getSearchResults(searchTerm: string): Observable<Array<Content>> {
		const fullPath: string =
			"https://staging-221103.api.piwe.smartcode.eu/home/agencies?text=" + searchTerm;
		return this.http
			.get<SearchResponse>(fullPath)
			.pipe(map((response) => response.content));
	}

	public getPhotoDetails(id: string): Observable<PhotoDetails> {
		const fullPath: string =
			"https://staging-221103.api.piwe.smartcode.eu/products/" + id + "?source=PIXSELL";
		return this.http.get<PhotoDetails>(fullPath);
	}
}