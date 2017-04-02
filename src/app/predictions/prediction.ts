import { PredictionRow } from './prediction-row';
export class Prediction {

  gameType: string;
  gameDateFrom: string;
  gameDateTo: string;
  rows: PredictionRow[];
}
