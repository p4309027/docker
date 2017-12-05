import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { tokenNotExpired } from 'angular2-jwt';
import { appConfig } from "../app-config";
export var StaffService = (function () {
    function StaffService(http) {
        this.http = http;
    }
    StaffService.prototype.getCustomers = function () {
        if (tokenNotExpired()) {
            var token = '?token=' + localStorage.getItem('token');
            return this.http.get(appConfig.apiUrl + 'staff' + token, { headers: appConfig.header })
                .map(function (response) { return response.json(); })
                .catch(function (error) { return Observable.throw(error.json()); });
        }
    };
    ;
    StaffService.prototype.approve = function (customer) {
        var body = JSON.stringify(customer);
        var token = '?token=' + localStorage.getItem('token');
        return this.http.patch(appConfig.apiUrl + 'staff' + token, body, { headers: appConfig.header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    StaffService.prototype.loggedIn = function () {
        return tokenNotExpired();
    };
    StaffService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    StaffService.ctorParameters = [
        { type: Http, },
    ];
    return StaffService;
}());
//# sourceMappingURL=staff.service.js.map