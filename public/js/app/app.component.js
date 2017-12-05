import { Component } from '@angular/core';
import { AppService } from "./app.service";
import { Router } from "@angular/router";
export var AppComponent = (function () {
    function AppComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    AppComponent.prototype.loggedIn = function () {
        return this.appService.loggedIn();
    };
    AppComponent.prototype.notLoggedIn = function () {
        return this.appService.notLoggedIn();
    };
    AppComponent.prototype.roleIs = function () {
        return this.appService.roleIs();
    };
    AppComponent.prototype.onLogout = function () {
        this.appService.logout();
        this.router.navigate(['login']);
    };
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    templateUrl: './app.component.html'
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [
        { type: AppService, },
        { type: Router, },
    ];
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map