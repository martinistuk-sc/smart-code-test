import { Component, OnDestroy } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

import { Subscription } from "rxjs";

import { Content } from "../../interfaces/content.interface";
import { PhotoService } from "../../services/photo/photo.service";

@Component({
	selector: "app-searchbox",
	templateUrl: "./searchbox.component.html",
	styleUrls: ["./searchbox.component.scss"],
})
export class SearchboxComponent implements OnDestroy {
	constructor(
		private formBuilder: FormBuilder,
		private photoService: PhotoService
	) {}

	public searchForm = this.formBuilder.group(
		{ name: ["Modrić", [Validators.required]] },
		{ updateOn: "change" }
	);

	private subscription?: Subscription;

	public onSubmit(): void {
		this.itemList = [];
		this.photoService.getSearchResults(
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
