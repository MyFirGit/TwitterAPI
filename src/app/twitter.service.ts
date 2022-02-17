import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http' ;
import { catchError,map, timeout} from 'rxjs/operators' ;
import { Observable,of,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  api_url = 'http://localhost:3000';
  public data:any;
  
  constructor(private http: HttpClient) { }
 
  getHomeUrl()
  {
    return this.api_url+'/home_timeline';
  }
  getMentionsUrl()
  {
    return this.api_url+'/mentions_timeline';
  }
  getTimeline() {
    return this.http.get<any> (
      this.getHomeUrl(),
      {
       responseType: "json", 
       withCredentials:false
      }

     ).pipe(timeout(90000),map((res:any) => {
         var resp = res;
         console.log(resp);
         return resp;
     }));
   
  }
 
  getMentions() {
    return this.http.get<any> (
      this.getMentionsUrl(),
      {
       responseType: "json", 
       withCredentials:false
      }

     ).pipe(timeout(90000),map((res:any) => {
         var resp = res;
         console.log(resp);
         return resp;
     }));
 
  }

}
