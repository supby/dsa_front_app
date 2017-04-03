import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PredictionParams } from './prediction';
import { PredictionRow } from './prediction-row';
import { PredictionService } from './prediction.service';

@Component({
  selector: 'prediction',
  templateUrl: './prediction.component.html'
})
export class PredictionComponent implements OnInit {
  @Input()
  inputData: PredictionParams;

  data: Observable<PredictionRow[]>;

  constructor(private predictionService: PredictionService) {}

  ngOnInit(): void {
    this.data = this.predictionService.getPredictionRows(this.inputData);
  }
}
