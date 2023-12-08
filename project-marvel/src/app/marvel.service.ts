// marvel.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private publicKey = '6c6fe75e100637151a57e763c9f9a635';
  private apiUrl = 'https://gateway.marvel.com:443/v1/public/characters?apikey=6c6fe75e100637151a57e763c9f9a635';  // Remplace avec l'URL de l'API Marvel

  constructor(private http: HttpClient) { }

  getMarvelCharacters(): Observable<any> {
    const ts = new Date().getTime().toString();
    const hash = 'ffd275c5130566a2916217b101f26150';  // Remplace avec le vrai calcul du hash

    const fullUrl = `${this.apiUrl}?ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;
    
    return this.http.get(fullUrl);
  }

  // Ajoute d'autres méthodes selon les besoins
}
