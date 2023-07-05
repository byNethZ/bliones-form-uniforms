import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardComponent } from './shared/card/card.component';
import { ImagesComponent } from './pages/images/images.component';
import { FormComponent } from './pages/form/form.component';
import { ThanksComponent } from './pages/thanks/thanks.component';
import { SliderComponent } from './shared/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { FieldsComponent } from './shared/fields/fields.component';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/app.state';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    ImagesComponent,
    FormComponent,
    ThanksComponent,
    SliderComponent,
    FieldsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
