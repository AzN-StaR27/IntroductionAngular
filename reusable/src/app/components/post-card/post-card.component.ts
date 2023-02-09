import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {

  @Input() title = "Mon titre par défaut"
  //On peut utiliser un alias, qu'on passera en argument de notre décorateur Output comme pour Input.
  //A ce moement là, c'est notre alias qu'on doit écrire en () pour lier notre événement à une fonction 
  //dans le composant parent

//c'est l'information qu'on va passer, le titre de notre post
//le @Input pour dire qu'on va transmettre la valeur à notre composant
  @Output() clickTitle = new EventEmitter();//Le nom qu'on donne à notre output ici = Le nom de l'event qu'on pourra binder après, ici clicktitle

  clickedTitle(){
    this.clickTitle.emit(this.title);
  }

}
