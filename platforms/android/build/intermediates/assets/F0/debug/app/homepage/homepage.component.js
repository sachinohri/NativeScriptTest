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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUV6Qyx5Q0FBd0M7QUFDeEMsNkNBQTRDO0FBQzVDLHVDQUFzQztBQUN0Qyw2REFBeUQ7QUFRekQsSUFBYSxpQkFBaUI7SUFJNUIsMkJBQW9CLGNBQTRCLEVBQVMsT0FBZTtRQUFwRCxtQkFBYyxHQUFkLGNBQWMsQ0FBYztRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFIeEUsV0FBTSxHQUFZLEtBQUssRUFBRSxDQUFDO0lBR2tELENBQUM7SUFFN0Usb0NBQVEsR0FBUjtRQUFBLGlCQU1HO1FBTEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixFQUFFO2FBQzVCLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixFQUNsQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUFDLENBQUM7UUFDMUQsb0NBQW9DO0lBQ3BDLENBQUM7SUFFSSx1Q0FBVyxHQUFsQixVQUFtQixJQUFXO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDTSxvQ0FBUSxHQUFmO1FBQ0UsSUFBSSxRQUFRLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUNoQyxJQUFJLFdBQVcsR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUN6QyxJQUFJLEtBQUssR0FBVSxJQUFJLGFBQUssRUFBRSxDQUFDO1FBRS9CLFFBQVEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBRTVCLFdBQVcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLFdBQVcsQ0FBQyxLQUFLLEdBQUcscUJBQXFCLENBQUM7UUFFMUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUMzQixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVuQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNiLEtBQUssQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUM7UUFDakMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFFZixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLGlCQUFpQjtJQUw3QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLG9DQUFvQztRQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztLQUNqRCxDQUFDO3FDQUttQyw4QkFBYSxFQUFrQixlQUFNO0dBSjdELGlCQUFpQixDQXVDN0I7QUF2Q1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi4vbW9kZWxzL2JvYXJkJztcclxuaW1wb3J0IHsgU3ViVGFzayB9IGZyb20gJy4uL21vZGVscy9zdWJ0YXNrJztcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uL21vZGVscy90YXNrJztcclxuaW1wb3J0IHtUcmVsbG9TZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy90cmVsbG8uc2VydmljZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZXBhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lcGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgYm9hcmRzOiBCb2FyZFtdID0gQXJyYXkoKTtcclxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdHJlbGxvU2VydmljZTpUcmVsbG9TZXJ2aWNlLHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhvbWVwYWdlXCIpO1xyXG4gICAgIHRoaXMuX3RyZWxsb1NlcnZpY2UuZ2V0Qm9hcmRzV2l0aFByb21pc2VzKClcclxuICAgICAgICAgICAgICAgICAgIC50aGVuKGJvYXJkcyA9PiB0aGlzLmJvYXJkcyA9IGJvYXJkcyxcclxuICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuICAgIC8vdGhpcy5ib2FyZHMucHVzaCh0aGlzLnNlZWREYXRhKCkpO1xyXG4gICAgfVxyXG4gXHJcbiAgcHVibGljIGJvYXJkRGV0YWlsKGl0ZW06IEJvYXJkKXtcclxuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCJib2FyZFwiLCBpdGVtLmlkXSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzZWVkRGF0YSgpIHtcclxuICAgIGxldCB0ZW1wdGFzazogVGFzayA9IG5ldyBUYXNrKCk7XHJcbiAgICBsZXQgdGVtcFN1YlRhc2s6IFN1YlRhc2sgPSBuZXcgU3ViVGFzaygpO1xyXG4gICAgbGV0IGJvYXJkOiBCb2FyZCA9IG5ldyBCb2FyZCgpO1xyXG5cclxuICAgIHRlbXB0YXNrLmlkID0gMTtcclxuICAgIHRlbXB0YXNrLnRpdGxlID0gXCJIZWxsbyBUYXNrISFcIjtcclxuICAgIHRlbXB0YXNrLnRhc2toZWFkZXJJZCA9IFwiMVwiO1xyXG5cclxuICAgIHRlbXBTdWJUYXNrLmlkID0gXCIxXCI7XHJcbiAgICB0ZW1wU3ViVGFzay50aXRsZSA9IFwiSGVsbG8gVGFzayBIZWFkZXIhIVwiO1xyXG5cclxuICAgIHRlbXB0YXNrLnN1YnRhc2sgPSBBcnJheSgpO1xyXG4gICAgdGVtcHRhc2suc3VidGFzay5wdXNoKHRlbXBTdWJUYXNrKTtcclxuXHJcbiAgICBib2FyZC5pZCA9IDE7XHJcbiAgICBib2FyZC50aXRsZSA9IFwiSGVsbG8gU2VlZCBCb2FyZFwiO1xyXG4gICAgYm9hcmQudGFzayA9IG5ldyBBcnJheSgpO1xyXG4gICAgYm9hcmQudGFzay5wdXNoKHRlbXB0YXNrKTtcclxuICAgIHJldHVybiBib2FyZDtcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==