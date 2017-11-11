import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/toPromise';


import { Board } from '../models/board';
import { Task } from '../models/task';
import { SubTask } from '../models/subtask';


@Injectable()
export class TrelloService {
    private _boardUrl = '/api/board/boards.json';
    public Boards: Board[];
    constructor(private _http: Http) {}

    getBoards(): Observable<Board[]> {
        if(this.Boards == undefined){
        return this._http.get(this._boardUrl)
            .map((response: Response) => <Board[]> response.json())
            .do(data => this.Boards = data )
            .catch(this.handleError);
        }
        else {
            return Observable.of(this.Boards);
        }
    }



    getBoardsWithPromises(): Promise<Board[]> {
        if(this.Boards == undefined){
        return this._http.get(this._boardUrl).toPromise()
            .then((response: Response) => {
                this.Boards = <Board[]>response.json(); 
                return <Board[]> response.json()   ;       } );
          
        }
        else {
            return Promise.resolve(this.Boards);
        }
    }

    private handleError(error: Response) {
        console.error("dd");
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}

