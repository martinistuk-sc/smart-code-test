import { Component, Input } from "@angular/core";

import { PhotoDetails } from "src/app/interfaces/photo-details.interface";

@Component({
	selector: "app-photo-details",
	templateUrl: "./photo-details.component.html",
	styleUrls: ["./photo-details.component.scss"],
})
export class PhotoDetailsComponent {
	@Input() details: PhotoDetails | null = null;
}