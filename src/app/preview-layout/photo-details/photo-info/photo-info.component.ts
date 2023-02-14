import { Component } from "@angular/core";

@Component({
	selector: "app-photo-info",
	templateUrl: "./photo-info.component.html",
	styleUrls: ["./photo-info.component.scss"],
})
export class PhotoInfoComponent {
	public readonly items: Array<string> = [
		"Nogomet", "Italija", "Serie A", "Genua", "Italien", "Fussball", "Soccer"
	]
}
