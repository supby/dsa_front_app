import { Component, OnInit } from '@angular/core';

import { PredictionParams } from './prediction';
import { PredictionService } from './prediction.service';

@Component({
  selector: 'predictions',
  templateUrl: './predictions.component.html'
})

export class PredictionsComponent implements OnInit {
  predictionsList: PredictionParams[];

  constructor(private predictionService: PredictionService) {}

  ngOnInit(): void {
    this.predictionService
        .getPredictionParamsList()
        .then(pList => this.predictionsList = pList);
  }
}
