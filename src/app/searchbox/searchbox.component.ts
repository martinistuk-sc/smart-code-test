import { Component, OnDestroy } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

import { Subscription } from "rxjs";

import { Content } from "../interfaces/content.interface";
import { PhotoSearchService } from "../services/photo-search/photo-search.service";

@Component({
	selector: "app-searchbox",
	templateUrl: "./searchbox.component.html",
	styleUrls: ["./searchbox.component.scss"],
})
export class SearchboxComponent implements OnDestroy {
	constructor(
		private fb: FormBuilder,
		private photoSearchService: PhotoSearchService
	) {}

	public searchForm = this.fb.group(
		{ name: ["Kolinda", [Validators.required]] },
		{ updateOn: "change" }
	);

	private subscription?: Subscription;

	public onSubmit(): void {
		this.itemList = [];
		this.photoSearchService.getPhotos(
			this.searchForm.controls.name.value as string
		).subscribe({
			next: (respArray: Array<Content>) => {
				this.itemList = respArray;
			}
		});
	}

	public itemList: Array<Content> = [];

	ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}

}
