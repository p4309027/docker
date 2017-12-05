import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AppService } from "../app.service";
import { ErrorService } from "../errors/error.service";
import { UserModel } from "../models/user.model";
export var RegisterComponent = (function () {
    function RegisterComponent(appService, router, errorService) {
        this.appService = appService;
        this.router = router;
        this.errorService = errorService;
    }
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new UserModel(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        user.role = "customer";
        user.approved = false;
        this.appService.register(user)
            .subscribe(function (data) { return _this.router.navigate(['login']); }, function (error) { return _this.errorService.handleError(error); });
        this.myForm.reset();
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
        if (this.appService.loggedIn()) {
            this.router.navigate(['user-profile']);
        }
        ;
    };
    RegisterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-as-register',
                    templateUrl: './register.component.html'
                },] },
    ];
    /** @nocollapse */
    RegisterComponent.ctorParameters = [
        { type: AppService, },
        { type: Router, },
        { type: ErrorService, },
    ];
    return RegisterComponent;
}());
//# sourceMappingURL=register.component.js.map