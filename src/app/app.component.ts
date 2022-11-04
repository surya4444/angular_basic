import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  username = "";
  isEmpty = true;
  names = ["suryateja", "lokesh", "mounika"];
  getUsername(event) {
    this.isEmpty = false;
    this.username = event.target.value;
  }
}
