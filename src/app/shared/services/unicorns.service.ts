import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Unicorn } from '../models/unicorn.model';

@Injectable({
  providedIn: 'root',
})
export class UnicornsService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Unicorn[]> {
    return this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`);
  }

  public get(unicornId: number): Observable<Unicorn> {
    return this.http.get<Unicorn>(`${environment.apiUrl}/unicorns/${unicornId}`);
  }

  public create(unicorn: Omit<Unicorn, 'id'>): Observable<Unicorn> {
    return this.http.post<Unicorn>(`${environment.apiUrl}/unicorns`, unicorn);
  }

  public update(unicorn: Unicorn): Observable<void> {
    return this.http.put<void>(`${environment.apiUrl}/unicorns/${unicorn.id}`, unicorn);
  }

  public delete(unicorn: Unicorn): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/unicorns/${unicorn.id}`);
  }
}
