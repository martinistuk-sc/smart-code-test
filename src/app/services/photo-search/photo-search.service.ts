import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, map } from "rxjs";

import { Content } from "src/app/interfaces/content.interface";
import { Response } from "src/app/interfaces/response.interface";

@Injectable({
	providedIn: "root",
})
export class PhotoSearchService {
	constructor(private http: HttpClient) {}

	public getPhotos(searchTerm: string): Observable<Array<Content>> {
		const fullPath: string =
			"https://api.pixsell.hr/home/agencies?text=" + searchTerm;
		return this.http
			.get<Response>(fullPath)
			.pipe(map((response) => response.content));
	}
}
