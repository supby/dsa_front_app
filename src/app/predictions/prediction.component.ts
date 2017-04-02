import { Component, Input } from '@angular/core';

import { Prediction } from './prediction';
import { PredictionService } from './prediction.service';

@Component({
  //moduleId: module.id,
  selector: 'prediction',
  templateUrl: './prediction.component.html'
})
export class PredictionComponent {
  @Input()
  data: Prediction;

  constructor(private predictionService: PredictionService) {}
}
