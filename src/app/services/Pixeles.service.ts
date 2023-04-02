import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { createClient } from 'pexels';


@Injectable({
  providedIn: 'root'
})
export class PixelService {
     client = createClient('MtM7LODBJT6YLO34tBippXigXf6dZVHdjDSKI4IDm5krpB6lXsHZ1CTp');
     query = 'Nature';
  constructor(private http: HttpClient) {
     
    
  }

  getExamples(page: number){
    return this.client.photos.curated({ page,    per_page: 50 });
  }

  getElementById(id: number) {
    return this.client.photos.show({id: id});
  }
}