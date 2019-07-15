import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CapcodataService {

  constructor(private httpClient: HttpClient) { }
  // Get Data
  GetData(): Observable<any[]> {
    return this.httpClient.get<any[]>('assets/sample_data.json');
  }
  // Post Data
  updateStatus(formData): Observable<any> {
    return this.httpClient.post('', formData);
  }
}
