import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import { DATA_REQUEST } from '../actions/actionTypes';
import { dataRequestSuccess, dataRequestFailure } from '../actions/actionCreators';
import { of } from 'rxjs';

export const dataRequestEpic = action$ => action$.pipe(
    ofType(DATA_REQUEST),
    map(o => o.payload.url),
    switchMap(o => ajax.getJSON(o).pipe(
        map(o => dataRequestSuccess(o)),
        catchError(e => of(dataRequestFailure(e))),
    )),
);