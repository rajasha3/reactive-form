import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DtElementComponent } from "./dt-element/dt-element.component";
import { DtService } from "./service/dt-service.service";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { DialogBoxComponent } from "./dialog-box/dialog-box.component";
@NgModule({
  declarations: [AppComponent, DtElementComponent, DialogBoxComponent],
  imports: [BrowserModule, ReactiveFormsModule, MatDialogModule],
  providers: [DtService],
  bootstrap: [AppComponent]
})
export class AppModule {}
