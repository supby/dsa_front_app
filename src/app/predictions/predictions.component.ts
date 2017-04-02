import { Component, OnInit } from '@angular/core';

import { Prediction } from './prediction';
import { PredictionService } from './prediction.service';

@Component({
  selector: 'predictions',
  templateUrl: './predictions.component.html'
})

export class PredictionsComponent implements OnInit {
  predictionsList: Prediction[];

  constructor(private predictionService: PredictionService) {}

  ngOnInit(): void {
    this.predictionsList = this.predictionService.getPredictionsList();
  }
}
