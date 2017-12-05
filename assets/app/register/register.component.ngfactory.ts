/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './register.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../app.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from '../errors/error.service';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import14 from '@angular/forms/src/directives/ng_control_status';
import * as import15 from '@angular/forms/src/directives/default_value_accessor';
import * as import16 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/forms/src/directives/control_value_accessor';
import * as import19 from '@angular/forms/src/directives/ng_control';
import * as import20 from '@angular/forms/src/directives/control_container';
var renderType_RegisterComponent_Host:import0.RenderComponentType = (null as any);
class _View_RegisterComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _RegisterComponent_0_4:import3.RegisterComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_RegisterComponent_Host0,renderType_RegisterComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-as-register',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_RegisterComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._RegisterComponent_0_4 = new import3.RegisterComponent(this.parentInjector.get(import8.AppService),this.parentInjector.get(import9.Router),this.parentInjector.get(import10.ErrorService));
    this._appEl_0.initComponent(this._RegisterComponent_0_4,[],compView_0);
    compView_0.create(this._RegisterComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.RegisterComponent) && (0 === requestNodeIndex))) { return this._RegisterComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._RegisterComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_RegisterComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_RegisterComponent_Host === (null as any))) { (renderType_RegisterComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,[],{})); }
  return new _View_RegisterComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const RegisterComponentNgFactory:import12.ComponentFactory<import3.RegisterComponent> = new import12.ComponentFactory<import3.RegisterComponent>('app-as-register',viewFactory_RegisterComponent_Host0,import3.RegisterComponent);
