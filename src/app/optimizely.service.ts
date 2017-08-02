import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import * as optimizely from 'optimizely-client-sdk';

@Injectable()
export class OptimizelyService {

    private _instance: {} = null;
    private _dataFile: {} = null;

    constructor(private http: Http) { }

    public getInstance(): Observable<any> {
        if (this._instance) {
            return Observable.of(this._instance);
        } else {
            return this.http.get('https://cdn.optimizely.com/json/8515982908.json')
                .map(res => res.json())
                .map(d => {
                    this._dataFile = d;
                    this._instance = optimizely.createInstance({ datafile: this._dataFile });
                    return this._instance;
                });
        }
    }
}
