import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spongebob'
})
// décorateur permet de définir le nom de notre pipe
// quand on fait des appels de notre pipe dans l'html on utlise ce nom là
//exemple {{ "la loutre de jemappes" | spongebob }}

export class SpongebobPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(args);
    
    let result = '';
    for (let letterIndex = 0;letterIndex < value.length; letterIndex++) { //on va boucler sur chaque caractere de ma chaine de caractere 
      const letter = value.charAt(letterIndex);
      const toUppercase = Math.round(Math.random()) === 1 ? true : false;
      if (toUppercase){
        result += letter.toUpperCase();
      } else {
        result += letter.toLowerCase();
      }

    } 
    return result;
  }

}
//le premier arg est obligatoire, c'est sa valeur 
//le 2e arg c'est un spread arg (pas obligatoire) c'est quand on a plus de 1 à l'infini arguments

