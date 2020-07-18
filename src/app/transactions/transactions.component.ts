import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
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
    data: []
  };


  @ViewChild('transactionsScroll', { static: false }) transactionsScroll: CdkVirtualScrollViewport;

  constructor(private store: Store<any>, private spinner: NgxSpinnerService) {
    store.pipe(select(state => state)).subscribe(data => {
      this.spinner.hide();
      if (data.transaction.transactions.length !== 0) {
        this.transactionsList.data = data.transaction.transactions;
      }
    });
  }

  ngOnInit(): void {
    this.loadTransactions();
  }

  // get transactions list
  loadTransactions() {
    let cursor = !!this.transactionsList.data.length? this.transactionsList.data[this.transactionsList.data.length - 1][0] : 0;
    
    this.store.dispatch(new GetItems({cursor: cursor, limit: this.transactionsList.limit}));
  }

  trackByIdx(i) {
    return i;
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.loadTransactions();
    }
  }

}
