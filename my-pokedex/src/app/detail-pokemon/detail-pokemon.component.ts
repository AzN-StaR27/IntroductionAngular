import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router){}
  declare pokemonList: Pokemon[];
  pokemon : Pokemon | undefined;
  ngOnInit(){
    this.pokemonList = POKEMONS //On vient remplir PokemonList avec POKEMONS qui vient de mock-pokemons

    const pokemonId:string|null = this.route.snapshot.paramMap.get('id');//snapshot me permet d'acceder à l'url à l'instant T
    //j'utilise le router, snapshot me permet d'accéder à la donnée à l'instanté de mon url, paramMap, me permet d'ittérer sur chacun des paramètres de mon url

    if(pokemonId){
      this.pokemon = this.pokemonList.find(monstre => monstre.id == +pokemonId)
    }
  }

}
