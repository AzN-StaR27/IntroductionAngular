import { Component, OnInit, EventEmitter } from '@angular/core';
// import {POKEMONS} from './mock-pokemon';
// import {Pokemon} from './pokemon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit //permet de déclencher une méthode lorsqu'on vient instancier la class
{
  // title = 'my-pokedex';
  
  // pokemonSelected: Pokemon | undefined; //le undefined au cas où on lui dit un pokémon de type 32 par exemple, ça n'existe pas -> undefined 
  // messageVisible: boolean = false;
  ngOnInit(){}
  //   console.table(this.pokemonList);    
  // }

  //méthode de connard 
  // selectPokemon(event: MouseEvent){
  //   
  //   const pokemon = (event.target as HTMLInputElement).innerText;

  //   console.log(`vous avez cliqué sur le pokémon ${pokemon}`);    

  // }

  // selectPokemon(pokemon: any){
  //   console.log(pokemon);   
  // }

  // selectPokemonById(pokemonId: string){
  //   console.log(pokemonId);
  //   const pokemon : Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id === +pokemonId) //on fait pas un filter car filter renvoit un tableau tandis que le find renvoit qu'un élément
  //   this.pokemonSelected = pokemon;
  //   if(pokemonId ===  ""){
  //     this.messageVisible = false;
  //   }else{
  //     this.messageVisible = true; 
  //   }
  // }
}