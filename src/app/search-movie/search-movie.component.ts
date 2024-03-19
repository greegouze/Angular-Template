import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { isRequiredValidator, rangeDateValidator } from '../validators/searchMovieValidator';

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
    movieDetails: this.fb.group(
      {
        id: [''],
        title: [''],
      },
      { validators: isRequiredValidator() }
    ),
    type: [this.movieTypes[1]],
    year: ['', rangeDateValidator()],
    fiche: [''],
  });

  ngOnInit(): void {
    this.movieForm.patchValue({
      fiche: this.movieTimes[1]
    })

    this.movieForm.valueChanges
    .subscribe((value) => {
      console.log('movieForm changes values :', value);
     } )
  }

  onSubmit(): void{
    if(this.movieForm.valid){
      console.log(this.movieForm.value);
      this.onSubmit()
    } else {
      console.log('Le formulaire n\'est pas valide');
    }
  }

  get movieDetails(){
    return this.movieForm.get('movieDetails')
  }
}