const styles_RegisterComponent:any[] = [];
var renderType_RegisterComponent:import0.RenderComponentType = (null as any);
class _View_RegisterComponent0 extends import1.AppView<import3.RegisterComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _FormGroupDirective_2_3:import13.FormGroupDirective;
  _ControlContainer_2_4:any;
  _NgControlStatusGroup_2_5:import14.NgControlStatusGroup;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _DefaultValueAccessor_9_3:import15.DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_9_4:any[];
  _FormControlName_9_5:import16.FormControlName;
  _NgControl_9_6:any;
  _NgControlStatus_9_7:import14.NgControlStatus;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _DefaultValueAccessor_17_3:import15.DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_17_4:any[];
  _FormControlName_17_5:import16.FormControlName;
  _NgControl_17_6:any;
  _NgControlStatus_17_7:import14.NgControlStatus;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  _DefaultValueAccessor_25_3:import15.DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_25_4:any[];
  _FormControlName_25_5:import16.FormControlName;
  _NgControl_25_6:any;
  _NgControlStatus_25_7:import14.NgControlStatus;
  _text_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _text_32:any;
  _el_33:any;
  _DefaultValueAccessor_33_3:import15.DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_33_4:any[];
  _FormControlName_33_5:import16.FormControlName;
  _NgControl_33_6:any;
  _NgControlStatus_33_7:import14.NgControlStatus;
  _text_34:any;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _text_38:any;
  _text_39:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_21:any;
  /*private*/ _expr_22:any;
  /*private*/ _expr_23:any;
  /*private*/ _expr_24:any;
  /*private*/ _expr_25:any;
  /*private*/ _expr_26:any;
  /*private*/ _expr_27:any;
  /*private*/ _expr_30:any;
  /*private*/ _expr_31:any;
  /*private*/ _expr_32:any;
  /*private*/ _expr_33:any;
  /*private*/ _expr_34:any;
  /*private*/ _expr_35:any;
  /*private*/ _expr_36:any;
  /*private*/ _expr_39:any;
  /*private*/ _expr_40:any;
  /*private*/ _expr_41:any;
  /*private*/ _expr_42:any;
  /*private*/ _expr_43:any;
  /*private*/ _expr_44:any;
  /*private*/ _expr_45:any;
  /*private*/ _expr_46:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_RegisterComponent0,renderType_RegisterComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','small-input');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'form',(null as any));
    this._FormGroupDirective_2_3 = new import13.FormGroupDirective((null as any),(null as any));
    this._ControlContainer_2_4 = this._FormGroupDirective_2_3;
    this._NgControlStatusGroup_2_5 = new import14.NgControlStatusGroup(this._ControlContainer_2_4);
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','form-group small-input');
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'label',(null as any));
    this.renderer.setElementAttribute(this._el_6,'for','firstName');
    this._text_7 = this.renderer.createText(this._el_6,'First Name',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_4,'input',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','form-control');
    this.renderer.setElementAttribute(this._el_9,'formControlName','firstName');
    this.renderer.setElementAttribute(this._el_9,'id','firstName');
    this.renderer.setElementAttribute(this._el_9,'type','text');
    this._DefaultValueAccessor_9_3 = new import15.DefaultValueAccessor(this.renderer,new import17.ElementRef(this._el_9));
    this._NG_VALUE_ACCESSOR_9_4 = [this._DefaultValueAccessor_9_3];
    this._FormControlName_9_5 = new import16.FormControlName(this._ControlContainer_2_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_9_4);
    this._NgControl_9_6 = this._FormControlName_9_5;
    this._NgControlStatus_9_7 = new import14.NgControlStatus(this._NgControl_9_6);
    this._text_10 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_11 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_12,'class','form-group small-input');
    this._text_13 = this.renderer.createText(this._el_12,'\n            ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_12,'label',(null as any));
    this.renderer.setElementAttribute(this._el_14,'for','lastName');
    this._text_15 = this.renderer.createText(this._el_14,'Last Name',(null as any));
    this._text_16 = this.renderer.createText(this._el_12,'\n            ',(null as any));
    this._el_17 = this.renderer.createElement(this._el_12,'input',(null as any));
    this.renderer.setElementAttribute(this._el_17,'class','form-control');
    this.renderer.setElementAttribute(this._el_17,'formControlName','lastName');
    this.renderer.setElementAttribute(this._el_17,'id','lastName');
    this.renderer.setElementAttribute(this._el_17,'type','text');
    this._DefaultValueAccessor_17_3 = new import15.DefaultValueAccessor(this.renderer,new import17.ElementRef(this._el_17));
    this._NG_VALUE_ACCESSOR_17_4 = [this._DefaultValueAccessor_17_3];
    this._FormControlName_17_5 = new import16.FormControlName(this._ControlContainer_2_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_17_4);
    this._NgControl_17_6 = this._FormControlName_17_5;
    this._NgControlStatus_17_7 = new import14.NgControlStatus(this._NgControl_17_6);
    this._text_18 = this.renderer.createText(this._el_12,'\n        ',(null as any));
    this._text_19 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_20 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_20,'class','form-group small-input');
    this._text_21 = this.renderer.createText(this._el_20,'\n            ',(null as any));
    this._el_22 = this.renderer.createElement(this._el_20,'label',(null as any));
    this.renderer.setElementAttribute(this._el_22,'for','email');
    this._text_23 = this.renderer.createText(this._el_22,'Mail',(null as any));
    this._text_24 = this.renderer.createText(this._el_20,'\n            ',(null as any));
    this._el_25 = this.renderer.createElement(this._el_20,'input',(null as any));
    this.renderer.setElementAttribute(this._el_25,'class','form-control');
    this.renderer.setElementAttribute(this._el_25,'formControlName','email');
    this.renderer.setElementAttribute(this._el_25,'id','email');
    this.renderer.setElementAttribute(this._el_25,'type','email');
    this._DefaultValueAccessor_25_3 = new import15.DefaultValueAccessor(this.renderer,new import17.ElementRef(this._el_25));
    this._NG_VALUE_ACCESSOR_25_4 = [this._DefaultValueAccessor_25_3];
    this._FormControlName_25_5 = new import16.FormControlName(this._ControlContainer_2_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_25_4);
    this._NgControl_25_6 = this._FormControlName_25_5;
    this._NgControlStatus_25_7 = new import14.NgControlStatus(this._NgControl_25_6);
    this._text_26 = this.renderer.createText(this._el_20,'\n        ',(null as any));
    this._text_27 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_28 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_28,'class','form-group small-input');
    this._text_29 = this.renderer.createText(this._el_28,'\n            ',(null as any));
    this._el_30 = this.renderer.createElement(this._el_28,'label',(null as any));
    this.renderer.setElementAttribute(this._el_30,'for','password');
    this._text_31 = this.renderer.createText(this._el_30,'Password',(null as any));
    this._text_32 = this.renderer.createText(this._el_28,'\n            ',(null as any));
    this._el_33 = this.renderer.createElement(this._el_28,'input',(null as any));
    this.renderer.setElementAttribute(this._el_33,'class','form-control');
    this.renderer.setElementAttribute(this._el_33,'formControlName','password');
    this.renderer.setElementAttribute(this._el_33,'id','password');
    this.renderer.setElementAttribute(this._el_33,'type','password');
    this._DefaultValueAccessor_33_3 = new import15.DefaultValueAccessor(this.renderer,new import17.ElementRef(this._el_33));
    this._NG_VALUE_ACCESSOR_33_4 = [this._DefaultValueAccessor_33_3];
    this._FormControlName_33_5 = new import16.FormControlName(this._ControlContainer_2_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_33_4);
    this._NgControl_33_6 = this._FormControlName_33_5;
    this._NgControlStatus_33_7 = new import14.NgControlStatus(this._NgControl_33_6);
    this._text_34 = this.renderer.createText(this._el_28,'\n        ',(null as any));
    this._text_35 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_36 = this.renderer.createElement(this._el_2,'button',(null as any));
    this.renderer.setElementAttribute(this._el_36,'class','btn btn-primary');
    this.renderer.setElementAttribute(this._el_36,'type','submit');
    this._text_37 = this.renderer.createText(this._el_36,'Submit',(null as any));
    this._text_38 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_39 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'ngSubmit',this.eventHandler(this._handle_ngSubmit_2_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_2,'submit',this.eventHandler(this._handle_submit_2_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_2,'reset',this.eventHandler(this._handle_reset_2_2.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    const subscription_0:any = this._FormGroupDirective_2_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_2_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    var disposable_3:Function = this.renderer.listen(this._el_9,'input',this.eventHandler(this._handle_input_9_0.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_9,'blur',this.eventHandler(this._handle_blur_9_1.bind(this)));
    this._expr_12 = import7.UNINITIALIZED;
    this._expr_13 = import7.UNINITIALIZED;
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this._expr_18 = import7.UNINITIALIZED;
    var disposable_5:Function = this.renderer.listen(this._el_17,'input',this.eventHandler(this._handle_input_17_0.bind(this)));
    var disposable_6:Function = this.renderer.listen(this._el_17,'blur',this.eventHandler(this._handle_blur_17_1.bind(this)));
    this._expr_21 = import7.UNINITIALIZED;
    this._expr_22 = import7.UNINITIALIZED;
    this._expr_23 = import7.UNINITIALIZED;
    this._expr_24 = import7.UNINITIALIZED;
    this._expr_25 = import7.UNINITIALIZED;
    this._expr_26 = import7.UNINITIALIZED;
    this._expr_27 = import7.UNINITIALIZED;
    var disposable_7:Function = this.renderer.listen(this._el_25,'input',this.eventHandler(this._handle_input_25_0.bind(this)));
    var disposable_8:Function = this.renderer.listen(this._el_25,'blur',this.eventHandler(this._handle_blur_25_1.bind(this)));
    this._expr_30 = import7.UNINITIALIZED;
    this._expr_31 = import7.UNINITIALIZED;
    this._expr_32 = import7.UNINITIALIZED;
    this._expr_33 = import7.UNINITIALIZED;
    this._expr_34 = import7.UNINITIALIZED;
    this._expr_35 = import7.UNINITIALIZED;
    this._expr_36 = import7.UNINITIALIZED;
    var disposable_9:Function = this.renderer.listen(this._el_33,'input',this.eventHandler(this._handle_input_33_0.bind(this)));
    var disposable_10:Function = this.renderer.listen(this._el_33,'blur',this.eventHandler(this._handle_blur_33_1.bind(this)));
    this._expr_39 = import7.UNINITIALIZED;
    this._expr_40 = import7.UNINITIALIZED;
    this._expr_41 = import7.UNINITIALIZED;
    this._expr_42 = import7.UNINITIALIZED;
    this._expr_43 = import7.UNINITIALIZED;
    this._expr_44 = import7.UNINITIALIZED;
    this._expr_45 = import7.UNINITIALIZED;
    this._expr_46 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._text_38,
      this._text_39
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5,
      disposable_6,
      disposable_7,
      disposable_8,
      disposable_9,
      disposable_10
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.DefaultValueAccessor) && (9 === requestNodeIndex))) { return this._DefaultValueAccessor_9_3; }
    if (((token === import18.NG_VALUE_ACCESSOR) && (9 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_9_4; }
    if (((token === import16.FormControlName) && (9 === requestNodeIndex))) { return this._FormControlName_9_5; }
    if (((token === import19.NgControl) && (9 === requestNodeIndex))) { return this._NgControl_9_6; }
    if (((token === import14.NgControlStatus) && (9 === requestNodeIndex))) { return this._NgControlStatus_9_7; }
    if (((token === import15.DefaultValueAccessor) && (17 === requestNodeIndex))) { return this._DefaultValueAccessor_17_3; }
    if (((token === import18.NG_VALUE_ACCESSOR) && (17 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_17_4; }
    if (((token === import16.FormControlName) && (17 === requestNodeIndex))) { return this._FormControlName_17_5; }
    if (((token === import19.NgControl) && (17 === requestNodeIndex))) { return this._NgControl_17_6; }
    if (((token === import14.NgControlStatus) && (17 === requestNodeIndex))) { return this._NgControlStatus_17_7; }
    if (((token === import15.DefaultValueAccessor) && (25 === requestNodeIndex))) { return this._DefaultValueAccessor_25_3; }
    if (((token === import18.NG_VALUE_ACCESSOR) && (25 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_25_4; }
    if (((token === import16.FormControlName) && (25 === requestNodeIndex))) { return this._FormControlName_25_5; }
    if (((token === import19.NgControl) && (25 === requestNodeIndex))) { return this._NgControl_25_6; }
    if (((token === import14.NgControlStatus) && (25 === requestNodeIndex))) { return this._NgControlStatus_25_7; }
    if (((token === import15.DefaultValueAccessor) && (33 === requestNodeIndex))) { return this._DefaultValueAccessor_33_3; }
    if (((token === import18.NG_VALUE_ACCESSOR) && (33 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_33_4; }
    if (((token === import16.FormControlName) && (33 === requestNodeIndex))) { return this._FormControlName_33_5; }
    if (((token === import19.NgControl) && (33 === requestNodeIndex))) { return this._NgControl_33_6; }
    if (((token === import14.NgControlStatus) && (33 === requestNodeIndex))) { return this._NgControlStatus_33_7; }
    if (((token === import13.FormGroupDirective) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 38)))) { return this._FormGroupDirective_2_3; }
    if (((token === import20.ControlContainer) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 38)))) { return this._ControlContainer_2_4; }
    if (((token === import14.NgControlStatusGroup) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 38)))) { return this._NgControlStatusGroup_2_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_3:any = this.context.myForm;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._FormGroupDirective_2_3.form = currVal_3;
      if ((changes === (null as any))) { (changes = {}); }
      changes['form'] = new import7.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    if ((changes !== (null as any))) { this._FormGroupDirective_2_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_12:any = 'firstName';
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this._FormControlName_9_5.name = currVal_12;
      if ((changes === (null as any))) { (changes = {}); }
      changes['name'] = new import7.SimpleChange(this._expr_12,currVal_12);
      this._expr_12 = currVal_12;
    }
    if ((changes !== (null as any))) { this._FormControlName_9_5.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_21:any = 'lastName';
    if (import4.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this._FormControlName_17_5.name = currVal_21;
      if ((changes === (null as any))) { (changes = {}); }
      changes['name'] = new import7.SimpleChange(this._expr_21,currVal_21);
      this._expr_21 = currVal_21;
    }
    if ((changes !== (null as any))) { this._FormControlName_17_5.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_30:any = 'email';
    if (import4.checkBinding(throwOnChange,this._expr_30,currVal_30)) {
      this._FormControlName_25_5.name = currVal_30;
      if ((changes === (null as any))) { (changes = {}); }
      changes['name'] = new import7.SimpleChange(this._expr_30,currVal_30);
      this._expr_30 = currVal_30;
    }
    if ((changes !== (null as any))) { this._FormControlName_25_5.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_39:any = 'password';
    if (import4.checkBinding(throwOnChange,this._expr_39,currVal_39)) {
      this._FormControlName_33_5.name = currVal_39;
      if ((changes === (null as any))) { (changes = {}); }
      changes['name'] = new import7.SimpleChange(this._expr_39,currVal_39);
      this._expr_39 = currVal_39;
    }
    if ((changes !== (null as any))) { this._FormControlName_33_5.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_4:any = this._NgControlStatusGroup_2_5.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_2,'ng-untouched',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._NgControlStatusGroup_2_5.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_2,'ng-touched',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._NgControlStatusGroup_2_5.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_2,'ng-pristine',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatusGroup_2_5.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_2,'ng-dirty',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatusGroup_2_5.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_2,'ng-valid',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._NgControlStatusGroup_2_5.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_2,'ng-invalid',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_13:any = this._NgControlStatus_9_7.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementClass(this._el_9,'ng-untouched',currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = this._NgControlStatus_9_7.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementClass(this._el_9,'ng-touched',currVal_14);
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = this._NgControlStatus_9_7.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementClass(this._el_9,'ng-pristine',currVal_15);
      this._expr_15 = currVal_15;
    }
    const currVal_16:any = this._NgControlStatus_9_7.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementClass(this._el_9,'ng-dirty',currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = this._NgControlStatus_9_7.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementClass(this._el_9,'ng-valid',currVal_17);
      this._expr_17 = currVal_17;
    }
    const currVal_18:any = this._NgControlStatus_9_7.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementClass(this._el_9,'ng-invalid',currVal_18);
      this._expr_18 = currVal_18;
    }
    const currVal_22:any = this._NgControlStatus_17_7.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_22,currVal_22)) {
      this.renderer.setElementClass(this._el_17,'ng-untouched',currVal_22);
      this._expr_22 = currVal_22;
    }
    const currVal_23:any = this._NgControlStatus_17_7.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this.renderer.setElementClass(this._el_17,'ng-touched',currVal_23);
      this._expr_23 = currVal_23;
    }
    const currVal_24:any = this._NgControlStatus_17_7.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      this.renderer.setElementClass(this._el_17,'ng-pristine',currVal_24);
      this._expr_24 = currVal_24;
    }
    const currVal_25:any = this._NgControlStatus_17_7.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_25,currVal_25)) {
      this.renderer.setElementClass(this._el_17,'ng-dirty',currVal_25);
      this._expr_25 = currVal_25;
    }
    const currVal_26:any = this._NgControlStatus_17_7.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_26,currVal_26)) {
      this.renderer.setElementClass(this._el_17,'ng-valid',currVal_26);
      this._expr_26 = currVal_26;
    }
    const currVal_27:any = this._NgControlStatus_17_7.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_27,currVal_27)) {
      this.renderer.setElementClass(this._el_17,'ng-invalid',currVal_27);
      this._expr_27 = currVal_27;
    }
    const currVal_31:any = this._NgControlStatus_25_7.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_31,currVal_31)) {
      this.renderer.setElementClass(this._el_25,'ng-untouched',currVal_31);
      this._expr_31 = currVal_31;
    }
    const currVal_32:any = this._NgControlStatus_25_7.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_32,currVal_32)) {
      this.renderer.setElementClass(this._el_25,'ng-touched',currVal_32);
      this._expr_32 = currVal_32;
    }
    const currVal_33:any = this._NgControlStatus_25_7.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_33,currVal_33)) {
      this.renderer.setElementClass(this._el_25,'ng-pristine',currVal_33);
      this._expr_33 = currVal_33;
    }
    const currVal_34:any = this._NgControlStatus_25_7.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_34,currVal_34)) {
      this.renderer.setElementClass(this._el_25,'ng-dirty',currVal_34);
      this._expr_34 = currVal_34;
    }
    const currVal_35:any = this._NgControlStatus_25_7.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_35,currVal_35)) {
      this.renderer.setElementClass(this._el_25,'ng-valid',currVal_35);
      this._expr_35 = currVal_35;
    }
    const currVal_36:any = this._NgControlStatus_25_7.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_36,currVal_36)) {
      this.renderer.setElementClass(this._el_25,'ng-invalid',currVal_36);
      this._expr_36 = currVal_36;
    }
    const currVal_40:any = this._NgControlStatus_33_7.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_40,currVal_40)) {
      this.renderer.setElementClass(this._el_33,'ng-untouched',currVal_40);
      this._expr_40 = currVal_40;
    }
    const currVal_41:any = this._NgControlStatus_33_7.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_41,currVal_41)) {
      this.renderer.setElementClass(this._el_33,'ng-touched',currVal_41);
      this._expr_41 = currVal_41;
    }
    const currVal_42:any = this._NgControlStatus_33_7.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_42,currVal_42)) {
      this.renderer.setElementClass(this._el_33,'ng-pristine',currVal_42);
      this._expr_42 = currVal_42;
    }
    const currVal_43:any = this._NgControlStatus_33_7.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_43,currVal_43)) {
      this.renderer.setElementClass(this._el_33,'ng-dirty',currVal_43);
      this._expr_43 = currVal_43;
    }
    const currVal_44:any = this._NgControlStatus_33_7.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_44,currVal_44)) {
      this.renderer.setElementClass(this._el_33,'ng-valid',currVal_44);
      this._expr_44 = currVal_44;
    }
    const currVal_45:any = this._NgControlStatus_33_7.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_45,currVal_45)) {
      this.renderer.setElementClass(this._el_33,'ng-invalid',currVal_45);
      this._expr_45 = currVal_45;
    }
    const currVal_46:boolean = !this.context.myForm.valid;
    if (import4.checkBinding(throwOnChange,this._expr_46,currVal_46)) {
      this.renderer.setElementProperty(this._el_36,'disabled',currVal_46);
      this._expr_46 = currVal_46;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._FormControlName_9_5.ngOnDestroy();
    this._FormControlName_17_5.ngOnDestroy();
    this._FormControlName_25_5.ngOnDestroy();
    this._FormControlName_33_5.ngOnDestroy();
  }
  private _handle_ngSubmit_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onSubmit()) !== false);
    return (true && pd_0);
  }
  private _handle_submit_2_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._FormGroupDirective_2_3.onSubmit()) !== false);
    return (true && pd_0);
  }
  private _handle_reset_2_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._FormGroupDirective_2_3.onReset()) !== false);
    return (true && pd_0);
  }
  private _handle_input_9_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_9_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_9_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_9_3.onTouched()) !== false);
    return (true && pd_0);
  }
  private _handle_input_17_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_17_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_17_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_17_3.onTouched()) !== false);
    return (true && pd_0);
  }
  private _handle_input_25_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_25_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_25_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_25_3.onTouched()) !== false);
    return (true && pd_0);
  }
  private _handle_input_33_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_33_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_33_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_33_3.onTouched()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_RegisterComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.RegisterComponent> {
  if ((renderType_RegisterComponent === (null as any))) { (renderType_RegisterComponent = viewUtils.createRenderComponentType('C:/Users/Abdullah/Desktop/BSc_Computer_Science/sa/docker/assets/app/register/register.component.html',0,import11.ViewEncapsulation.None,styles_RegisterComponent,{})); }
  return new _View_RegisterComponent0(viewUtils,parentInjector,declarationEl);
}