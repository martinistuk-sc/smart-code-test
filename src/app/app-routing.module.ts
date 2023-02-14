import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PreviewLayoutComponent } from "./preview-layout/preview-layout.component";
import { SearchboxComponent } from "./searchbox/searchbox.component";

const routes: Routes = [
	{ path: "", component: SearchboxComponent, pathMatch: "full" },
	{ path: "preview", component: PreviewLayoutComponent},
	{ path: "**", redirectTo: "" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}