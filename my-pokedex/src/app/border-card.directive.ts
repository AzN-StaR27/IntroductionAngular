import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { DefaultTitleStrategy } from '@angular/router';




@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#7FFF00';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor)
   }

   @Input("pkmBorderCard") declare borderColor: string;


// ElementRef qui vient d'angularcore va nous permettre d'avoir la référence de l'élément sur lequel nous pointons

   @HostListener("mouseenter") onMouseEnter(){
    //fonctionne comme un addeventlistener, ceci va déterminer la couleur de notre div lors du hover;
    this.setBorder(this.borderColor || this.defaultColor);
   }

   @HostListener("mouseleave") onMouseLeave(){
    this.setBorder(this.initialColor);
   }

  setHeight(height: number){
    //on va définir la hauteur du ElementRef
    this.el.nativeElement.style.height = `${height}px`
    //le native element va venir rechercher l'élément DOM car l'ElementRef est en fait un encapsuleur, un wrapper autour de l'élément dom, le nativeElement va venir chercher l'élément en question
  }

  setBorder(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`
  }

}
