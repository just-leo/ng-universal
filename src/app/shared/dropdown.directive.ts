import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {

  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.removeClass(this.elRef.nativeElement, 'open');
  }

  @HostListener('click') toggle(eventData: Event) {
    // if(this.isOpen) {
    //   this.renderer.removeClass(this.elRef.nativeElement, 'open');
    // } else {
    //   this.renderer.addClass(this.elRef.nativeElement, 'open');
    // }
    this.isOpen = !this.isOpen;
  }
}
