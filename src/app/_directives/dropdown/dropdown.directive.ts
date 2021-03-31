import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  // allows us to bind to the properties of the element the directive is placed on
  @HostBinding('class.open') isOpen: boolean = false;

  constructor() {}

  ngOnInit() {
    // on load stuff
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
