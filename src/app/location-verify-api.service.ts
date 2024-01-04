
// Tried using some rapidAPI 'Address verify and geocode' but  i gave up :)
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LocationVerifyApiService {
  private readonly loqateApiUrl = 'noUrl4u'; 
  private readonly apiKey = 'noKey4u';  

  constructor(private http: HttpClient) {}

  verifyLocation(address: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'loqate-address.p.rapidapi.com',
    });

    const params = new HttpParams()
      .set('lqtkey', '14dea8c6fggh51yt7b1c8d477994542b7f115009') 
      .set('p', 'v+g')
      .set('addr', address)
      .set('fs', 'no')
      .set('outputfields', 'Address1,Address2,Address3,Address4,CountryName')
      .set('maxresults', '10')
      .set('opts', 'DefaultCountry=USA,OutputScript=Latn');

 
    return this.http.get<any>(this.loqateApiUrl + '/rest/', { headers, params }).pipe(
      catchError((error) => {
        console.error('Error in location verification:', error);
        return throwError(error);
      })
    );
  }
}
