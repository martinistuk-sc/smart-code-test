import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { Observable, map, switchMap, EMPTY } from "rxjs";

import { PhotoDetails } from "src/app/interfaces/photo-details.interface";
import { PhotoService } from "src/app/services/photo/photo.service";

@Component({
	selector: "app-photo-details",
	templateUrl: "./photo-details.component.html",
	styleUrls: ["./photo-details.component.scss"],
})
export class PhotoDetailsComponent {
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
}