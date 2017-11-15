"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var board_1 = require("../models/board");
var subtask_1 = require("../models/subtask");
var task_1 = require("../models/task");
var trello_service_1 = require("../services/trello.service");
var HomepageComponent = (function () {
    function HomepageComponent(_trelloService, _router) {
        this._trelloService = _trelloService;
        this._router = _router;
        this.boards = Array();
        this.heading = "All Boards";
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("homepage");
        this._trelloService.getBoardsWithPromises()
            .then(function (boards) { return _this.boards = boards; }, function (error) { return _this.errorMessage = error; });
        //this.boards.push(this.seedData());
    };
    HomepageComponent.prototype.boardDetail = function (item) {
        this._router.navigate(["board", item.id]);
    };
    HomepageComponent.prototype.seedData = function () {
        var temptask = new task_1.Task();
        var tempSubTask = new subtask_1.SubTask();
        var board = new board_1.Board();
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
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    core_1.Component({
        selector: 'app-homepage',
        templateUrl: './homepage/homepage.component.html',
        styleUrls: ['./homepage/homepage.component.css']
    }),
    __metadata("design:paramtypes", [trello_service_1.TrelloService, router_1.Router])
], HomepageComponent);
exports.HomepageComponent = HomepageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUV6Qyx5Q0FBd0M7QUFDeEMsNkNBQTRDO0FBQzVDLHVDQUFzQztBQUN0Qyw2REFBeUQ7QUFRekQsSUFBYSxpQkFBaUI7SUFLNUIsMkJBQW9CLGNBQTRCLEVBQVMsT0FBZTtRQUFwRCxtQkFBYyxHQUFkLGNBQWMsQ0FBYztRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFKeEUsV0FBTSxHQUFZLEtBQUssRUFBRSxDQUFDO1FBRTFCLFlBQU8sR0FBVyxZQUFZLENBQUM7SUFFNkMsQ0FBQztJQUU3RSxvQ0FBUSxHQUFSO1FBQUEsaUJBTUc7UUFMRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLEVBQUU7YUFDNUIsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQXBCLENBQW9CLEVBQ2xDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztRQUMxRCxvQ0FBb0M7SUFDcEMsQ0FBQztJQUVJLHVDQUFXLEdBQWxCLFVBQW1CLElBQVc7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNNLG9DQUFRLEdBQWY7UUFDRSxJQUFJLFFBQVEsR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ2hDLElBQUksV0FBVyxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ3pDLElBQUksS0FBSyxHQUFVLElBQUksYUFBSyxFQUFFLENBQUM7UUFFL0IsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEIsUUFBUSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7UUFDaEMsUUFBUSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFFNUIsV0FBVyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDckIsV0FBVyxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQztRQUUxQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssRUFBRSxDQUFDO1FBQzNCLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRW5DLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsS0FBSyxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUVmLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUF4Q1ksaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsb0NBQW9DO1FBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO0tBQ2pELENBQUM7cUNBTW1DLDhCQUFhLEVBQWtCLGVBQU07R0FMN0QsaUJBQWlCLENBd0M3QjtBQXhDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuLi9tb2RlbHMvYm9hcmQnO1xyXG5pbXBvcnQgeyBTdWJUYXNrIH0gZnJvbSAnLi4vbW9kZWxzL3N1YnRhc2snO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vbW9kZWxzL3Rhc2snO1xyXG5pbXBvcnQge1RyZWxsb1NlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL3RyZWxsby5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1ob21lcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVwYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBib2FyZHM6IEJvYXJkW10gPSBBcnJheSgpO1xyXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gIGhlYWRpbmc6IHN0cmluZyA9IFwiQWxsIEJvYXJkc1wiO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90cmVsbG9TZXJ2aWNlOlRyZWxsb1NlcnZpY2UscHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiaG9tZXBhZ2VcIik7XHJcbiAgICAgdGhpcy5fdHJlbGxvU2VydmljZS5nZXRCb2FyZHNXaXRoUHJvbWlzZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgLnRoZW4oYm9hcmRzID0+IHRoaXMuYm9hcmRzID0gYm9hcmRzLFxyXG4gICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xyXG4gICAgLy90aGlzLmJvYXJkcy5wdXNoKHRoaXMuc2VlZERhdGEoKSk7XHJcbiAgICB9XHJcbiBcclxuICBwdWJsaWMgYm9hcmREZXRhaWwoaXRlbTogQm9hcmQpe1xyXG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcImJvYXJkXCIsIGl0ZW0uaWRdKTtcclxuICB9XHJcbiAgcHVibGljIHNlZWREYXRhKCkge1xyXG4gICAgbGV0IHRlbXB0YXNrOiBUYXNrID0gbmV3IFRhc2soKTtcclxuICAgIGxldCB0ZW1wU3ViVGFzazogU3ViVGFzayA9IG5ldyBTdWJUYXNrKCk7XHJcbiAgICBsZXQgYm9hcmQ6IEJvYXJkID0gbmV3IEJvYXJkKCk7XHJcblxyXG4gICAgdGVtcHRhc2suaWQgPSAxO1xyXG4gICAgdGVtcHRhc2sudGl0bGUgPSBcIkhlbGxvIFRhc2shIVwiO1xyXG4gICAgdGVtcHRhc2sudGFza2hlYWRlcklkID0gXCIxXCI7XHJcblxyXG4gICAgdGVtcFN1YlRhc2suaWQgPSBcIjFcIjtcclxuICAgIHRlbXBTdWJUYXNrLnRpdGxlID0gXCJIZWxsbyBUYXNrIEhlYWRlciEhXCI7XHJcblxyXG4gICAgdGVtcHRhc2suc3VidGFzayA9IEFycmF5KCk7XHJcbiAgICB0ZW1wdGFzay5zdWJ0YXNrLnB1c2godGVtcFN1YlRhc2spO1xyXG5cclxuICAgIGJvYXJkLmlkID0gMTtcclxuICAgIGJvYXJkLnRpdGxlID0gXCJIZWxsbyBTZWVkIEJvYXJkXCI7XHJcbiAgICBib2FyZC50YXNrID0gbmV3IEFycmF5KCk7XHJcbiAgICBib2FyZC50YXNrLnB1c2godGVtcHRhc2spO1xyXG4gICAgcmV0dXJuIGJvYXJkO1xyXG5cclxuICB9XHJcbn1cclxuIl19