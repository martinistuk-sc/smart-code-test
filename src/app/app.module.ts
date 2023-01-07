import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { PhotoDetailsModule } from "./photo-details/photo-details.module";
import { BasketModule } from "./basket/basket.module";

@NgModule({
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, BasketModule, PhotoDetailsModule]
})
export class AppModule {}
