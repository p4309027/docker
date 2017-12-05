import { AppService } from './../app.service';
import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms/src/model";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { JwtHelper } from 'angular2-jwt';
import { AddressModel } from '../models/address.model';
import { ErrorService } from "../errors/error.service";
export var UserAddressComponent = (function () {
    function UserAddressComponent(appService, router, errorService) {
        this.appService = appService;
        this.router = router;
        this.errorService = errorService;
        this.jwtHelper = new JwtHelper();
    }
    UserAddressComponent.prototype.onSaveAddress = function () {
        var _this = this;
        this.addressForm.value.userId = this.jwtHelper.decodeToken(localStorage.getItem('token')).user._id;
        this.appService.saveAddress(this.addressForm.value)
            .subscribe(function (data) {
            var address = new AddressModel(data.obj.houseNumber, data.obj.street, data.obj.city, data.obj.postcode, data.obj.user._id, data.obj._id);
            _this.addresses.push(address);
            _this.addressForm.reset();
            //this is temporary service, it allows to use "errorHandler" service
            _this.errorService.handleError(data);
        }, function (error) { return _this.errorService.handleError(error); });
    };
    ;
    UserAddressComponent.prototype.onAddressDelete = function (address) {
        var _this = this;
        this.appService.deleteAddress(address)
            .subscribe(function (data) {
            //this is temporary service, it allows to use "errorHandler" service
            _this.errorService.handleError(data),
                _this.addresses.splice(_this.addresses.indexOf(address), 1);
        }, function (error) { return _this.errorService.handleError(error); });
    };
    UserAddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addressForm = new FormGroup({
            houseNumber: new FormControl('', [
                Validators.required,
                Validators.pattern("^\\d+/?\\d*[a-zA-Z]?(?<!/)$")
            ]),
            street: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            postcode: new FormControl('', [
                Validators.required,
                Validators.pattern("((?:(?:gir)|(?:[a-pr-uwyz])(?:(?:[0-9](?:[a-hjkpstuw]|[0-9])?)|(?:[a-hk-y][0-9](?:[0-9]|[abehmnprv-y])?)))) ?([0-9][abd-hjlnp-uw-z]{2})")
            ])
        });
        if (this.appService.loggedIn()) {
            this.appService.getAddresses()
                .subscribe(function (data) { return _this.addresses = data.addresses; }, function (error) { return _this.errorService.handleError(error); });
        }
        if (!this.appService.loggedIn()) {
            this.router.navigate(['login']);
        }
    };
    ;
    UserAddressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-as-user-address',
                    templateUrl: './user-address.component.html'
                },] },
    ];
    /** @nocollapse */
    UserAddressComponent.ctorParameters = [
        { type: AppService, },
        { type: Router, },
        { type: ErrorService, },
    ];
    return UserAddressComponent;
}());
//# sourceMappingURL=user-address.component.js.map