import { Component, Input, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";

import { DownloadService } from "src/app/services/download/download.service";

@Component({
	selector: "app-basket",
	templateUrl: "./basket.component.html",
	styleUrls: ["./basket.component.scss"],
})
export class BasketComponent implements OnDestroy {
	constructor(private downloadService: DownloadService) {}

	@Input() photoId?: string;

	private subscription?: Subscription;

	public onDownload() {
		this.subscription = this.downloadService.download(this.photoId as string).subscribe({
			next: (link: string) => {
				var a = document.createElement("a");
				a.href = link;  // url
				a.target = "_blank";  // new tab
				a.click();
			},
			error: () => window.alert("Error downloading file")
		});
	}

	ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}
}