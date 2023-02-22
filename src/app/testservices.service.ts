import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestservicesService {

  constructor(public http:HttpClient) { }


  data(){
    const url = 'https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed';
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  handleError(error: any){
    return throwError(error.message || "server error");
  }
}
