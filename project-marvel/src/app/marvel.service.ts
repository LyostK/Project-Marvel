// marvel.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  private apiUrl = 'https://gateway.marvel.com/v1/public';
  private publicKey = 'b60afe8c1a5cb0d468c8c2b236541e64'; // Remplacez par votre clé publique

  constructor(private http: HttpClient) { }

  getMarvelCharacters(): Observable<any> {
    const url = `${this.apiUrl}/characters?apikey=${this.publicKey}`;
    return this.http.get(url);
  }
}
