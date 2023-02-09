import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] = POKEMONS;//un tableau d'élément qui respecte l'interface Pokemon, on a pas d'erreur car notre POKEMONS respectent les conditions de notre Pokemon[];

}
