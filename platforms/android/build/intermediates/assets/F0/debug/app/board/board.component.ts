import { Component, OnInit, ElementRef } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

import { TrelloService } from '../services/trello.service'
import { Task } from '../models/task'
import { Board } from '../models/board'

@Component({
  selector: 'app-board',
  templateUrl: './board/board.component.html',
  styleUrls: ['./board/board.component.css']
})
export class BoardComponent implements OnInit {
  task: Task;
  board: Board = new Board;
  errorMessage: string;
  addtaskText: string;
  boardWidth: number;
  tasksAdded: number = 0;
  boardId: number;

  editingTitle = false;
  currentTitle: string;

  constructor(private _route: ActivatedRoute, private _trelloService: TrelloService) { }

  ngOnInit() {
   // let boardId = this._route.snapshot.params['id'];
    this._route.params.subscribe((params) => {
        this.boardId = params["id"];
    });
    console.log(this.boardId);
    this.board = this._trelloService.Boards.find(x => x.id == this.boardId);
  
  }

  
}
