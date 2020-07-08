import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsComponent } from './transactions.component';
import { StoreModule } from '@ngrx/store';
import { TransactionReducer } from '../store/reducer/transaction.reducer';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ transaction: TransactionReducer }),
      ],
      declarations: [ TransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
