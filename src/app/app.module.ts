import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { DatepickerModule } from 'ngx-bootstrap';

import { AppComponent }  from './app.component';
import { PredictionComponent } from './predictions/prediction.component';
import { PredictionsComponent } from './predictions/predictions.component';
import { PredictionService } from './predictions/prediction.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    DatepickerModule.forRoot()
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
