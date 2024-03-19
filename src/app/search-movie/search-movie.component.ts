import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { isRequiredValidator } from '../validators/searchMovieValidator';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrl: './search-movie.component.scss'
})
export class SearchMovieComponent implements OnInit {
  movieTypes: string[] = ['movie', 'serie', 'episode']
  movieTimes: string[] = ['complète', 'courte']
    
  constructor(private fb: FormBuilder){}

  movieForm = this.fb.group({
    // 👇 "name" or "identifier"
    movieDetails: this.fb.group(
      {
        id: [''],
        title: [''],
      },
      { validators: isRequiredValidator() }
    ),
    type: [this.movieTypes[1]],
    year: [''],
    fiche: [''],
  });

  ngOnInit(): void {
    this.movieForm.patchValue({
      fiche: this.movieTimes[1]
    })
  }

  onSubmit(): void{
    console.log(this.movieForm.value);
    
  }

  get movieDetails(){
    return this.movieForm.get('movieDetails')
  }
}
