import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Board } from '../models/board';
import { SubTask } from '../models/subtask';
import { Task } from '../models/task';
import {TrelloService} from '../services/trello.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage/homepage.component.html',
  styleUrls: ['./homepage/homepage.component.css']
})
export class HomepageComponent implements OnInit {
  boards: Board[] = Array();
  errorMessage: string;
  heading: string = "All Boards";

  constructor(private _trelloService:TrelloService,private _router: Router) { }

  ngOnInit() {
    console.log("homepage");
     this._trelloService.getBoardsWithPromises()
                   .then(boards => this.boards = boards,
                     error => this.errorMessage = <any>error);
    //this.boards.push(this.seedData());
    }
 
  public boardDetail(item: Board){
    this._router.navigate(["board", item.id]);
  }
  public seedData() {
    let temptask: Task = new Task();
    let tempSubTask: SubTask = new SubTask();
    let board: Board = new Board();

    temptask.id = 1;
    temptask.title = "Hello Task!!";
    temptask.taskheaderId = "1";

    tempSubTask.id = "1";
    tempSubTask.title = "Hello Task Header!!";

    temptask.subtask = Array();
    temptask.subtask.push(tempSubTask);

    board.id = 1;
    board.title = "Hello Seed Board";
    board.task = new Array();
    board.task.push(temptask);
    return board;

  }
}
