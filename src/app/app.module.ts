import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { TransactionReducer } from './store/reducer/transaction.reducer';

import { EffectsModule } from '@ngrx/effects';
import { TransactionEffects } from './store/effects/transaction.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ transaction: TransactionReducer }),
    EffectsModule.forRoot([TransactionEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
