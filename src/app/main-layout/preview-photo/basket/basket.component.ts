import { Component, Input } from "@angular/core";

import { DownloadService } from "src/app/services/download/download.service";

@Component({
	selector: "app-basket",
	templateUrl: "./basket.component.html",
	styleUrls: ["./basket.component.scss"],
})
export class BasketComponent {
	constructor(private downloadService: DownloadService) {}

	@Input() photoId?: string;

	public onDownload() {
		this.downloadService.download(this.photoId as string).subscribe({
			next: (dlLink) => {console.log(dlLink)},
			error: () => window.alert("Error downloading file")
		});
	}
}
