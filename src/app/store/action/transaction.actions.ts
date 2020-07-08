import {Action} from '@ngrx/store';

export enum ActionTypes {
    LoadItems = '[Transaction] Load items from server',
    LoadSuccess = '[Transaction] Load success'
}

export class GetItems implements Action {
    readonly type = ActionTypes.LoadItems;
    constructor(public payload: { cursor: string; limit: number }) {}
}

export class LoadItems implements Action {
    readonly type = ActionTypes.LoadSuccess;

    constructor(public payload: []) {}
}

export type ActionsUnion = LoadItems | GetItems;
