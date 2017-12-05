import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AppService } from "../app.service";
import { ErrorService } from "../errors/error.service";
import { UserModel } from "../models/user.model";
export var UserProfileComponent = (function () {
    function UserProfileComponent(appService, router, errorService) {
        this.appService = appService;
        this.router = router;
        this.errorService = errorService;
        this.currentUser = {};
    }
    UserProfileComponent.prototype.onUpdate = function () {
        var _this = this;
        var updateUser = new UserModel(this.userProfileForm.value.email, this.userProfileForm.value.password, this.userProfileForm.value.firstName, this.userProfileForm.value.lastName);
        updateUser.role = "customer";
        this.appService.updateUserProfile(updateUser)
            .subscribe(function (data) { return _this.errorService.handleError(data); }, function (error) { return _this.errorService.handleError(error); });
    };
    ;
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userProfileForm = new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            email: new FormControl(),
            password: new FormControl('', Validators.required)
        });
        if (!this.appService.loggedIn()) {
            return this.router.navigate(['login']);
        }
        this.appService.getUserProfile()
            .subscribe(function (user) { return _this.currentUser = user.user; }, function (error) { return _this.errorService.handleError(error); });
    };
    ;
    UserProfileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-as-user-profile',
                    templateUrl: "user-profile.component.html"
                },] },
    ];
    /** @nocollapse */
    UserProfileComponent.ctorParameters = [
        { type: AppService, },
        { type: Router, },
        { type: ErrorService, },
    ];
    return UserProfileComponent;
}());
//# sourceMappingURL=user-profile.component.js.map