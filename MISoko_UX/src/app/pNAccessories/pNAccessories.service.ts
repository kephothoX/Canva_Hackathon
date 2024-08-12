import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';

import { ErrorService } from '../error/error.service';
import { Observable, catchError, of} from 'rxjs';

import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class  PNAccessoriesService {

   constructor(
    private _errorService: ErrorService,
    private _appService: AppService,
    private _httpClient: HttpClient,
  ) {  }


  newPNAccessory(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/pNAccessories/new`, data).pipe(catchError(this._errorService.handleError));
  }

  updatePNAccessory(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/pNAccessories/update`, data).pipe(catchError(this._errorService.handleError));
  }

  getAllPNAccessories(): Observable<any> {
    return this._httpClient.get(`${ this._appService.APIEndpoint }/pNAccessories`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getPNAccessories(): Observable<any> {
    return this._httpClient.get(`${ this._appService.APIEndpoint }/pNAccessories/5`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getPNAccessoryByID(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/pNAccessory`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }
 
}
