import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, OnInit, Output, Renderer} from "@angular/core";

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective implements OnInit {
  ngOnInit(): void {


  }

  private colors: string[] = ['Red', 'Blue', 'Green', 'Purple'];
  private randCol:string = this.colors[Math.floor(Math.random() * this.colors.length)];
  @Output() colorValue=new EventEmitter();

  constructor(private element: ElementRef,
              private renderer: Renderer) {

  }



  @HostListener('click')changeColor() {


    this.renderer.setElementStyle(this.element.nativeElement, 'color', this.randCol);
  //  console.log(this.randCol);
    this.colorValue.emit(this.randCol);
  }


}
