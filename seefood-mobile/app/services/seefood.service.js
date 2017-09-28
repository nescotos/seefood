"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var config_1 = require("../config");
require("rxjs/add/operator/map");
var SeeFoodService = (function () {
    function SeeFoodService(http) {
        this.http = http;
    }
    SeeFoodService.prototype.getPhotoPrediction = function (base64Encoded) {
        var headers = this.createRequestHeaders();
        return this.http.post(config_1.Config.APIURL + '/predict', JSON.stringify({
            image: base64Encoded
        }), { headers: headers }).map(function (res) { return res.json(); });
    };
    SeeFoodService.prototype.createRequestHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    SeeFoodService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SeeFoodService);
    return SeeFoodService;
}());
exports.SeeFoodService = SeeFoodService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZm9vZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VlZm9vZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUE4QztBQUM5QyxvQ0FBbUM7QUFDbkMsaUNBQStCO0FBSS9CO0lBRUUsd0JBQW9CLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO0lBRTdCLENBQUM7SUFFRCwyQ0FBa0IsR0FBbEIsVUFBbUIsYUFBb0I7UUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixlQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsRUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLEtBQUssRUFBRSxhQUFhO1NBQ3JCLENBQUMsRUFDRixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FDckIsQ0FBQyxHQUFHLENBQUUsVUFBQSxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLDZDQUFvQixHQUE1QjtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFyQlUsY0FBYztRQUYxQixpQkFBVSxFQUFFO3lDQUljLFdBQUk7T0FGbEIsY0FBYyxDQXVCMUI7SUFBRCxxQkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBTZWVGb29kU2VydmljZXtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCl7XG5cbiAgfVxuXG4gIGdldFBob3RvUHJlZGljdGlvbihiYXNlNjRFbmNvZGVkOnN0cmluZyl7XG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXJzKCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgQ29uZmlnLkFQSVVSTCArICcvcHJlZGljdCcsXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGltYWdlOiBiYXNlNjRFbmNvZGVkXG4gICAgICB9KSxcbiAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9XG4gICAgKS5tYXAoIHJlcyA9PiAgcmVzLmpzb24oKSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXJzKCl7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbn1cbiJdfQ==