
import { ActionsUnion, ActionTypes } from '../action/transaction.actions';

export const initialState: any = {
    transactions: []
  };

export function TransactionReducer(state = initialState, action: ActionsUnion) {
    switch (action.type) {
      case ActionTypes.LoadSuccess:
         return {
            ...state,
            transactions: [...state.transactions, ...action.payload]
        };
      default:
        return state;
    }
}
