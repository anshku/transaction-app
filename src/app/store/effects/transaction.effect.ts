import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, debounceTime } from 'rxjs/operators';
import { ActionTypes } from '../action/transaction.actions';
import { TransactionService } from '../../shared/service/transaction.service';

@Injectable()
export class TransactionEffects {
    constructor(
        private actions$: Actions,
        private transactionService: TransactionService
    ) { }

    @Effect()
      loadTransaction$ = this.actions$.pipe(
        ofType(ActionTypes.LoadItems),
        debounceTime(400),
        mergeMap(({ payload: { cursor, limit } }) =>
          this.transactionService.loadTransactions(cursor, limit).pipe(
            map(transactions => {
              return { type: ActionTypes.LoadSuccess, payload: transactions };
            }),
            catchError(() => EMPTY)
          )
        )
      );
}
