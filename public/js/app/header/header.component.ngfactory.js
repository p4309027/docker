/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './header.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../app.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/router/src/directives/router_link_active';
import * as import12 from '@angular/core/src/linker/query_list';
import * as import13 from '@angular/router/src/directives/router_link';
import * as import14 from '@angular/router/src/router';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/router/src/router_state';
import * as import17 from '@angular/common/src/location/location_strategy';
import * as import18 from '@angular/core/src/security';
var renderType_HeaderComponent_Host = null;
var _View_HeaderComponent_Host0 = (function (_super) {
    __extends(_View_HeaderComponent_Host0, _super);
    function _View_HeaderComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HeaderComponent_Host0, renderType_HeaderComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HeaderComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-as-header', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_HeaderComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._HeaderComponent_0_4 = new import3.HeaderComponent(this.parentInjector.get(import8.AppService));
        this._appEl_0.initComponent(this._HeaderComponent_0_4, [], compView_0);
        compView_0.create(this._HeaderComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_HeaderComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.HeaderComponent) && (0 === requestNodeIndex))) {
            return this._HeaderComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_HeaderComponent_Host0;
}(import1.AppView));
function viewFactory_HeaderComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HeaderComponent_Host === null)) {
        (renderType_HeaderComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_HeaderComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var HeaderComponentNgFactory = new import10.ComponentFactory('app-as-header', viewFactory_HeaderComponent_Host0, import3.HeaderComponent);
var styles_HeaderComponent = [];
var renderType_HeaderComponent = null;
var _View_HeaderComponent0 = (function (_super) {
    __extends(_View_HeaderComponent0, _super);
    function _View_HeaderComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HeaderComponent0, renderType_HeaderComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HeaderComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '    ', null);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_2 = this.renderer.createElement(parentRenderNode, 'nav', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'navbar navbar-expand-lg navbar-dark bg-dark-blue fixed-top');
        this._text_3 = this.renderer.createText(this._el_2, '\n  ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'container');
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'a', null);
        this.renderer.setElementAttribute(this._el_6, 'class', 'navbar-brand');
        this.renderer.setElementAttribute(this._el_6, 'href', '#');
        this._text_7 = this.renderer.createText(this._el_6, '\n      ', null);
        this._el_8 = this.renderer.createElement(this._el_6, 'img', null);
        this.renderer.setElementAttribute(this._el_8, 'alt', '');
        this.renderer.setElementAttribute(this._el_8, 'height', '30');
        this.renderer.setElementAttribute(this._el_8, 'src', '/assets/logo.png');
        this.renderer.setElementAttribute(this._el_8, 'width', '150');
        this._text_9 = this.renderer.createText(this._el_6, '\n    ', null);
        this._text_10 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_11 = this.renderer.createElement(this._el_4, 'ul', null);
        this.renderer.setElementAttribute(this._el_11, 'class', 'navbar-nav navbar-right');
        this.renderer.setElementAttribute(this._el_11, 'style', 'flex-direction: row;');
        this._text_12 = this.renderer.createText(this._el_11, '\n        ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'li', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'nav-item ');
        this._text_14 = this.renderer.createText(this._el_13, '\n          ', null);
        this._el_15 = this.renderer.createElement(this._el_13, 'a', null);
        this.renderer.setElementAttribute(this._el_15, 'class', 'nav-link');
        this._text_16 = this.renderer.createText(this._el_15, 'Orders', null);
        this._text_17 = this.renderer.createText(this._el_13, '\n        ', null);
        this._text_18 = this.renderer.createText(this._el_11, '\n        ', null);
        this._el_19 = this.renderer.createElement(this._el_11, 'li', null);
        this.renderer.setElementAttribute(this._el_19, 'class', 'nav-item');
        this._text_20 = this.renderer.createText(this._el_19, '\n          ', null);
        this._el_21 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_21, 'class', 'nav-link');
        this.renderer.setElementAttribute(this._el_21, 'href', 'http://3amigoss.azurewebsites.net/api/products');
        this._text_22 = this.renderer.createText(this._el_21, 'Products', null);
        this._text_23 = this.renderer.createText(this._el_19, '\n        ', null);
        this._text_24 = this.renderer.createText(this._el_11, '\n        ', null);
        this._el_25 = this.renderer.createElement(this._el_11, 'li', null);
        this.renderer.setElementAttribute(this._el_25, 'class', 'nav-item');
        this._text_26 = this.renderer.createText(this._el_25, '\n          ', null);
        this._el_27 = this.renderer.createElement(this._el_25, 'a', null);
        this.renderer.setElementAttribute(this._el_27, 'class', 'nav-link');
        this.renderer.setElementAttribute(this._el_27, 'href', 'http://3amigosp.azurewebsites.net/purchasing');
        this._text_28 = this.renderer.createText(this._el_27, 'Purchases', null);
        this._text_29 = this.renderer.createText(this._el_25, '\n        ', null);
        this._text_30 = this.renderer.createText(this._el_11, '\n        ', null);
        this._el_31 = this.renderer.createElement(this._el_11, 'li', null);
        this.renderer.setElementAttribute(this._el_31, 'class', 'nav-item');
        this._text_32 = this.renderer.createText(this._el_31, '\n          ', null);
        this._el_33 = this.renderer.createElement(this._el_31, 'a', null);
        this.renderer.setElementAttribute(this._el_33, 'class', 'nav-link');
        this._text_34 = this.renderer.createText(this._el_33, 'Messages', null);
        this._text_35 = this.renderer.createText(this._el_31, '\n        ', null);
        this._text_36 = this.renderer.createText(this._el_11, '\n                  \n        ', null);
        this._el_37 = this.renderer.createElement(this._el_11, 'li', null);
        this.renderer.setElementAttribute(this._el_37, 'class', 'nav-item');
        this.renderer.setElementAttribute(this._el_37, 'routerLinkActive', 'active');
        this.renderer.setElementAttribute(this._el_37, 'style', 'padding-right:0px');
        this._RouterLinkActive_37_3 = new import11.RouterLinkActive(this.parentInjector.get(import14.Router), new import15.ElementRef(this._el_37), this.renderer);
        this._query_RouterLink_37_0 = new import12.QueryList();
        this._query_RouterLinkWithHref_37_1 = new import12.QueryList();
        this._el_38 = this.renderer.createElement(this._el_37, 'a', null);
        this.renderer.setElementAttribute(this._el_38, 'class', 'nav-link');
        this._RouterLinkWithHref_38_3 = new import13.RouterLinkWithHref(this.parentInjector.get(import14.Router), this.parentInjector.get(import16.ActivatedRoute), this.parentInjector.get(import17.LocationStrategy));
        this._text_39 = this.renderer.createText(this._el_38, 'User', null);
        this._text_40 = this.renderer.createText(this._el_11, '\n      ', null);
        this._text_41 = this.renderer.createText(this._el_4, '\n    \n  ', null);
        this._text_42 = this.renderer.createText(this._el_2, '\n', null);
        this._text_43 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_38, 'click', this.eventHandler(this._handle_click_38_0.bind(this)));
        this._arr_0 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._el_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._text_41,
            this._text_42,
            this._text_43
        ], [disposable_0], []);
        return null;
    };
    _View_HeaderComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.RouterLinkWithHref) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._RouterLinkWithHref_38_3;
        }
        if (((token === import11.RouterLinkActive) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._RouterLinkActive_37_3;
        }
        return notFoundResult;
    };
    _View_HeaderComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_2 = 'active';
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._RouterLinkActive_37_3.routerLinkActive = currVal_2;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLinkActive'] = new import7.SimpleChange(this._expr_2, currVal_2);
            this._expr_2 = currVal_2;
        }
        if ((changes !== null)) {
            this._RouterLinkActive_37_3.ngOnChanges(changes);
        }
        changes = null;
        var currVal_4 = this._arr_0('login');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._RouterLinkWithHref_38_3.routerLink = currVal_4;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_4, currVal_4);
            this._expr_4 = currVal_4;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_38_3.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_RouterLink_37_0.dirty) {
                this._query_RouterLink_37_0.reset([]);
                this._RouterLinkActive_37_3.links = this._query_RouterLink_37_0;
                this._query_RouterLink_37_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_37_1.dirty) {
                this._query_RouterLinkWithHref_37_1.reset([this._RouterLinkWithHref_38_3]);
                this._RouterLinkActive_37_3.linksWithHrefs = this._query_RouterLinkWithHref_37_1;
                this._query_RouterLinkWithHref_37_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_37_3.ngAfterContentInit();
            }
        }
        var currVal_0 = import4.interpolate(1, 'http://3amigoso.azurewebsites.net/order/displayorders/?custoRef=', this.context.email, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_15, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_0));
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, 'http://3amigosm.azurewebsites.net/message?custid=', this.context.email, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_33, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_1));
            this._expr_1 = currVal_1;
        }
        var currVal_5 = this._RouterLinkWithHref_38_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementProperty(this._el_38, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_5));
            this._expr_5 = currVal_5;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_HeaderComponent0.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_38_3.ngOnDestroy();
        this._RouterLinkActive_37_3.ngOnDestroy();
    };
    _View_HeaderComponent0.prototype._handle_click_38_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLinkWithHref_38_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    return _View_HeaderComponent0;
}(import1.AppView));
export function viewFactory_HeaderComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HeaderComponent === null)) {
        (renderType_HeaderComponent = viewUtils.createRenderComponentType('C:/Users/Abdullah/Desktop/BSc_Computer_Science/sa/docker/assets/app/header/header.component.html', 0, import9.ViewEncapsulation.None, styles_HeaderComponent, {}));
    }
    return new _View_HeaderComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=header.component.ngfactory.js.map