"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var camera = require("nativescript-camera");
var image_source_1 = require("tns-core-modules/image-source");
var seefood_service_1 = require("../services/seefood.service");
var SeeFoodComponent = (function () {
    function SeeFoodComponent(router, imageSource, seeFoodService) {
        this.router = router;
        this.imageSource = imageSource;
        this.seeFoodService = seeFoodService;
    }
    SeeFoodComponent.prototype.ngOnInit = function () {
        camera.requestPermissions();
    };
    SeeFoodComponent.prototype.predictFood = function () {
        var _this = this;
        //TODO: Open the camera, take the photo, convert it to base 64 and make a post request
        camera.takePicture({ width: 300, height: 300, keepAspectRatio: true })
            .then(function (image) {
            _this.imageSource.fromAsset(image).then(function (photo) {
                var encodedImage = photo.toBase64String("jpeg", 100);
                _this.seeFoodService.getPhotoPrediction(encodedImage).subscribe(function (res) {
                    console.log(res.json);
                }, function (err) {
                    console.log('There is an error', err);
                });
            });
        });
        // this.router.navigate(['/seefood-detail'])
    };
    SeeFoodComponent = __decorate([
        core_1.Component({
            selector: 'seefood-component',
            moduleId: module.id,
            templateUrl: './seefood.component.html',
            providers: [image_source_1.ImageSource, seefood_service_1.SeeFoodService]
        }),
        __metadata("design:paramtypes", [router_1.Router, image_source_1.ImageSource, seefood_service_1.SeeFoodService])
    ], SeeFoodComponent);
    return SeeFoodComponent;
}());
exports.SeeFoodComponent = SeeFoodComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZm9vZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWVmb29kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFDekMsNENBQThDO0FBQzlDLDhEQUE0RDtBQUM1RCwrREFBNkQ7QUFTN0Q7SUFFRSwwQkFBb0IsTUFBYSxFQUFVLFdBQXVCLEVBQVUsY0FBNkI7UUFBckYsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7SUFFekcsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDRSxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUFBLGlCQWNDO1FBYkMsc0ZBQXNGO1FBQ3RGLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBQyxDQUFDO2FBQ3BFLElBQUksQ0FBQyxVQUFDLEtBQUs7WUFDVixLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO2dCQUMzQyxJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDckQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO29CQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxFQUFFLFVBQUEsR0FBRztvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCw0Q0FBNEM7SUFDOUMsQ0FBQztJQXhCVSxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxnQ0FBYyxDQUFDO1NBQ3pDLENBQUM7eUNBSTJCLGVBQU0sRUFBc0IsMEJBQVcsRUFBeUIsZ0NBQWM7T0FGOUYsZ0JBQWdCLENBMEI1QjtJQUFELHVCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbmltcG9ydCB7IEltYWdlU291cmNlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2UnO1xuaW1wb3J0IHsgU2VlRm9vZFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZWVmb29kLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWVmb29kLWNvbXBvbmVudCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWVmb29kLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbSW1hZ2VTb3VyY2UsIFNlZUZvb2RTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIFNlZUZvb2RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6Um91dGVyLCBwcml2YXRlIGltYWdlU291cmNlOkltYWdlU291cmNlLCBwcml2YXRlIHNlZUZvb2RTZXJ2aWNlOlNlZUZvb2RTZXJ2aWNlKXtcblxuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICBjYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCk7XG4gIH1cblxuICBwcmVkaWN0Rm9vZCgpe1xuICAgIC8vVE9ETzogT3BlbiB0aGUgY2FtZXJhLCB0YWtlIHRoZSBwaG90bywgY29udmVydCBpdCB0byBiYXNlIDY0IGFuZCBtYWtlIGEgcG9zdCByZXF1ZXN0XG4gICAgY2FtZXJhLnRha2VQaWN0dXJlKHsgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDAsIGtlZXBBc3BlY3RSYXRpbzogdHJ1ZX0pXG4gICAgLnRoZW4oKGltYWdlKSA9PiB7XG4gICAgICB0aGlzLmltYWdlU291cmNlLmZyb21Bc3NldChpbWFnZSkudGhlbigocGhvdG8pID0+IHtcbiAgICAgICAgbGV0IGVuY29kZWRJbWFnZSA9IHBob3RvLnRvQmFzZTY0U3RyaW5nKFwianBlZ1wiLCAxMDApO1xuICAgICAgICB0aGlzLnNlZUZvb2RTZXJ2aWNlLmdldFBob3RvUHJlZGljdGlvbihlbmNvZGVkSW1hZ2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5qc29uKTtcbiAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgaXMgYW4gZXJyb3InLCBlcnIpO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2VlZm9vZC1kZXRhaWwnXSlcbiAgfVxuXG59XG4iXX0=