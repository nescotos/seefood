"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SeeFoodComponent = (function () {
    function SeeFoodComponent(router) {
        this.router = router;
    }
    SeeFoodComponent.prototype.predictFood = function () {
        //TODO: Open the camera, take the photo, convert it to base 64 and make a post request
        this.router.navigate(['/seefood-detail']);
    };
    SeeFoodComponent = __decorate([
        core_1.Component({
            selector: 'seefood-component',
            moduleId: module.id,
            templateUrl: './seefood.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], SeeFoodComponent);
    return SeeFoodComponent;
}());
exports.SeeFoodComponent = SeeFoodComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZm9vZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWVmb29kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBd0M7QUFReEM7SUFFRSwwQkFBb0IsTUFBYTtRQUFiLFdBQU0sR0FBTixNQUFNLENBQU87SUFFakMsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDRSxzRkFBc0Y7UUFDdEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQVRVLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtTQUN4QyxDQUFDO3lDQUkyQixlQUFNO09BRnRCLGdCQUFnQixDQVc1QjtJQUFELHVCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VlZm9vZC1jb21wb25lbnQnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VlZm9vZC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWVGb29kQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlcil7XG5cbiAgfVxuXG4gIHByZWRpY3RGb29kKCl7XG4gICAgLy9UT0RPOiBPcGVuIHRoZSBjYW1lcmEsIHRha2UgdGhlIHBob3RvLCBjb252ZXJ0IGl0IHRvIGJhc2UgNjQgYW5kIG1ha2UgYSBwb3N0IHJlcXVlc3RcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zZWVmb29kLWRldGFpbCddKVxuICB9XG5cbn1cbiJdfQ==