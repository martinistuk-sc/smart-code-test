import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { Observable, map, switchMap, EMPTY } from "rxjs";

import { PhotoDetails } from "src/app/interfaces/photo-details.interface";
import { PhotoService } from "src/app/services/photo/photo.service";

@Component({
	selector: "app-preview-photo",
	templateUrl: "./preview-photo.component.html",
	styleUrls: ["./preview-photo.component.scss"],
})
export class PreviewPhotoComponent {
	constructor(
		private route: ActivatedRoute,
		private photoService: PhotoService
	) {}

	private routeId$: Observable<string | null> = this.route.paramMap.pipe(
		map((params: ParamMap) => params.get("id") as string)
	);
	public photoDetails$: Observable<PhotoDetails> = this.routeId$.pipe(
		switchMap((id: string | null) =>
			id ? this.photoService.getPhotoDetails(id) : EMPTY
		)
	);
}