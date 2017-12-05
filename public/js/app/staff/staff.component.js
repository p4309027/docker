import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelper } from 'angular2-jwt';
import { StaffService } from "./staff.service";
import { ErrorService } from "../errors/error.service";
export var StaffComponent = (function () {
    function StaffComponent(staffService, router, errorService) {
        this.staffService = staffService;
        this.router = router;
        this.errorService = errorService;
        this.jwtHelper = new JwtHelper();
    }
    // this is for checkbox
    StaffComponent.prototype.handleChange = function (e, i) {
        e.target.value = e.target.checked;
        this.customers[i].approved = e.target.checked;
    };
    StaffComponent.prototype.onUpdateStatus = function (customer) {
        var _this = this;
        this.staffService.approve(customer)
            .subscribe(
        //data errorhandler is temporary service, it allows to use "errorHandler" service
        function (data) { return _this.errorService.handleError(data); }, function (error) { return _this.errorService.handleError(error); });
    };
    StaffComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        if (token !== null && this.staffService.loggedIn()) {
            var role = this.jwtHelper.decodeToken(localStorage.getItem('token')).user.role;
            if (role !== "staff") {
                this.router.navigate(['user-address']);
            }
        }
        else {
            localStorage.clear();
            this.router.navigate(['login']);
        }
        // get the list of customers
        if (this.staffService.loggedIn()) {
            this.staffService.getCustomers()
                .subscribe(function (data) { return _this.customers = data.users; }, function (error) { return _this.errorService.handleError(error); });
        }
    };
    StaffComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-as-staff',
                    templateUrl: './staff.component.html'
                },] },
    ];
    /** @nocollapse */
    StaffComponent.ctorParameters = [
        { type: StaffService, },
        { type: Router, },
        { type: ErrorService, },
    ];
    return StaffComponent;
}());
//# sourceMappingURL=staff.component.js.map