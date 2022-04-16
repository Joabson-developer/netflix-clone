import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[color]',
})
export class ColorDirective {
  private _element!: HTMLElement;

  @Input('color') public color!: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this._element = this.elementRef.nativeElement;

    this._element.style.color = this.color;
  }
}
