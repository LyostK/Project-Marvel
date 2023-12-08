// marvel.service.ts

export interface MarvelApiResponse {
  data: {
    results: MarvelCharacter[];
  };
}

export interface MarvelCharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  // Ajoute d'autres propriétés si nécessaire
}


// marvel.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private publicKey = '6c6fe75e100637151a57e763c9f9a635';
  private apiUrl = 'https://gateway.marvel.com:443/v1/public/characters';

  constructor(private http: HttpClient) { }

  getMarvelCharacters(): Observable<MarvelCharacter[]> {
    const ts = new Date().getTime().toString();
    const hash = 'ffd275c5130566a2916217b101f26150';

    const fullUrl = `${this.apiUrl}?ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;

    return this.http.get<MarvelApiResponse>(fullUrl)
      .pipe(
        map(response => response.data.results)
      );
  }

  // Ajoute d'autres méthodes selon les besoins
}
