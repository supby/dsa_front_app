import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import 'rxjs/add/operator/map';

import { PredictionParams } from './prediction';
import { PredictionRow } from './prediction-row';

@Injectable()
export class PredictionService {

  constructor(private http: Http) {}

  getPredictionRows(p: PredictionParams): Observable<PredictionRow[]> {

    const row = new PredictionRow();
    row.gameDate = p.gameDateFrom;
    row.firstTeamName = 'Team 1';
    row.secondTeamName = 'Team 2';
    row.winProbability = 67;

    return new Observable<PredictionRow[]>((s: Subscriber<PredictionRow[]>) => {
      s.next([row]);
      setTimeout(() => s.complete(), 1000);
    });
  }

  getPredictionParamsList(): PredictionParams[] {

    const p1 = new PredictionParams();
    p1.gameType = 'NHL';
    p1.gameDateFrom = '2017-01-01';
    p1.gameDateTo = '2017-01-02';

    const p2 = new PredictionParams();
    p2.gameType = 'NBA';
    p2.gameDateFrom = '2017-01-06';
    p2.gameDateTo = '2017-01-07';

    const p3 = new PredictionParams();
    p3.gameType = 'FIFA';
    p3.gameDateFrom = '2017-01-08';
    p3.gameDateTo = '2017-01-09';

    return [p1, p2, p3];
  }
}
