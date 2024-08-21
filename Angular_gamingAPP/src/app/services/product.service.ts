import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_GAMES_URL: string = 'http://127.0.0.1:8000/api/games/';
  API_PLATFORMS_URL: string = 'http://127.0.0.1:8000/api/platforms/';

  constructor(private HttpClient: HttpClient) { }

  getGames(): Observable<any> {

    return this.HttpClient.get(this.API_GAMES_URL).pipe(res=>res)

  }

  getPlatforms(): Observable<any> {

    return this.HttpClient.get(this.API_PLATFORMS_URL);
  }
}
