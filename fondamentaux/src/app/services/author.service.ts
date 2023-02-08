import { Injectable } from '@angular/core';

export interface Author{
  name:string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  getAllAuthors() {
    return [
      {
        name:"machin"
      },
      {
        name:"truc"
      },
      {
        name:"bidule"
      }
    ]

  }
}
