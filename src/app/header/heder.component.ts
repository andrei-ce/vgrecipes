import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() routeChanged = new EventEmitter<string>()

  constructor() {}

  goTo(route: 'recipes' | 'shopping') {
    this.routeChanged.emit(route)
  }

}