import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[backgroundImage]',
})
export class BackgroundImageDirective {
  private _element!: HTMLElement;

  @Input('backgroundImage') url!: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this._element = this.elementRef.nativeElement;

    this._element.style.backgroundImage = `url(${this.url})`;
  }
}
