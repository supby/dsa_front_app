import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { PredictionComponent } from './predictions/prediction.component';
import { PredictionsComponent } from './predictions/predictions.component';
import { PredictionService } from './predictions/prediction.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PredictionsComponent,
    PredictionComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ PredictionService ]
})
export class AppModule { }
