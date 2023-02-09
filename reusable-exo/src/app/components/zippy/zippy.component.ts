import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  @Input() declare title : string; //zippy reçoit un titre, on donne pas de valeur par défaut donc si on reçoit pas de titre on affiche rien
  //mon zippy component va gagner un attribut title
  //qui permettra de définir notre propriété
  @Input() isContentVisible = false;

  @Input() declare manager : string;

  @Input() declare clickCount : number;

  @Output() titleClicked = new EventEmitter();

  toggleContentVisibility(){
    this.titleClicked.emit() //mon titre a été cliqué quand on va cliquer dessus
    this.isContentVisible = !this.isContentVisible;

  }



}
