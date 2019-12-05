import { Component, OnInit } from "@angular/core";
import { DtService } from "../service/dt-service.service";
import { FormBuilder } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-dt-element",
  templateUrl: "./dt-element.component.html",
  styleUrls: ["./dt-element.component.scss"]
})
export class DtElementComponent implements OnInit {
  constructor(
    private readonly dtService: DtService,
    private readonly fb: FormBuilder,
    public dialog: MatDialog
  ) {}

  dataObj: any;
  ngOnInit() {
    this.dataObj = JSON.parse(this.dtService.getData());
    if (this.dataObj.actions.action_type.length > 0) {
      this.openDialog();
    }
  }

  openDialog() {}

  createForm() {}
}
