import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {select, Store} from '@ngrx/store';
import { GetItems } from '../store/action/transaction.actions';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactionsList = {
    limit: 10,
    firstCursor: '',
    lastCursor: '',
    data: [],
    noMoreData: false
  };

  @ViewChild('transactionsScroll', { static: false }) transactionsScroll: CdkVirtualScrollViewport;

  constructor(private store: Store<any>, private cd: ChangeDetectorRef, private spinner: NgxSpinnerService) {
    store.pipe(select(state => state)).subscribe(data => {
      this.spinner.hide();
      if (data.transaction.transactions.length !== 0) {
        this.transactionsList.noMoreData = false;
        this.cd.detectChanges();
        this.transactionsList.data = data.transaction.transactions;
        this.transactionsList.firstCursor = data.transaction.transactions[0][0];
        this.transactionsList.lastCursor = data.transaction.transactions[9][0];
      } else {
        this.transactionsList.noMoreData = true;
        this.transactionsList.firstCursor = '0';
        this.transactionsList.lastCursor = '0';
      }
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loadTransactions();
  }

  // get transactions list
  loadTransactions() {
    this.store.dispatch(new GetItems({cursor: this.transactionsList.lastCursor, limit: this.transactionsList.limit}));
  }

  // call next batch of artist list on scroll
  getNextBatchOnScroll(objInitName, functionName) {
    if (!this[objInitName + 'List'].noMoreData) {
      const end = this[objInitName + 'Scroll'].getRenderedRange().end;
      const total = this[objInitName + 'Scroll'].getDataLength();
      if (end === total) {
        this[objInitName + 'List'].noMoreData = true;
        this[functionName]();
      }
    }
  }

  trackByIdx(i) {
    return i;
  }

}
