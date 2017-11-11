"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var trello_service_1 = require("../services/trello.service");
var board_1 = require("../models/board");
var BoardComponent = (function () {
    function BoardComponent(_route, _trelloService) {
        this._route = _route;
        this._trelloService = _trelloService;
        this.board = new board_1.Board;
        this.tasksAdded = 0;
        this.editingTitle = false;
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // let boardId = this._route.snapshot.params['id'];
        this._route.params.subscribe(function (params) {
            _this.boardId = params["id"];
        });
        console.log(this.boardId);
        this.board = this._trelloService.Boards.find(function (x) { return x.id == _this.boardId; });
    };
    return BoardComponent;
}());
BoardComponent = __decorate([
    core_1.Component({
        selector: 'app-board',
        templateUrl: './board/board.component.html',
        styleUrls: ['./board/board.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, trello_service_1.TrelloService])
], BoardComponent);
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQThEO0FBQzlELDBDQUF5RDtBQUV6RCw2REFBMEQ7QUFFMUQseUNBQXVDO0FBT3ZDLElBQWEsY0FBYztJQVl6Qix3QkFBb0IsTUFBc0IsRUFBVSxjQUE2QjtRQUE3RCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBVmpGLFVBQUssR0FBVSxJQUFJLGFBQUssQ0FBQztRQUl6QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBR3ZCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBR2dFLENBQUM7SUFFdEYsaUNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEEsbURBQW1EO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDaEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLElBQUksS0FBSSxDQUFDLE9BQU8sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBRTFFLENBQUM7SUFHSCxxQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUF6QlksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztLQUMzQyxDQUFDO3FDQWE0Qix1QkFBYyxFQUEwQiw4QkFBYTtHQVp0RSxjQUFjLENBeUIxQjtBQXpCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhcmFtcywgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVHJlbGxvU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RyZWxsby5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vbW9kZWxzL3Rhc2snXHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi4vbW9kZWxzL2JvYXJkJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYm9hcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ib2FyZC9ib2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdGFzazogVGFzaztcclxuICBib2FyZDogQm9hcmQgPSBuZXcgQm9hcmQ7XHJcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbiAgYWRkdGFza1RleHQ6IHN0cmluZztcclxuICBib2FyZFdpZHRoOiBudW1iZXI7XHJcbiAgdGFza3NBZGRlZDogbnVtYmVyID0gMDtcclxuICBib2FyZElkOiBudW1iZXI7XHJcblxyXG4gIGVkaXRpbmdUaXRsZSA9IGZhbHNlO1xyXG4gIGN1cnJlbnRUaXRsZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX3RyZWxsb1NlcnZpY2U6IFRyZWxsb1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgLy8gbGV0IGJvYXJkSWQgPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XHJcbiAgICB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgICB0aGlzLmJvYXJkSWQgPSBwYXJhbXNbXCJpZFwiXTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5ib2FyZElkKTtcclxuICAgIHRoaXMuYm9hcmQgPSB0aGlzLl90cmVsbG9TZXJ2aWNlLkJvYXJkcy5maW5kKHggPT4geC5pZCA9PSB0aGlzLmJvYXJkSWQpO1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgXHJcbn1cclxuIl19