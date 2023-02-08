import { Component } from '@angular/core';
import { MoviesService, Movie } from '../../services/movies.service';

@Component({
  //fonctionne comme un selecteur css
  selector: '.premierComposant',
  //chemin vers le fichier html lié à ma class
  templateUrl: './mon-premier-composant.component.html',
  //On peut écrire l'html directement dans le composant
  //Si on remplace templateUrl par template
  // /!\ je vous le conseille pas pour autant
  // template: `
  // <div>
  //   J'existe, je vous promets.
  // </div>`,
  styleUrls: ['./mon-premier-composant.component.css']
  //pareil avec le style, ça existe
  //mais pas génial
  //rajouter la class red sur le p dans mon-premier-composant.component.html
  // styles:[`
  // .red{
  //   background-color: red
  // }`]
})
export class MonPremierComposantComponent {

  //On va utiliser cette propriété et l'afficher dans 
  //notre html
  criDeVictoire = "Hourra !"

  declare movies: Movie[];

  constructor(private moviesService: MoviesService){
    this.movies = this.moviesService.getAllMovies();
  }

  //movies = ['Forrest Gump','Alice au pays des merveilles','L\'attaque des bananes martiennes'];


  getBanane() {
    return "banane 😏"
  }



}
