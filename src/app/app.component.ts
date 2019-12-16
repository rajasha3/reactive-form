import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(public readonly fb: FormBuilder) {
    this.initForm();
  }
  paramsForm: FormGroup;
  params = [
    {
      key: "Name",
      defaultValue: "Rajan",
      isRequired: true,
      type: "text"
    },
    {
      key: "Emp ID",
      defaultValue: "1",
      isRequired: true,
      type: "number"
    },
    {
      key: "Department",
      defaultValue: "Software",
      isRequired: false,
      type: "text"
    }
  ];

  initForm() {
    const formObj = this.params.reduce((acc, value) => {
      acc[value.key] = [
        value.defaultValue,
        value.isRequired ? Validators.required : ""
      ];
      return acc;
    }, {});
    this.paramsForm = this.fb.group(formObj);
    console.log(this.paramsForm);
  }

  onSubmit(isValid: any) {
    if (isValid) {
      console.log(isValid);
    }
  }

  openForm(controlArray: []) {
    this.fb.group({});
  }
}
