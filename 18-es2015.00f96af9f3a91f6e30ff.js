(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"2J8R":function(e,n,t){"use strict";t.r(n);var c=t("uHuC"),i=t("j7lP"),a=t("PCNd"),o=t("sEIs"),l=t("EM62"),b=t("2kYt"),r=t("PBFl"),m=t("bFHC"),p=t("wIh0"),d=t("29Wa"),s=t("v9BS");function u(e,n){if(1&e){const e=l.Ub();l.Tb(0,"div",15),l.Tb(1,"button",16),l.bc("click",(function(n){return l.pc(e),l.fc().example1=!0})),l.Tb(2,"mat-icon"),l.yc(3,"play_arrow"),l.Sb(),l.yc(4," Run "),l.Sb(),l.Sb()}}function g(e,n){1&e&&(l.Tb(0,"mwc-icon"),l.yc(1," favorite "),l.Sb())}function x(e,n){1&e&&(l.Tb(0,"div",15),l.wc(1,g,2,0,"mwc-icon",17),l.Sb()),2&e&&(l.Bb(1),l.kc("axLazyElement","https://unpkg.com/@material/mwc-icon@0.6.0/mwc-icon.js?module")("axLazyElementModule",!0))}function y(e,n){if(1&e){const e=l.Ub();l.Tb(0,"div",15),l.Tb(1,"button",16),l.bc("click",(function(n){return l.pc(e),l.fc().example2=!0})),l.Tb(2,"mat-icon"),l.yc(3,"play_arrow"),l.Sb(),l.yc(4," Run "),l.Sb(),l.Sb()}}function w(e,n){1&e&&l.yc(0,"Loading...")}function h(e,n){if(1&e){const e=l.Ub();l.Tb(0,"mwc-button",20),l.bc("click",(function(n){return l.pc(e),l.fc(2).increment()})),l.yc(1," Increment "),l.Sb()}}function f(e,n){if(1&e&&(l.Tb(0,"div",15),l.wc(1,w,1,0,"ng-template",null,18,l.xc),l.wc(3,h,2,0,"mwc-button",19),l.Tb(4,"p"),l.yc(5),l.Sb(),l.Sb()),2&e){const e=l.oc(2),n=l.fc();l.Bb(3),l.kc("axLazyElement","https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module")("axLazyElementLoadingTemplate",e)("axLazyElementModule",!0),l.Bb(2),l.Ac("Counter: ",n.counter,"")}}function T(e,n){if(1&e){const e=l.Ub();l.Tb(0,"div",15),l.Tb(1,"button",16),l.bc("click",(function(n){return l.pc(e),l.fc().example3=!0})),l.Tb(2,"mat-icon"),l.yc(3,"play_arrow"),l.Sb(),l.yc(4," Run "),l.Sb(),l.Sb()}}function k(e,n){1&e&&l.yc(0,"Loading...")}function S(e,n){1&e&&l.yc(0,"Loading failed...")}function v(e,n){1&e&&(l.Tb(0,"mwc-button",23),l.yc(1," Submit "),l.Sb())}function M(e,n){if(1&e&&(l.Tb(0,"div",15),l.wc(1,k,1,0,"ng-template",null,18,l.xc),l.wc(3,S,1,0,"ng-template",null,21,l.xc),l.wc(5,v,2,0,"mwc-button",22),l.Sb()),2&e){const e=l.oc(2),n=l.oc(4);l.Bb(5),l.kc("axLazyElement","https://unpkg.com/wrong-url.js?module")("axLazyElementLoadingTemplate",e)("axLazyElementErrorTemplate",n)("axLazyElementModule",!0)}}function L(e,n){if(1&e){const e=l.Ub();l.Tb(0,"div",15),l.Tb(1,"button",16),l.bc("click",(function(n){return l.pc(e),l.fc().example4=!0})),l.Tb(2,"mat-icon"),l.yc(3,"play_arrow"),l.Sb(),l.yc(4," Run "),l.Sb(),l.Sb()}}function C(e,n){1&e&&l.yc(0,"Loading...")}function O(e,n){1&e&&l.yc(0,"Loading failed...")}function _(e,n){if(1&e&&(l.Tb(0,"ink-chart",28),l.Ob(1,"ink-chart-eqn",29),l.Sb()),2&e){const e=l.fc(2);l.kc("xlim",e.xAxis)("ylim",e.yAxis)}}function P(e,n){if(1&e){const e=l.Ub();l.Tb(0,"div",15),l.Tb(1,"div",24),l.Tb(2,"mat-label"),l.yc(3,"Adjust the "),l.Tb(4,"code"),l.yc(5,"xAxis"),l.Sb(),l.yc(6," array values "),l.Tb(7,"code",25),l.yc(8),l.gc(9,"json"),l.Sb(),l.Sb(),l.Tb(10,"mat-slider",26),l.bc("input",(function(n){return l.pc(e),l.fc().onSliderChange(n)})),l.Sb(),l.Sb(),l.wc(11,C,1,0,"ng-template",null,18,l.xc),l.wc(13,O,1,0,"ng-template",null,21,l.xc),l.wc(15,_,2,2,"ink-chart",27),l.Sb()}if(2&e){const e=l.oc(12),n=l.oc(14),t=l.fc();l.Bb(8),l.zc(l.hc(9,4,t.xAxis)),l.Bb(7),l.kc("axLazyElement","https://unpkg.com/ink-components")("axLazyElementLoadingTemplate",e)("axLazyElementErrorTemplate",n)}}let E=(()=>{class e{constructor(){this.example1=!1,this.example2=!1,this.example3=!1,this.example4=!1,this.codeExample1=z,this.codeExample2=B,this.codeExample3=I,this.codeExample4=A,this.counter=0,this.xAxis=[-6.28,6.28],this.yAxis=[-1,1]}ngOnInit(){}increment(){this.counter++}onSliderChange(e){const{value:n}=e;this.xAxis=[-n,n]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["demo-basic"]],decls:98,vars:12,consts:[[1,"quick-nav"],["routerLink",".","fragment","basic-usage"],["routerLink",".","fragment","loading-template"],["routerLink",".","fragment","error-template"],["routerLink",".","fragment","advanced-angular-template-binding"],[1,"wrapper"],["id","basic-usage"],[1,"content"],["class","implementation",4,"ngIf"],[1,"description"],[3,"highlight"],["id","loading-template"],["id","error-template"],["id","advanced-angular-template-binding"],["href","https://components.ink/","target","_blank"],[1,"implementation"],["mat-flat-button","","color","accent",3,"click"],[4,"axLazyElement","axLazyElementModule"],["loading",""],["raised","",3,"click",4,"axLazyElement","axLazyElementLoadingTemplate","axLazyElementModule"],["raised","",3,"click"],["error",""],["raised","",4,"axLazyElement","axLazyElementLoadingTemplate","axLazyElementErrorTemplate","axLazyElementModule"],["raised",""],[1,"controls"],[1,"values"],["max","10","min","1","value","6.28","step","0.5","thumbLabel","",1,"example-margin",3,"input"],["xlabel","x","ylabel","sin(x)","x-axis-location","origin","y-axis-location","origin",3,"xlim","ylim",4,"axLazyElement","axLazyElementLoadingTemplate","axLazyElementErrorTemplate"],["xlabel","x","ylabel","sin(x)","x-axis-location","origin","y-axis-location","origin",3,"xlim","ylim"],["eqn","Math.sin(x)"]],template:function(e,n){1&e&&(l.Tb(0,"div",0),l.Tb(1,"h3"),l.yc(2,"Quick navigation"),l.Sb(),l.Tb(3,"ul"),l.Tb(4,"li"),l.Tb(5,"a",1),l.yc(6,"Basic usage"),l.Sb(),l.Sb(),l.Tb(7,"li"),l.Tb(8,"a",2),l.yc(9,"Loading template"),l.Sb(),l.Sb(),l.Tb(10,"li"),l.Tb(11,"a",3),l.yc(12,"Error template"),l.Sb(),l.Sb(),l.Tb(13,"li"),l.Tb(14,"a",4),l.yc(15,"Advanced Angular template bindings"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(16,"div",5),l.Tb(17,"h1"),l.yc(18,"Basic"),l.Sb(),l.Tb(19,"h2",6),l.yc(20,"Basic usage"),l.Sb(),l.Tb(21,"div",7),l.wc(22,u,5,0,"div",8),l.wc(23,x,2,2,"div",8),l.Tb(24,"div",9),l.Tb(25,"p"),l.yc(26," The most simple example, all we need is to use element tag, for example "),l.Tb(27,"code"),l.yc(28,"<mwc-icon>"),l.Sb(),l.yc(29," and add "),l.Tb(30,"code"),l.yc(31,"*axLazyElement"),l.Sb(),l.yc(32," directive with the url pointing to the element implementation. "),l.Sb(),l.Ob(33,"pre",10),l.Sb(),l.Sb(),l.Tb(34,"h2",11),l.yc(35," Use loading "),l.Tb(36,"code"),l.yc(37,"<ng-template #loading>"),l.Sb(),l.Sb(),l.Tb(38,"div",7),l.wc(39,y,5,0,"div",8),l.wc(40,f,6,4,"div",8),l.Tb(41,"div",9),l.Tb(42,"p"),l.yc(43," In this example we're loading "),l.Tb(44,"code"),l.yc(45,"<mwc-button>"),l.Sb(),l.yc(46," using the "),l.Tb(47,"code"),l.yc(48,"*axLazyElement"),l.Sb(),l.yc(49," directive but we're also adding "),l.Tb(50,"code"),l.yc(51,"<ng-template #loading>Loading...<ng-template>"),l.Sb(),l.yc(52," which will be displayed before the element was loaded (depending on your connection speed) "),l.Sb(),l.Ob(53,"pre",10),l.Sb(),l.Sb(),l.Tb(54,"h2",12),l.yc(55,"Use error "),l.Tb(56,"code"),l.yc(57,"<ng-template #error>"),l.Sb(),l.Sb(),l.Tb(58,"div",7),l.wc(59,T,5,0,"div",8),l.wc(60,M,6,4,"div",8),l.Tb(61,"div",9),l.Tb(62,"p"),l.yc(63," In this example we're loading "),l.Tb(64,"code"),l.yc(65,"<mwc-button>"),l.Sb(),l.yc(66," using the "),l.Tb(67,"code"),l.yc(68,"*axLazyElement"),l.Sb(),l.yc(69," directive but we're also adding "),l.Tb(70,"code"),l.yc(71,"<ng-template #error>Loading failed...<ng-template>"),l.Sb(),l.yc(72," which will be displayed because the loading request will fail (wrong url) "),l.Sb(),l.Ob(73,"pre",10),l.Sb(),l.Sb(),l.Tb(74,"h2",13),l.yc(75," Advanced binding (objects instead of primitives) "),l.Sb(),l.Tb(76,"div",7),l.wc(77,L,5,0,"div",8),l.wc(78,P,16,6,"div",8),l.Tb(79,"div",9),l.Tb(80,"p"),l.yc(81," In this example we're loading "),l.Tb(82,"a",14),l.yc(83,"Ink"),l.Sb(),l.yc(84," chart element! Ink comes with all elements in single bundle so we can use multiple Ink elements while using "),l.Tb(85,"code"),l.yc(86,"*axLazyElement"),l.Sb(),l.yc(87," directive only on the outmost element. Besides that in our Angular component we have defined "),l.Tb(88,"code"),l.yc(89,"xAxix"),l.Sb(),l.yc(90," array with the "),l.Tb(91,"code"),l.yc(92,"[-6.28, 6.28]"),l.Sb(),l.yc(93," values which are passed in the element using standard Angular property binding "),l.Tb(94,"code"),l.yc(95,'[xlim]="xAxis"'),l.Sb(),l.yc(96,". "),l.Sb(),l.Ob(97,"pre",10),l.Sb(),l.Sb(),l.Sb()),2&e&&(l.Bb(22),l.kc("ngIf",!n.example1),l.Bb(1),l.kc("ngIf",n.example1),l.Bb(10),l.kc("highlight",n.codeExample1),l.Bb(6),l.kc("ngIf",!n.example2),l.Bb(1),l.kc("ngIf",n.example2),l.Bb(13),l.kc("highlight",n.codeExample2),l.Bb(6),l.kc("ngIf",!n.example3),l.Bb(1),l.kc("ngIf",n.example3),l.Bb(13),l.kc("highlight",n.codeExample3),l.Bb(4),l.kc("ngIf",!n.example4),l.Bb(1),l.kc("ngIf",n.example4),l.Bb(19),l.kc("highlight",n.codeExample4))},directives:[o.c,b.k,c.b,r.b,m.a,p.a,d.b,s.a],pipes:[b.f],styles:["[_nghost-%COMP%]{position:relative}.quick-nav[_ngcontent-%COMP%]{display:none;position:fixed;top:105px;left:75%;right:0;padding:0 20px}.quick-nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;opacity:.5}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#d32f2f}.wrapper[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin:0 0 50px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-flex:1;flex:1;margin:0 20px 20px 0;border:2px solid #eee;padding:20px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0 0}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%]{display:inline-block;width:100px;text-align:center}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{-webkit-box-flex:1.5;flex:1.5}.responsive-large[_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%]{display:block}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:60%}"]}),e})();const z="\x3c!-- url = 'https://unpkg.com/@material/mwc-icon@0.6.0/mwc-icon.js?module'; --\x3e\n<mwc-icon *axLazyElement=\"url; module: true\">\n  favorite\n</mwc-icon>",B='\x3c!-- url = \'https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module\' --\x3e;\n<ng-template #loading>Loading...</ng-template>\n<mwc-button *axLazyElement="url; loadingTemplate: loading; module: true"\n            (click)="increment()">\n  Increment\n</mwc-button>',I="\x3c!-- url = 'https://unpkg.com/wrong-url.js?module' --\x3e;\n<ng-template #error>Loading failed...</ng-template>\n<mwc-button *axLazyElement=\"url; errorTemplate: error; module: true\">\n  Submit\n</mwc-button>",A='\x3c!-- https://unpkg.com/ink-components\' --\x3e;\n\x3c!-- xAxis = [-6.28, 6.28] --\x3e;\n<ink-chart *axLazyElement="url" [xlim]="xAxis">\n  <ink-chart-eqn eqn="Math.sin(x)"></ink-chart-eqn>\n</ink-chart>',q=[{path:"",component:E}];let j=(()=>{class e{}return e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({factory:function(n){return new(n||e)},imports:[[o.d.forChild(q)],o.d]}),e})();t.d(n,"BasicModule",(function(){return U}));let U=(()=>{class e{}return e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({factory:function(n){return new(n||e)},imports:[[c.c,i.a,a.a,j]]}),e})()}}]);