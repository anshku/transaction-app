import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }

  // get transactions list
  loadTransactions(cursor, limit): Observable<any> {
    const option = 'op?columns=row_id,time,type,sender,volume&receiver=tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo&';
    const apiUrl = `${environment.baseUrl}${option}limit=${limit}&cursor.gt=${cursor}`;
    return this.httpClient.get(apiUrl);
  }
}
