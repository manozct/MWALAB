import {Directive, ElementRef, Input, OnInit, Renderer} from "@angular/core";

@Directive({
  selector: '[appMyvisibility]'

})
export class MyvisibilityDirective implements OnInit {
  ngOnInit(): void {

    this.renderer.setElementStyle(this.element.nativeElement, 'visibility', this.appMyvisibility ? 'visible' : 'hidden');

  }

  @Input() private appMyvisibility: boolean;

  constructor(private element: ElementRef,
              private renderer: Renderer) {


  }


}
