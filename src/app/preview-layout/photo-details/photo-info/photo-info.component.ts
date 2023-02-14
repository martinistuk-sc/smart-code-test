import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { Observable, map, switchMap, EMPTY } from "rxjs";

import { Content } from "src/app/interfaces/content.interface";
import { PhotoService } from "src/app/services/photo/photo.service";

@Component({
	selector: "app-photo-info",
	templateUrl: "./photo-info.component.html",
	styleUrls: ["./photo-info.component.scss"],
})
export class PhotoInfoComponent {
	private routeId$: Observable<string | null>;
	public photoDetails$: Observable<Content>;

	constructor(private route: ActivatedRoute, private photoService: PhotoService) {
		this.routeId$ = this.route.paramMap.pipe(
			map((params: ParamMap) => params.get("id") as string)
		);
		this.photoDetails$ = this.routeId$.pipe(
			switchMap((id: string | null) => {
				if (!id) {
					return EMPTY;
				} else {
					return this.photoService.getPhotoDetails(id)
				}
			})
		);
	}

	public readonly items: Array<string> = [
		"Nogomet",
		"Italija",
		"Serie A",
		"Genua",
		"Italien",
		"Fussball",
		"Soccer",
	];
}