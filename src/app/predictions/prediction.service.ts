import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { PredictionParams } from './prediction';
import { PredictionRow } from './prediction-row';

@Injectable()
export class PredictionService {

  constructor(private http: Http) {}

  getPredictionRows(p: PredictionParams): Observable<PredictionRow[]> {
    return this.http
               .get(`http://localhost:3000/predictions?gameType=${p.gameType}&gameDateFrom=${p.gameDateFrom}&gameDateTo=${p.gameDateTo}`)
               .map(response => response.json() as PredictionRow[]);
  }

  getPredictionParamsList(): Promise<PredictionParams[]> {
    return this.http
               .get(`http://localhost:3000/params`)
               .toPromise()
               .then(response => response.json() as PredictionParams[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
