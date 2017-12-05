import { Component } from "@angular/core";
import { JwtHelper } from 'angular2-jwt';
import { AppService } from "../app.service";
export var HeaderComponent = (function () {
    function HeaderComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.jwtHelper = new JwtHelper();
        this.email = '';
        this.appService.dataForSharing.subscribe(function (data) {
            var token = data;
            _this.email = _this.jwtHelper.decodeToken(token).user.email;
        });
    }
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-as-header',
                    templateUrl: './header.component.html'
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = [
        { type: AppService, },
    ];
    return HeaderComponent;
}());
//# sourceMappingURL=header.component.js.map