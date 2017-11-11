"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/toPromise");
var TrelloService = (function () {
    function TrelloService(_http) {
        this._http = _http;
        this._boardUrl = '/api/board/boards.json';
    }
    TrelloService.prototype.getBoards = function () {
        var _this = this;
        if (this.Boards == undefined) {
            return this._http.get(this._boardUrl)
                .map(function (response) { return response.json(); })
                .do(function (data) { return _this.Boards = data; })
                .catch(this.handleError);
        }
        else {
            return Observable_1.Observable.of(this.Boards);
        }
    };
    TrelloService.prototype.getBoardsWithPromises = function () {
        var _this = this;
        if (this.Boards == undefined) {
            return this._http.get(this._boardUrl).toPromise()
                .then(function (response) {
                _this.Boards = response.json();
                return response.json();
            });
        }
        else {
            return Promise.resolve(this.Boards);
        }
    };
    TrelloService.prototype.handleError = function (error) {
        console.error("dd");
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return TrelloService;
}());
TrelloService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TrelloService);
exports.TrelloService = TrelloService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbGxvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmVsbG8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBK0M7QUFDL0MsOENBQTZDO0FBQzdDLGtDQUFnQztBQUNoQyxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQixvQ0FBa0M7QUFDbEMsdUNBQXFDO0FBU3JDLElBQWEsYUFBYTtJQUd0Qix1QkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFGdkIsY0FBUyxHQUFHLHdCQUF3QixDQUFDO0lBRVgsQ0FBQztJQUVuQyxpQ0FBUyxHQUFUO1FBQUEsaUJBVUM7UUFURyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7aUJBQ2hDLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBVSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQXpCLENBQXlCLENBQUM7aUJBQ3RELEVBQUUsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFsQixDQUFrQixDQUFFO2lCQUMvQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsQ0FBQztJQUNMLENBQUM7SUFJRCw2Q0FBcUIsR0FBckI7UUFBQSxpQkFXQztRQVZHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtpQkFDNUMsSUFBSSxDQUFDLFVBQUMsUUFBa0I7Z0JBQ3JCLEtBQUksQ0FBQyxNQUFNLEdBQVksUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN2QyxNQUFNLENBQVcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFJO1lBQU8sQ0FBQyxDQUFFLENBQUM7UUFFdkQsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUM7SUFDTCxDQUFDO0lBRU8sbUNBQVcsR0FBbkIsVUFBb0IsS0FBZTtRQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUdMLG9CQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQztBQXZDWSxhQUFhO0lBRHpCLGlCQUFVLEVBQUU7cUNBSWtCLFdBQUk7R0FIdEIsYUFBYSxDQXVDekI7QUF2Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuLi9tb2RlbHMvYm9hcmQnO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vbW9kZWxzL3Rhc2snO1xyXG5pbXBvcnQgeyBTdWJUYXNrIH0gZnJvbSAnLi4vbW9kZWxzL3N1YnRhc2snO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyZWxsb1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfYm9hcmRVcmwgPSAnL2FwaS9ib2FyZC9ib2FyZHMuanNvbic7XHJcbiAgICBwdWJsaWMgQm9hcmRzOiBCb2FyZFtdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cclxuXHJcbiAgICBnZXRCb2FyZHMoKTogT2JzZXJ2YWJsZTxCb2FyZFtdPiB7XHJcbiAgICAgICAgaWYodGhpcy5Cb2FyZHMgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fYm9hcmRVcmwpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPEJvYXJkW10+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmRvKGRhdGEgPT4gdGhpcy5Cb2FyZHMgPSBkYXRhIClcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YodGhpcy5Cb2FyZHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGdldEJvYXJkc1dpdGhQcm9taXNlcygpOiBQcm9taXNlPEJvYXJkW10+IHtcclxuICAgICAgICBpZih0aGlzLkJvYXJkcyA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl9ib2FyZFVybCkudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Cb2FyZHMgPSA8Qm9hcmRbXT5yZXNwb25zZS5qc29uKCk7IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxCb2FyZFtdPiByZXNwb25zZS5qc29uKCkgICA7ICAgICAgIH0gKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLkJvYXJkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImRkXCIpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuIl19