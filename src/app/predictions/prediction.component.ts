import { Observable } from 'rxjs/Observable';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

import { PredictionParams } from './prediction';
import { PredictionRow } from './prediction-row';
import { PredictionService } from './prediction.service';

@Component({
  selector: 'prediction',
  templateUrl: './prediction.component.html'
})
export class PredictionComponent implements OnInit {
  @Input()
  params: PredictionParams;
  data: Observable<PredictionRow[]>;

  public dt: Date = new Date();

  constructor(private predictionService: PredictionService) {}

  ngOnInit(): void {
    this.data = this.predictionService.getPredictionRows(this.params);
  }

  gameDateChanged(e: Date): void {
    const selectedDate = moment(e);

    const newParams = new PredictionParams();
    newParams.gameType = this.params.gameType;
    newParams.gameDateFrom = selectedDate.format('YYYY-MM-DD');
    newParams.gameDateTo = selectedDate.add(1, 'days').format('YYYY-MM-DD');

    this.params = newParams;

    this.data = this.predictionService.getPredictionRows(this.params);
  }
}
