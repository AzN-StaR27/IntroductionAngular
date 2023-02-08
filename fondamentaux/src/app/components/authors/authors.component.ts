import { Component } from '@angular/core';
import { AuthorService, Author } from '../../services/author.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  authors: Author[];

  

  constructor(private authorService:AuthorService){
    this.authors = this.authorService.getAllAuthors();
  }


}
