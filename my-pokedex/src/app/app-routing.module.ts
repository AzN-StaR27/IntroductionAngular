import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

const routes: Routes = [
  {path: 'pokemons', component: ListPokemonComponent},
  {path: 'pokemons/:id', component: DetailPokemonComponent},
  //on met ':' car l'id est ici quelque chose qu'on va lui fournir
  {path: '', redirectTo: 'pokemons', pathMatch : 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
