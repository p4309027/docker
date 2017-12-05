import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AppService } from "../app.service";
import { ErrorService } from "../errors/error.service";
import { UserModel } from "../models/user.model";
export var LoginComponent = (function () {
    function LoginComponent(appService, router, errorService) {
        this.appService = appService;
        this.router = router;
        this.errorService = errorService;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new UserModel(this.myForm.value.email, this.myForm.value.password);
        this.appService.login(user)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            // localStorage.setItem('userId', data.userId);
            // localStorage.setItem('userRole', data.userRole);
            _this.appService.shareData(data.token);
            // check if the user staff, if true go to /staff
            if (_this.appService.roleIs()) {
                _this.router.navigate(['user-profile']);
            }
            else {
                _this.router.navigate(['staff']);
            }
        }, function (error) { return _this.errorService.handleError(error); });
        this.myForm.reset();
    };
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.clear();
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
        if (this.appService.loggedIn()) {
            this.router.navigate(['user-profile']);
        }
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-as-login',
                    templateUrl: './login.component.html'
                },] },
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = [
        { type: AppService, },
        { type: Router, },
        { type: ErrorService, },
    ];
    return LoginComponent;
}());
//# sourceMappingURL=login.component.js.map