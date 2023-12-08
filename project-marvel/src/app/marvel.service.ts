// marvel.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface MarvelCharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private apiUrl = 'https://gateway.marvel.com/v1/public/';
  private apiKey = 'b60afe8c1a5cb0d468c8c2b236541e64'; // Remplacez par votre clé publique
  private charactersEndpoint = 'characters';

  constructor(private http: HttpClient) { }

  getMarvelCharacters(): Observable<MarvelCharacter[]> {
    const url = `${this.apiUrl}${this.charactersEndpoint}?apikey=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map((response: any) => response.data.results),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
