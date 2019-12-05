import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DtService {
  constructor() {}
  data: any = {
    actions: {
      action_verb: "get",
      action_type: ["string", "number", "radio", "checkbox"],
      token: "abc"
    }
  };
  sampleData = JSON.stringify(this.data);

  getData() {
    return this.sampleData;
  }
}
