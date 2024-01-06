// comics.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComicsService {
  private apiUrl = 'https://gateway.marvel.com/v1/public'; // Replace with the actual Marvel API URL

  constructor(private http: HttpClient) {}

  getComics(): Observable<any[]> {
    const endpoint = `${this.apiUrl}/comics`; // Replace with the actual endpoint for fetching comics
    return this.http.get<any[]>(endpoint);
  }

  getComicDescription(comicId: number): Observable<string> {
    const endpoint = `${this.apiUrl}/comics/${comicId}/description`; // Replace with the actual endpoint for fetching comic description
    return this.http.get<string>(endpoint);
  }

  getCharactersForComic(comicId: number): Observable<any[]> {
    const endpoint = `${this.apiUrl}/comics/${comicId}/characters`; // Replace with the actual endpoint for fetching characters for a comic
    return this.http.get<any[]>(endpoint);
  }
}
