import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Prediction } from './prediction';
import { PredictionRow } from './prediction-row';

@Injectable()
export class PredictionService {

  constructor(private http: Http) {}

  getPrediction(): Observable<Prediction> {
    return new Observable<Prediction>();
  }

  getPredictionsList(): Prediction[] {

    const row = new PredictionRow();
    row.gameDate = '99999999';
    row.firstTeamName = 'Team 1';
    row.secondTeamName = 'Team 2';
    row.winProbability = 67;

    const p1 = new Prediction();
    p1.gameType = 'NHL';
    p1.gameDateFrom = '2017-01-01';
    p1.gameDateTo = '2017-01-02';
    p1.rows = [ row ];

    const p2 = new Prediction();
    p2.gameType = 'NBA';
    p2.gameDateFrom = '2017-01-06';
    p2.gameDateTo = '2017-01-07';
    p2.rows = [ row ];

    const p3 = new Prediction();
    p3.gameType = 'FIFA';
    p3.gameDateFrom = '2017-01-08';
    p3.gameDateTo = '2017-01-09';
    p3.rows = [ row ];

    return [p1, p2, p3];
  }
}
