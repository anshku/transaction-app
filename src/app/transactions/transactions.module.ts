import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { EllipesPipe } from '../shared/pipes/ellipse.pipe';
import { TransactionService } from '../shared/service/transaction.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [TransactionsComponent, EllipesPipe],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    HttpClientModule,
    ScrollingModule,
    NgxSpinnerModule
  ],
  providers: [TransactionService]
})
export class TransactionsModule { }
