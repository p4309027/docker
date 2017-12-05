import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable, Subject } from "rxjs";
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { appConfig } from "./app-config";
export var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.jwtHelper = new JwtHelper();
        //  RxJS Subject to allow the data to be multicasted to many Observers	
        this.dataForSharing = new Subject();
    }
    AppService.prototype.shareData = function (data) {
        this.dataForSharing.next(data);
    };
    AppService.prototype.register = function (user) {
        var body = JSON.stringify(user);
        return this.http.post(appConfig.apiUrl + 'user/register', body, { headers: appConfig.header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AppService.prototype.login = function (user) {
        var body = JSON.stringify(user);
        return this.http.post(appConfig.apiUrl + 'user/login', body, { headers: appConfig.header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AppService.prototype.getUserProfile = function () {
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get(appConfig.apiUrl + 'user/user-profile' + token, { headers: appConfig.header })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    AppService.prototype.updateUserProfile = function (user) {
        var body = JSON.stringify(user);
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch(appConfig.apiUrl + 'user/user-profile' + token, body, { headers: appConfig.header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AppService.prototype.getAddresses = function () {
        if (tokenNotExpired()) {
            var token = '?token=' + localStorage.getItem('token');
            return this.http.get(appConfig.apiUrl + 'address' + token, { headers: appConfig.header })
                .map(function (response) { return response.json(); })
                .catch(function (error) { return Observable.throw(error.json()); });
        }
    };
    ;
    AppService.prototype.saveAddress = function (address) {
        if (tokenNotExpired()) {
            var body = JSON.stringify(address);
            var token = '?token=' + localStorage.getItem('token');
            return this.http.post(appConfig.apiUrl + 'address' + token, body, { headers: appConfig.header })
                .map(function (response) { return response.json(); })
                .catch(function (error) { return Observable.throw(error.json()); });
        }
    };
    ;
    AppService.prototype.deleteAddress = function (address) {
        var token = '?token=' + localStorage.getItem('token');
        return this.http.delete(appConfig.apiUrl + 'address' + '/' + address._id + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    ;
    AppService.prototype.logout = function () {
        localStorage.clear();
    };
    AppService.prototype.loggedIn = function () {
        return tokenNotExpired();
    };
    AppService.prototype.notLoggedIn = function () {
        if (localStorage.getItem('token') === null) {
            return true;
        }
        else {
            return false;
        }
    };
    AppService.prototype.roleIs = function () {
        var token = localStorage.getItem('token');
        if (token) {
            var role = this.jwtHelper.decodeToken(token).user.role;
            return role === "customer" ? true : false;
        }
    };
    AppService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AppService.ctorParameters = [
        { type: Http, },
    ];
    return AppService;
}());
//# sourceMappingURL=app.service.js.map