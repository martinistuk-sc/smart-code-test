import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { Observable, map, switchMap, EMPTY } from "rxjs";

import { PhotoService } from "src/app/services/photo/photo.service";
import { PhotoDetails } from "src/app/interfaces/photo-details.interface";

@Component({
	selector: "app-photo-info",
	templateUrl: "./photo-info.component.html",
	styleUrls: ["./photo-info.component.scss"],
})
export class PhotoInfoComponent {
	private routeId$: Observable<string | null>;
	public photoDetails$: Observable<PhotoDetails>;

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